import type {
  EntryTranslation,
  EtiquetteEntry,
  Locale,
  SeverityLevel,
} from "../domain/types";

type TranslationField = keyof EntryTranslation;

type ParsedDocument = {
  entry: EtiquetteEntry;
  order: number;
};

const localeHeadings: Record<string, Locale> = {
  English: "en",
  Français: "fr",
  تونسي: "ar-TN",
};

const fieldHeadings: Record<string, TranslationField> = {
  "Title / Titre / العنوان": "title",
  "Short advice / Conseil court / النصيحة المختصرة": "takeaway",
  "Situation / Situation / الموقف": "situation",
  "Why it matters / Pourquoi c’est important / علاش مهم": "whyItMatters",
  "What to do / Que faire / شنوة تعمل": "whatToDo",
  "Nuance / Nuance / توضيح": "nuance",
  "Search words / Mots de recherche / كلمات البحث": "tags",
};

const requiredMetadata = [
  "slug",
  "category",
  "platforms",
  "severity",
  "related",
  "order",
] as const;

const optionalMetadata = ["aliases", "featured"] as const;
const knownMetadata = [...requiredMetadata, ...optionalMetadata] as const;

const requiredTranslationFields: TranslationField[] = [
  "title",
  "takeaway",
  "situation",
  "whyItMatters",
  "whatToDo",
  "tags",
];

const markdownModules = import.meta.glob<string>(
  "../../content/etiquettes/*.md",
  {
    eager: true,
    query: "?raw",
    import: "default",
  },
);

export const entries = loadEtiquettes(markdownModules);
export const entryAliases = entries.flatMap(({ aliases, slug: targetSlug }) =>
  aliases.map((slug) => ({ slug, targetSlug })),
);

export function loadEtiquettes(
  modules: Record<string, string>,
): EtiquetteEntry[] {
  const documents = Object.entries(modules).map(([filename, source]) =>
    parseEtiquetteMarkdown(source, filename),
  );
  const duplicateSlugs = duplicates(documents.map(({ entry }) => entry.slug));

  if (duplicateSlugs.length) {
    throw new Error(`Duplicate etiquette slugs: ${duplicateSlugs.join(", ")}.`);
  }

  const activeSlugs = new Set(documents.map(({ entry }) => entry.slug));
  const aliasOwners = new Map<string, string>();

  for (const { entry } of documents) {
    for (const alias of entry.aliases) {
      if (activeSlugs.has(alias)) {
        throw new Error(
          `Etiquette alias "${alias}" conflicts with an active etiquette slug.`,
        );
      }
      const existingOwner = aliasOwners.get(alias);
      if (existingOwner) {
        throw new Error(
          `Etiquette alias "${alias}" is assigned to both ${existingOwner} and ${entry.slug}.`,
        );
      }
      aliasOwners.set(alias, entry.slug);
    }
  }

  return documents
    .sort(
      (left, right) =>
        left.order - right.order || left.entry.slug.localeCompare(right.entry.slug),
    )
    .map(({ entry }) => ({
      ...entry,
      related: [
        ...new Set(
          entry.related
            .map((slug) =>
              activeSlugs.has(slug) ? slug : aliasOwners.get(slug),
            )
            .filter(
              (slug): slug is string => Boolean(slug) && slug !== entry.slug,
            ),
        ),
      ],
    }));
}

export function parseEtiquetteMarkdown(
  source: string,
  filename = "etiquette.md",
): ParsedDocument {
  const normalized = source.replace(/\r\n?/g, "\n");
  const frontmatterMatch = normalized.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);

  if (!frontmatterMatch) {
    fail(filename, "start the file with a --- metadata block");
  }

  const metadata = parseMetadata(frontmatterMatch[1], filename);
  const body = normalized.slice(frontmatterMatch[0].length).trim();
  const translations = parseTranslations(body, filename);
  const severity = Number(metadata.severity);
  const order = Number(metadata.order);
  const featured = parseOptionalBoolean(metadata.featured, "featured", filename);

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(metadata.slug)) {
    fail(filename, `slug must use lowercase words and hyphens: ${metadata.slug}`);
  }

  const aliases = csv(metadata.aliases ?? "none").filter(
    (value) => value !== "none",
  );
  for (const alias of aliases) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(alias)) {
      fail(filename, `alias must use lowercase words and hyphens: ${alias}`);
    }
    if (alias === metadata.slug) {
      fail(filename, `alias cannot be the same as the slug: ${alias}`);
    }
  }
  const duplicateAliases = duplicates(aliases);
  if (duplicateAliases.length) {
    fail(filename, `duplicate aliases: ${duplicateAliases.join(", ")}`);
  }
  if (![1, 2, 3, 4].includes(severity)) {
    fail(filename, "severity must be 1, 2, 3, or 4");
  }
  if (!Number.isInteger(order) || order < 1) {
    fail(filename, "order must be a positive whole number");
  }

  return {
    order,
    entry: {
      id: metadata.slug,
      slug: metadata.slug,
      aliases,
      category: metadata.category,
      platforms: csv(metadata.platforms),
      severity: severity as SeverityLevel,
      featured,
      related: csv(metadata.related).filter((value) => value !== "none"),
      translations,
    },
  };
}

