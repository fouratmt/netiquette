<script setup lang="ts">
import { computed } from "vue";
import { RouterView, useRoute } from "vue-router";
import { useHead } from "@unhead/vue";
import SiteFooter from "./components/SiteFooter.vue";
import SiteHeader from "./components/SiteHeader.vue";
import { directionFor, localeFromRoute } from "./domain/locale";
import type { Locale } from "./domain/types";

const route = useRoute();
const locale = computed<Locale>(() => {
  const value = route.meta.locale;
  if (route.meta.page === "not-found") {
    return localeFromRoute(route.path.split("/")[1]) ?? "en";
  }
  return value === "fr" || value === "ar-TN" ? value : "en";
});
const isRoot = computed(() => route.meta.page === "root");

useHead(() => ({
  htmlAttrs: {
    lang: locale.value,
    dir: directionFor(locale.value),
  },
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
