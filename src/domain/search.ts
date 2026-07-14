import type { EtiquetteEntry, Locale } from "./types";

export type CatalogFilters = {
  query?: string;
  category?: string;
  platform?: string;
};

export function normalizeSearchText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

export function searchEntries(
  entries: EtiquetteEntry[],
  locale: Locale,
  filters: CatalogFilters,
): EtiquetteEntry[] {
  const query = normalizeSearchText(filters.query ?? "");
  const terms = query.split(" ").filter(Boolean);

  return entries
    .filter((entry) => !filters.category || entry.category === filters.category)
    .filter(
      (entry) => !filters.platform || entry.platforms.includes(filters.platform),
    )
    .map((entry) => ({ entry, score: scoreEntry(entry, locale, query, terms) }))
    .filter(({ score }) => terms.length === 0 || score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        a.entry.translations[locale].title.localeCompare(
          b.entry.translations[locale].title,
          locale,
        ),
    )
    .map(({ entry }) => entry);
}

function scoreEntry(
  entry: EtiquetteEntry,
  locale: Locale,
  query: string,
  terms: string[],
): number {
  if (terms.length === 0) return 1;

  const translation = entry.translations[locale];
  const title = normalizeSearchText(translation.title);
  const tags = normalizeSearchText(translation.tags.join(" "));
  const takeaway = normalizeSearchText(translation.takeaway);
  const body = normalizeSearchText(
    [
      translation.situation,
      translation.whyItMatters,
      translation.whatToDo,
      translation.nuance ?? "",
    ].join(" "),
  );
  const allText = `${title} ${tags} ${takeaway} ${body}`;

  if (!terms.every((term) => allText.includes(term))) return 0;

  let score = title.includes(query) ? 12 : 0;
  score += tags.includes(query) ? 8 : 0;
  score += takeaway.includes(query) ? 5 : 0;

  for (const term of terms) {
    if (title.includes(term)) score += 5;
    if (tags.includes(term)) score += 4;
    if (takeaway.includes(term)) score += 2;
    if (body.includes(term)) score += 1;
  }

  return score;
}
