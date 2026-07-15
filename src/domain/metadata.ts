import { catalogPath, entryPath, homePath } from "./locale";
import { locales, type Locale, type RoutePage } from "./types";

const defaultSiteUrl = "https://fourat.dev/netiquette/";

export function siteRoot(): URL {
  const configured = import.meta.env.VITE_SITE_URL || defaultSiteUrl;
  return new URL(configured.endsWith("/") ? configured : `${configured}/`);
}

export function absolutePublicUrl(path = "/"): string {
  return new URL(path.replace(/^\/+/, ""), siteRoot()).href;
}

export function publicPathFor(
  page: RoutePage,
  locale: Locale,
  entrySlug?: string,
): string | undefined {
  if (page === "root") return "/";
  if (page === "home") return homePath(locale);
  if (page === "catalog") return catalogPath(locale);
  if (page === "entry" && entrySlug) return entryPath(locale, entrySlug);
  return undefined;
}

export function localizedAlternateLinks(page: RoutePage, entrySlug?: string) {
  if (!(["home", "catalog", "entry"] as RoutePage[]).includes(page)) return [];

  const links = locales.map((locale) => ({
    rel: "alternate",
    hreflang: locale,
    href: absolutePublicUrl(publicPathFor(page, locale, entrySlug)),
  }));

  return [
    ...links,
    {
      rel: "alternate",
      hreflang: "x-default",
      href: absolutePublicUrl(publicPathFor(page, "en", entrySlug)),
    },
  ];
}
