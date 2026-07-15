import { describe, expect, it } from "vitest";
import {
  categories,
  entries,
  entryAliases,
  platforms,
} from "../src/content/catalog";
import { locales } from "../src/domain/types";
import { normalizeSearchText, searchEntries } from "../src/domain/search";

describe("catalog content", () => {
  it("contains at least one editor-managed entry", () => {
    expect(entries.length).toBeGreaterThan(0);
  });

  it("has unique stable identifiers and slugs", () => {
    expect(new Set(entries.map((entry) => entry.id)).size).toBe(entries.length);
    expect(new Set(entries.map((entry) => entry.slug)).size).toBe(entries.length);
    expect(new Set(entryAliases.map((alias) => alias.slug)).size).toBe(
      entryAliases.length,
    );
    expect(
      entryAliases.every(
        (alias) =>
          !entries.some((entry) => entry.slug === alias.slug) &&
          entries.some((entry) => entry.slug === alias.targetSlug),
      ),
    ).toBe(true);
  });

  it("has complete translations and valid references", () => {
    const entryIds = new Set(entries.map((entry) => entry.id));
    const categoryIds = new Set(categories.map((category) => category.id));
    const platformIds = new Set(platforms.map((platform) => platform.id));

    for (const entry of entries) {
      expect(categoryIds.has(entry.category)).toBe(true);
      expect(entry.platforms.length).toBeGreaterThan(0);
      expect(entry.platforms.every((id) => platformIds.has(id))).toBe(true);
      expect([1, 2, 3, 4]).toContain(entry.severity);
      expect(entry.related.every((id) => entryIds.has(id) && id !== entry.id)).toBe(
        true,
      );

      for (const locale of locales) {
        const translation = entry.translations[locale];
        expect(translation.title.trim()).not.toBe("");
        expect(translation.takeaway.trim()).not.toBe("");
        expect(translation.situation.trim()).not.toBe("");
        expect(translation.whyItMatters.trim()).not.toBe("");
        expect(translation.whatToDo.trim()).not.toBe("");
        expect(translation.tags.length).toBeGreaterThan(2);
      }
    }
  });
});

describe("catalog search", () => {
  it("normalizes French accents", () => {
    expect(normalizeSearchText("Confidentialité à l’écran")).toBe(
      "confidentialite a l ecran",
    );
  });

  it("finds every editor-managed entry by its localized title", () => {
    for (const entry of entries) {
      for (const locale of locales) {
        const results = searchEntries(entries, locale, {
          query: entry.translations[locale].title,
        });
        expect(results).toContain(entry);
      }
    }
  });

  it("combines search, category, and platform filters", () => {
    const entry = entries[0];
    const results = searchEntries(entries, "en", {
      query: entry.translations.en.title,
      category: entry.category,
      platform: entry.platforms[0],
    });

    expect(results).toContain(entry);
    expect(
      results.every(
        (result) =>
          result.category === entry.category &&
          result.platforms.includes(entry.platforms[0]),
      ),
    ).toBe(true);
  });

  it("filters without requiring a query", () => {
    const platform = entries[0].platforms[0];
    const results = searchEntries(entries, "en", { platform });

    expect(results).toHaveLength(
      entries.filter((entry) => entry.platforms.includes(platform)).length,
    );
    expect(results.every((entry) => entry.platforms.includes(platform))).toBe(
      true,
    );
  });
});
