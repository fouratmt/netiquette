<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useHead } from "@unhead/vue";
import { ui } from "../content/catalog";
import { catalogPath, localeFromRoute } from "../domain/locale";
import type { Locale } from "../domain/types";

const route = useRoute();
const locale = computed<Locale>(
  () => localeFromRoute(route.path.split("/")[1]) ?? "en",
);

useHead(() => ({ title: `${ui[locale.value].notFoundEyebrow} — Netiquette` }));
</script>

<template>
  <section class="not-found">
    <div class="page-shell not-found__inner">
      <p class="eyebrow">404 · {{ ui[locale].notFoundEyebrow }}</p>
      <h1>{{ ui[locale].notFoundTitle }}</h1>
      <p>{{ ui[locale].notFoundBody }}</p>
      <RouterLink class="button button--primary" :to="catalogPath(locale)">
        {{ ui[locale].browseAll }}
      </RouterLink>
    </div>
  </section>
</template>
