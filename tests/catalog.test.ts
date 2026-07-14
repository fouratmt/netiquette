import { describe, expect, it } from "vitest";
import { categories, entries, platforms } from "../src/content/catalog";
import { locales } from "../src/domain/types";
import { searchEntries } from "../src/domain/search";

describe("catalog content", () => {
  it("has unique stable identifiers and slugs", () => {
    expect(new Set(entries.map((entry) => entry.id)).size).toBe(entries.length);
    expect(new Set(entries.map((entry) => entry.slug)).size).toBe(entries.length);
  });

  it("has complete translations and valid references", () => {
    const entryIds = new Set(entries.map((entry) => entry.id));
    const categoryIds = new Set(categories.map((category) => category.id));
    const platformIds = new Set(platforms.map((platform) => platform.id));

    for (const entry of entries) {
      expect(categoryIds.has(entry.category)).toBe(true);
      expect(entry.platforms.length).toBeGreaterThan(0);
      expect(entry.platforms.every((id) => platformIds.has(id))).toBe(true);
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
  it("finds an English entry by a familiar term", () => {
    const results = searchEntries(entries, "en", { query: "speakerphone" });
    expect(results[0]?.id).toBe("speakerphone-consent");
  });

  it("normalizes French accents", () => {
    const results = searchEntries(entries, "fr", { query: "confidentialite" });
    expect(results.some((entry) => entry.id === "speakerphone-consent")).toBe(true);
  });

  it("searches Tunisian Arabic and combines filters", () => {
    const results = searchEntries(entries, "ar-TN", {
      query: "قروب",
      platform: "whatsapp",
    });
    expect(results.map((entry) => entry.id)).toContain("ask-before-group-add");
    expect(results.every((entry) => entry.platforms.includes("whatsapp"))).toBe(
      true,
    );
  });

  it("filters without requiring a query", () => {
    const results = searchEntries(entries, "en", { platform: "instagram" });
    expect(results).toHaveLength(2);
  });
});
