import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const projectRoot = process.cwd();
const distRoot = path.join(projectRoot, "dist");
const etiquetteRoot = path.join(projectRoot, "content/etiquettes");
const routeLocales = ["en", "fr", "ar-tn"];
const requiredPwaFiles = [
  "manifest.webmanifest",
  "registerSW.js",
  "sw.js",
  "pwa-192x192.png",
  "pwa-512x512.png",
  "pwa-maskable-512x512.png",
  "apple-touch-icon.png",
];

function normalizeBasePath(value) {
  if (!value || value === "/") return "/";

  return `/${value.replace(/^\/+|\/+$/g, "")}/`;
}

async function fileExists(relativePath) {
  try {
    await access(path.join(distRoot, relativePath));
    return true;
  } catch {
    return false;
  }
}

async function findHtmlFiles(directory = distRoot) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const absolutePath = path.join(directory, entry.name);

      if (entry.isDirectory()) return findHtmlFiles(absolutePath);
      if (entry.isFile() && entry.name.endsWith(".html")) return [absolutePath];
      return [];
    }),
  );

  return files.flat();
}

const basePath = normalizeBasePath(process.env.BASE_PATH);
const etiquetteFiles = (await readdir(etiquetteRoot)).filter((file) =>
  file.endsWith(".md"),
);
const slugs = [];
const aliases = [];
for (const file of etiquetteFiles) {
  const source = await readFile(path.join(etiquetteRoot, file), "utf8");
  const slug = source.match(/^slug:\s*([a-z0-9-]+)\s*$/m)?.[1];
  if (!slug) throw new Error(`${file} is missing a valid slug metadata field.`);
  slugs.push(slug);

  const aliasValue = source.match(/^aliases:\s*(.+)\s*$/m)?.[1]?.trim();
  if (aliasValue && aliasValue !== "none") {
    aliases.push(
      ...aliasValue
        .split(",")
        .map((alias) => alias.trim())
        .filter(Boolean),
    );
  }
}

if (slugs.length === 0) {
  throw new Error("No etiquette Markdown files were found in content/etiquettes.");
}

const requiredPages = [
  "index.html",
  "404.html",
  ...routeLocales.flatMap((locale) => [
    `${locale}/index.html`,
    `${locale}/etiquette/index.html`,
    ...[...slugs, ...aliases].map(
      (slug) => `${locale}/etiquette/${slug}/index.html`,
    ),
  ]),
];

const missingPages = [];
for (const page of requiredPages) {
  if (!(await fileExists(page))) missingPages.push(page);
}

if (missingPages.length > 0) {
  throw new Error(`Missing pre-rendered pages:\n- ${missingPages.join("\n- ")}`);
}

const missingPwaFiles = [];
for (const file of requiredPwaFiles) {
  if (!(await fileExists(file))) missingPwaFiles.push(file);
}

if (missingPwaFiles.length > 0) {
  throw new Error(`Missing PWA files:\n- ${missingPwaFiles.join("\n- ")}`);
}

const htmlFiles = await findHtmlFiles();
const invalidAssetPages = [];
for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, "utf8");
  const expectedAssetPrefix = `${basePath}assets/`;

  if (!html.includes(expectedAssetPrefix)) {
    invalidAssetPages.push(path.relative(distRoot, htmlFile));
  }
}

if (invalidAssetPages.length > 0) {
  throw new Error(
    `Pages do not reference assets under ${basePath}:\n- ${invalidAssetPages.join("\n- ")}`,
  );
}

const localeExpectations = {
  en: '<html lang="en" dir="ltr">',
  fr: '<html lang="fr" dir="ltr">',
  "ar-tn": '<html lang="ar-TN" dir="rtl">',
};

for (const [locale, marker] of Object.entries(localeExpectations)) {
  const html = await readFile(path.join(distRoot, locale, "index.html"), "utf8");
  if (!html.includes(marker)) {
    throw new Error(`${locale}/index.html is missing ${marker}.`);
  }
}

const rootHtml = await readFile(path.join(distRoot, "index.html"), "utf8");
const requiredHeadMarkers = [
  `rel="manifest" href="${basePath}manifest.webmanifest"`,
  `src="${basePath}registerSW.js"`,
  `rel="apple-touch-icon" href="${basePath}apple-touch-icon.png"`,
  'name="theme-color" content="#184e43"',
];

