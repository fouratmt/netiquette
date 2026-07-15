import { describe, expect, it } from "vitest";
import { entries, entryAliases } from "../src/content/catalog";
import { routes } from "../src/app/routes";
import { locales } from "../src/domain/types";
import {
  absolutePublicUrl,
  localizedAlternateLinks,
  publicPathFor,
} from "../src/domain/metadata";

describe("static routes", () => {
  it("defines a concrete page for each localized entry", () => {
    const staticPaths = routes
      .map((route) => route.path)
      .filter((path) => !path.includes(":"));

    expect(staticPaths).toHaveLength(
      1 + locales.length * (2 + entries.length + entryAliases.length),
    );

    for (const locale of ["en", "fr", "ar-tn"]) {
      for (const entry of entries) {
        expect(staticPaths).toContain(`/${locale}/etiquette/${entry.slug}`);
      }
      for (const alias of entryAliases) {
        expect(staticPaths).toContain(`/${locale}/etiquette/${alias.slug}`);
      }
    }
  });

  it("keeps merged etiquette URLs while pointing metadata to the survivor", () => {
    const alias = entryAliases[0];
    const route = routes.find((candidate) =>
      candidate.path.endsWith(`/etiquette/${alias.slug}`),
    );

    expect(route?.props).toEqual({ locale: "en", slug: alias.targetSlug });
    expect(route?.meta?.entrySlug).toBe(alias.targetSlug);
  });
});

describe("public metadata routes", () => {
  it("builds stable canonical and localized alternate URLs", () => {
    expect(publicPathFor("entry", "fr", "speakerphone-consent")).toBe(
      "/fr/etiquette/speakerphone-consent",
    );
    expect(absolutePublicUrl("/en/etiquette")).toBe(
      "https://fourat.dev/netiquette/en/etiquette",
    );

    const alternates = localizedAlternateLinks(
      "entry",
      "speakerphone-consent",
    );
    expect(alternates.map((link) => link.hreflang)).toEqual([
      "en",
      "fr",
      "ar-TN",
      "x-default",
    ]);
  });
});
