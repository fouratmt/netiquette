import { describe, expect, it } from "vitest";
import {
  catalogPath,
  detectPreferredLocale,
  directionFor,
  entryPath,
  localeFromRoute,
} from "../src/domain/locale";

describe("locale behavior", () => {
  it("detects supported browser languages and falls back to English", () => {
    expect(detectPreferredLocale(["de-DE", "fr-FR"])).toBe("fr");
    expect(detectPreferredLocale(["ar-TN", "fr-FR"])).toBe("ar-TN");
    expect(detectPreferredLocale(["de-DE"])).toBe("en");
  });

  it("maps route codes and direction correctly", () => {
    expect(localeFromRoute("ar-tn")).toBe("ar-TN");
    expect(directionFor("ar-TN")).toBe("rtl");
    expect(directionFor("fr")).toBe("ltr");
  });

  it("uses stable slugs across localized paths", () => {
    expect(catalogPath("fr")).toBe("/fr/etiquette");
    expect(entryPath("ar-TN", "speakerphone-consent")).toBe(
      "/ar-tn/etiquette/speakerphone-consent",
    );
  });
});
