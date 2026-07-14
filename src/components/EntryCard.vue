<script setup lang="ts">
import { RouterLink } from "vue-router";
import { getCategory, getPlatform } from "../content/catalog";
import { entryPath } from "../domain/locale";
import type { EtiquetteEntry, Locale } from "../domain/types";

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
      <span class="badge badge--category">
        {{ getCategory(entry.category)?.label[locale] }}
      </span>
      <span
        v-for="platformId in entry.platforms"
        :key="platformId"
        class="badge"
      >
        {{ getPlatform(platformId)?.label[locale] }}
      </span>
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
