export const locales = ["en", "fr", "ar-TN"] as const;

export type Locale = (typeof locales)[number];
export type Direction = "ltr" | "rtl";

export type LocalizedText = Record<Locale, string>;

export type SeverityLevel = 1 | 2 | 3 | 4;

export type EntryTranslation = {
  title: string;
  takeaway: string;
  situation: string;
  whyItMatters: string;
  whatToDo: string;
  nuance?: string;
  tags: string[];
};

export type EtiquetteEntry = {
  id: string;
  slug: string;
  category: string;
  platforms: string[];
  severity: SeverityLevel;
  related: string[];
  translations: Record<Locale, EntryTranslation>;
};

export type Category = {
  id: string;
  label: LocalizedText;
  description: LocalizedText;
};

export type Platform = {
  id: string;
  label: LocalizedText;
};

export type UiMessages = {
  brandTagline: string;
  navHome: string;
  navBrowse: string;
  languageLabel: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  searchLabel: string;
  searchPlaceholder: string;
  searchAction: string;
  browseAll: string;
  categorySectionTitle: string;
  categorySectionBody: string;
  featuredTitle: string;
  catalogEyebrow: string;
  catalogTitle: string;
  catalogBody: string;
  categoryFilter: string;
  platformFilter: string;
  allCategories: string;
  allPlatforms: string;
  resultsLabel: string;
  clearFilters: string;
  noResultsTitle: string;
  noResultsBody: string;
  situationTitle: string;
  whyTitle: string;
  insteadTitle: string;
  nuanceTitle: string;
  severityTitle: string;
  relatedTitle: string;
  copyLink: string;
  copied: string;
  share: string;
  shareIntro: string;
  shareGuideTitle: string;
  shareGuideBody: string;
  copyHomeLink: string;
  qrTitle: string;
  qrBody: string;
  installApp: string;
  installAppLabel: string;
  purposeEyebrow: string;
  purposeTitle: string;
  purposeIntro: string;
  purposeExistsTitle: string;
  purposeExistsBody: string;
  purposeCreatedTitle: string;
  purposeCreatedBody: string;
  purposeSentTitle: string;
  purposeSentBody: string;
  receivedTitle: string;
  receivedBody: string;
  receivedNote: string;
  backToCatalog: string;
  footerContext: string;
  footerExploreTitle: string;
  footerLanguagesTitle: string;
  footerNote: string;
  notFoundEyebrow: string;
  notFoundTitle: string;
  notFoundBody: string;
  chooseLanguage: string;
  chooseLanguageBody: string;
};

export type RoutePage = "root" | "home" | "catalog" | "entry" | "not-found";
