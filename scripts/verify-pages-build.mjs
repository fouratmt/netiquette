import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const projectRoot = process.cwd();
const distRoot = path.join(projectRoot, "dist");
const catalogPath = path.join(projectRoot, "src/content/catalog.ts");
const routeLocales = ["en", "fr", "ar-tn"];

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
const catalogSource = await readFile(catalogPath, "utf8");
const slugs = [
  ...new Set(
    [...catalogSource.matchAll(/^\s+slug: "([a-z0-9-]+)",$/gm)].map(
      (match) => match[1],
    ),
  ),
];

if (slugs.length === 0) {
  throw new Error("No etiquette slugs were found in src/content/catalog.ts.");
}

const requiredPages = [
  "index.html",
  ...routeLocales.flatMap((locale) => [
    `${locale}/index.html`,
    `${locale}/etiquette/index.html`,
    ...slugs.map((slug) => `${locale}/etiquette/${slug}/index.html`),
  ]),
];

const missingPages = [];
for (const page of requiredPages) {
  if (!(await fileExists(page))) missingPages.push(page);
}

if (missingPages.length > 0) {
  throw new Error(`Missing pre-rendered pages:\n- ${missingPages.join("\n- ")}`);
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

console.log(
  `Validated ${requiredPages.length} pre-rendered pages and ${htmlFiles.length} HTML files for base path ${basePath}.`,
);
