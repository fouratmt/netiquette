import { describe, expect, it } from "vitest";
import { entries } from "../src/content/catalog";
import { selectHomepageEntries } from "../src/content/homepage";

describe("homepage entry selection", () => {
  it("uses the entries selected by editors in catalog order", () => {
    expect(selectHomepageEntries(entries).map(({ slug }) => slug)).toEqual([
      "speakerphone-consent",
      "ask-before-video-call",
      "ask-before-sharing-screenshots",
    ]);
  });

  it("fills safely from catalog order when a featured Markdown file is removed", () => {
    const smallerCatalog = entries.filter(
      ({ slug }) => slug !== "speakerphone-consent",
    );

    expect(selectHomepageEntries(smallerCatalog).map(({ slug }) => slug)).toEqual([
      "ask-before-video-call",
      "ask-before-sharing-screenshots",
      "old-post-reactions",
    ]);
  });

  it("supports very small or empty catalogs without undefined entries", () => {
    expect(selectHomepageEntries(entries.slice(0, 1))).toEqual(entries.slice(0, 1));
    expect(selectHomepageEntries([])).toEqual([]);
  });
});