for (const marker of requiredHeadMarkers) {
  if (!rootHtml.includes(marker)) {
    throw new Error(`index.html is missing PWA marker: ${marker}`);
  }
}

const englishEntryHtml = await readFile(
  path.join(distRoot, "en", "etiquette", slugs[0], "index.html"),
  "utf8",
);
for (const marker of [
  `rel="canonical" href="https://fourat.dev/netiquette/en/etiquette/${slugs[0]}"`,
  'hreflang="fr"',
  'hreflang="ar-TN"',
  'hreflang="x-default"',
  'property="og:image" content="https://fourat.dev/netiquette/social-preview.png"',
]) {
  if (!englishEntryHtml.includes(marker)) {
    throw new Error(`Localized entry metadata is missing: ${marker}`);
  }
}

const manifest = JSON.parse(
  await readFile(path.join(distRoot, "manifest.webmanifest"), "utf8"),
);

if (
  manifest.name !== "Netiquette — Digital courtesy guide" ||
  manifest.short_name !== "Netiquette" ||
  manifest.display !== "standalone" ||
  manifest.start_url !== "." ||
  manifest.scope !== "." ||
  manifest.theme_color !== "#184e43" ||
  manifest.background_color !== "#f7f3eb"
) {
  throw new Error("manifest.webmanifest is missing required install metadata.");
}

const requiredManifestIcons = new Map([
  ["pwa-192x192.png", "192x192"],
  ["pwa-512x512.png", "512x512"],
  ["pwa-maskable-512x512.png", "512x512"],
]);

for (const [src, sizes] of requiredManifestIcons) {
  const icon = manifest.icons?.find((item) => item.src === src);
  if (!icon || icon.sizes !== sizes || icon.type !== "image/png") {
    throw new Error(`Manifest icon ${src} is missing or invalid.`);
  }
}

const maskableIcon = manifest.icons?.find(
  (item) => item.src === "pwa-maskable-512x512.png",
);
if (maskableIcon?.purpose !== "maskable") {
  throw new Error("The 512px maskable icon is missing its maskable purpose.");
}

async function readPngSize(file) {
  const png = await readFile(path.join(distRoot, file));
  return { width: png.readUInt32BE(16), height: png.readUInt32BE(20) };
}

for (const [file, expectedSize] of [
  ["pwa-192x192.png", 192],
  ["pwa-512x512.png", 512],
  ["pwa-maskable-512x512.png", 512],
  ["apple-touch-icon.png", 180],
]) {
  const size = await readPngSize(file);
  if (size.width !== expectedSize || size.height !== expectedSize) {
    throw new Error(`${file} must be ${expectedSize}x${expectedSize}px.`);
  }
}

const registration = await readFile(path.join(distRoot, "registerSW.js"), "utf8");
if (
  !registration.includes(`serviceWorker.register('${basePath}sw.js'`) ||
  !registration.includes(`scope: '${basePath}'`)
) {
  throw new Error(`Service worker registration does not use base path ${basePath}.`);
}

const serviceWorker = await readFile(path.join(distRoot, "sw.js"), "utf8");
if (
  !serviceWorker.includes("precacheAndRoute") ||
  !serviceWorker.includes("skipWaiting()") ||
  !serviceWorker.includes("clientsClaim()")
) {
  throw new Error(
    "sw.js is missing precaching or immediate update activation behavior.",
  );
}

// 404.html is copied after Workbox generation because it is a hosting fallback,
// not an offline application route. All navigable catalog routes must be cached.
const routesMissingFromPrecache = requiredPages
  .filter((page) => page !== "404.html")
  .filter(
  (page) => !serviceWorker.includes(`url:\"${page}\"`),
  );
if (routesMissingFromPrecache.length > 0) {
  throw new Error(
    `PWA precache is missing routes:\n- ${routesMissingFromPrecache.join("\n- ")}`,
  );
}

const distFiles = await readdir(distRoot);
if (!distFiles.some((file) => /^workbox-[a-z0-9]+\.js$/.test(file))) {
  throw new Error("The generated Workbox runtime is missing.");
}

console.log(
  `Validated ${requiredPages.length} pre-rendered pages, ${htmlFiles.length} HTML files, and the installable offline PWA for base path ${basePath}.`,
);
