import type { EtiquetteEntry } from "../domain/types";

export function selectHomepageEntries(
  catalog: readonly EtiquetteEntry[],
  limit = 3,
): EtiquetteEntry[] {
  const safeLimit = Math.max(0, Math.floor(limit));
  const featured = catalog.filter((entry) => entry.featured);
  const fallback = catalog.filter((entry) => !entry.featured);

  return [...featured, ...fallback].slice(0, safeLimit);
}
