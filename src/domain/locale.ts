import { locales, type Direction, type Locale } from "./types";

const routeCodes: Record<Locale, string> = {
  en: "en",
  fr: "fr",
  "ar-TN": "ar-tn",
};

export function localeToRoute(locale: Locale): string {
  return routeCodes[locale];
}

export function localeFromRoute(value: unknown): Locale | undefined {
  if (typeof value !== "string") return undefined;

  return locales.find((locale) => routeCodes[locale] === value.toLowerCase());
}

export function directionFor(locale: Locale): Direction {
  return locale === "ar-TN" ? "rtl" : "ltr";
}

export function detectPreferredLocale(languages: readonly string[]): Locale {
  for (const language of languages) {
    const normalized = language.toLowerCase();
    if (normalized.startsWith("ar")) return "ar-TN";
    if (normalized.startsWith("fr")) return "fr";
    if (normalized.startsWith("en")) return "en";
  }

  return "en";
}

export function isLocale(value: string | null): value is Locale {
  return value !== null && locales.includes(value as Locale);
}

export function homePath(locale: Locale): string {
  return `/${localeToRoute(locale)}`;
}

export function catalogPath(locale: Locale): string {
  return `${homePath(locale)}/etiquette`;
}

export function entryPath(locale: Locale, slug: string): string {
  return `${catalogPath(locale)}/${slug}`;
}
