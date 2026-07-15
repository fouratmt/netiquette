<script setup lang="ts">
import { RouterLink } from "vue-router";
import { getCategory, getPlatform } from "../content/catalog";
import { entryPath } from "../domain/locale";
import type { EtiquetteEntry, Locale } from "../domain/types";
import TaxonomyBadge from "./TaxonomyBadge.vue";

defineProps<{ entry: EtiquetteEntry; locale: Locale }>();

function uiRead(locale: Locale): string {
  if (locale === "fr") return "Lire la règle";
  if (locale === "ar-TN") return "اقرا القاعدة";
  return "Read the etiquette";
}
</script>

<template>
  <article class="entry-card">
    <div class="entry-card__meta">
      <TaxonomyBadge
        :name="entry.category"
        :label="getCategory(entry.category)?.label[locale] ?? entry.category"
        category
      />
      <TaxonomyBadge
        v-for="platformId in entry.platforms"
        :key="platformId"
        :name="platformId"
        :label="getPlatform(platformId)?.label[locale] ?? platformId"
      />
    </div>
    <h3>
      <RouterLink :to="entryPath(locale, entry.slug)">
        {{ entry.translations[locale].title }}
      </RouterLink>
    </h3>
    <p>{{ entry.translations[locale].takeaway }}</p>
    <RouterLink class="entry-card__link" :to="entryPath(locale, entry.slug)">
      <span>{{ uiRead(locale) }}</span>
      <span aria-hidden="true">→</span>
    </RouterLink>
  </article>
</template>
