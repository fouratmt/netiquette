import { describe, expect, it } from "vitest";
import { entries } from "../src/content/catalog";
import { routes } from "../src/app/routes";
import { locales } from "../src/domain/types";

describe("static routes", () => {
  it("defines a concrete page for each localized entry", () => {
    const staticPaths = routes
      .map((route) => route.path)
      .filter((path) => !path.includes(":"));

    expect(staticPaths).toHaveLength(1 + locales.length * (2 + entries.length));

    for (const locale of ["en", "fr", "ar-tn"]) {
      for (const entry of entries) {
        expect(staticPaths).toContain(`/${locale}/etiquette/${entry.slug}`);
      }
    }
  });
});
