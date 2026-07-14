import type { RouteRecordRaw } from "vue-router";
import { entries } from "../content/catalog";
import { localeToRoute } from "../domain/locale";
import { locales, type Locale, type RoutePage } from "../domain/types";
import CatalogView from "../views/CatalogView.vue";
import EntryView from "../views/EntryView.vue";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import RootView from "../views/RootView.vue";

function routeMeta(
  page: RoutePage,
  locale: Locale,
  extra: Record<string, string> = {},
) {
  return { page, locale, ...extra };
}

const localizedRoutes: RouteRecordRaw[] = locales.flatMap((locale) => {
  const localePath = `/${localeToRoute(locale)}`;

  return [
    {
      path: localePath,
      name: `home-${locale}`,
      component: HomeView,
      props: { locale },
      meta: routeMeta("home", locale),
    },
    {
      path: `${localePath}/etiquette`,
      name: `catalog-${locale}`,
      component: CatalogView,
      props: { locale },
      meta: routeMeta("catalog", locale),
    },
    ...entries.map<RouteRecordRaw>((entry) => ({
      path: `${localePath}/etiquette/${entry.slug}`,
      name: `entry-${locale}-${entry.id}`,
      component: EntryView,
      props: { locale, slug: entry.slug },
      meta: routeMeta("entry", locale, {
        entryId: entry.id,
        entrySlug: entry.slug,
      }),
    })),
  ];
});

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "root",
    component: RootView,
    meta: routeMeta("root", "en"),
  },
  ...localizedRoutes,
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFoundView,
    meta: routeMeta("not-found", "en"),
  },
];