function parseOptionalBoolean(
  value: string | undefined,
  field: string,
  filename: string,
) {
  if (value === undefined) return false;
  if (value === "true") return true;
  if (value === "false") return false;
  fail(filename, `metadata field "${field}" must be true or false`);
}

function parseMetadata(source: string, filename: string) {
  const metadata: Record<string, string> = {};

  for (const [index, rawLine] of source.split("\n").entries()) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    const separator = line.indexOf(":");
    if (separator < 1) {
      fail(filename, `metadata line ${index + 1} needs a name followed by a colon`);
    }

    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    if (!knownMetadata.includes(key as (typeof knownMetadata)[number])) {
      fail(filename, `unknown metadata field "${key}"`);
    }
    if (!value) fail(filename, `metadata field "${key}" cannot be empty`);
    metadata[key] = value;
  }

  for (const key of requiredMetadata) {
    if (!metadata[key]) fail(filename, `metadata field "${key}" is required`);
  }

  return metadata as Record<(typeof requiredMetadata)[number], string> &
    Partial<Record<(typeof optionalMetadata)[number], string>>;
}

function parseTranslations(
  body: string,
  filename: string,
): Record<Locale, EntryTranslation> {
  const values: Partial<Record<Locale, Partial<Record<TranslationField, string>>>> =
    {};
  let locale: Locale | undefined;
  let field: TranslationField | undefined;
  let buffer: string[] = [];

  const commit = () => {
    if (!locale || !field) return;
    const value = normalizeProse(buffer);
    if (!value) fail(filename, `"${field}" is empty in the ${locale} section`);
    values[locale] ??= {};
    if (values[locale]?.[field]) {
      fail(filename, `"${field}" appears more than once in the ${locale} section`);
    }
    values[locale]![field] = value;
    buffer = [];
  };

  for (const line of `${body}\n# END`.split("\n")) {
    if (line.startsWith("# ")) {
      commit();
      const heading = line.slice(2).trim();
      if (heading === "END") break;
      locale = localeHeadings[heading];
      field = undefined;
      if (!locale) {
        fail(filename, `unknown language heading "${heading}"`);
      }
      if (values[locale]) {
        fail(filename, `language section "${heading}" appears more than once`);
      }
      values[locale] = {};
      continue;
    }

    if (line.startsWith("## ")) {
      commit();
      if (!locale) fail(filename, "add a language heading before content fields");
      const heading = line.slice(3).trim();
      field = fieldHeadings[heading];
      if (!field) fail(filename, `unknown content heading "${heading}"`);
      continue;
    }

    if (/^#{1,6}\s/.test(line)) {
      fail(filename, `unsupported heading "${line}"`);
    }
    if (field) buffer.push(line);
    else if (line.trim()) fail(filename, "text must appear below a content heading");
  }

  for (const locale of ["en", "fr", "ar-TN"] as Locale[]) {
    const translation = values[locale];
    if (!translation) fail(filename, `missing ${locale} language section`);
    for (const field of requiredTranslationFields) {
      if (!translation[field]) {
        fail(filename, `missing "${field}" in the ${locale} section`);
      }
    }
  }

  return Object.fromEntries(
    (["en", "fr", "ar-TN"] as Locale[]).map((locale) => {
      const translation = values[locale]!;
      return [
        locale,
        {
          title: translation.title!,
          takeaway: translation.takeaway!,
          situation: translation.situation!,
          whyItMatters: translation.whyItMatters!,
          whatToDo: translation.whatToDo!,
          ...(translation.nuance ? { nuance: translation.nuance } : {}),
          tags: csv(translation.tags!),
        },
      ];
    }),
  ) as Record<Locale, EntryTranslation>;
}

function normalizeProse(lines: string[]) {
  return lines
    .join("\n")
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.split("\n").map((line) => line.trim()).join(" "))
    .join("\n\n");
}

function csv(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function duplicates(values: string[]) {
  return [...new Set(values.filter((value, index) => values.indexOf(value) !== index))];
}

function fail(filename: string, message: string): never {
  throw new Error(`Invalid etiquette Markdown in ${filename}: ${message}.`);
}
