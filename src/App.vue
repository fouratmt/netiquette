<script setup lang="ts">
import { computed } from "vue";
import { RouterView, useRoute } from "vue-router";
import { useHead } from "@unhead/vue";
import SiteFooter from "./components/SiteFooter.vue";
import SiteHeader from "./components/SiteHeader.vue";
import { directionFor, localeFromRoute } from "./domain/locale";
import {
  absolutePublicUrl,
  localizedAlternateLinks,
  publicPathFor,
} from "./domain/metadata";
import type { Locale, RoutePage } from "./domain/types";

const route = useRoute();
const locale = computed<Locale>(() => {
  const value = route.meta.locale;
  if (route.meta.page === "not-found") {
    return localeFromRoute(route.path.split("/")[1]) ?? "en";
  }
  return value === "fr" || value === "ar-TN" ? value : "en";
});
const isRoot = computed(() => route.meta.page === "root");
const page = computed(() => route.meta.page as RoutePage);
const entrySlug = computed(() =>
  typeof route.meta.entrySlug === "string" ? route.meta.entrySlug : undefined,
);
const canonicalUrl = computed(() => {
  const path = publicPathFor(page.value, locale.value, entrySlug.value);
  return path ? absolutePublicUrl(path) : undefined;
});

useHead(() => ({
  htmlAttrs: {
    lang: locale.value,
    dir: directionFor(locale.value),
  },
  link: canonicalUrl.value
    ? [
        { rel: "canonical", href: canonicalUrl.value },
        ...localizedAlternateLinks(page.value, entrySlug.value),
      ]
    : [],
  meta: [
    ...(canonicalUrl.value
      ? [
          { property: "og:url", content: canonicalUrl.value },
          { property: "og:site_name", content: "Netiquette" },
          { property: "og:image", content: absolutePublicUrl("social-preview.png") },
          { property: "og:image:width", content: "1200" },
          { property: "og:image:height", content: "630" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ name: "robots", content: "noindex, follow" }]),
  ],
}));
</script>

<template>
  <a class="skip-link" href="#main-content">
    {{
      locale === "fr"
        ? "Aller au contenu"
        : locale === "ar-TN"
          ? "امشي للمحتوى"
          : "Skip to content"
    }}
  </a>
  <SiteHeader v-if="!isRoot" :locale="locale" />
  <main id="main-content" tabindex="-1">
    <RouterView />
  </main>
  <SiteFooter v-if="!isRoot" :locale="locale" />
</template>
