<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useHead } from "@unhead/vue";
import EntryCard from "../components/EntryCard.vue";
import SearchForm from "../components/SearchForm.vue";
import { categories, entries, platforms, ui } from "../content/catalog";
import { catalogPath } from "../domain/locale";
import type { Locale } from "../domain/types";

const props = defineProps<{ locale: Locale }>();
const featured = entries.slice(0, 3);

useHead(() => ({
  title: `Netiquette — ${ui[props.locale].brandTagline}`,
  meta: [
    {
      name: "description",
      content: ui[props.locale].heroBody,
    },
    { property: "og:title", content: "Netiquette" },
    { property: "og:description", content: ui[props.locale].heroBody },
  ],
}));
</script>

<template>
  <section class="hero">
    <div class="page-shell hero__grid">
      <div class="hero__copy">
        <p class="eyebrow">{{ ui[locale].heroEyebrow }}</p>
        <h1>{{ ui[locale].heroTitle }}</h1>
        <p class="hero__body">{{ ui[locale].heroBody }}</p>
        <SearchForm :locale="locale" />
        <RouterLink class="text-link" :to="catalogPath(locale)">
          {{ ui[locale].browseAll }} <span aria-hidden="true">→</span>
        </RouterLink>
      </div>

      <aside class="hero-note" aria-label="Netiquette example">
        <span class="hero-note__quote" aria-hidden="true">“</span>
        <p>{{ entries[0].translations[locale].takeaway }}</p>
        <RouterLink :to="`${catalogPath(locale)}/${entries[0].slug}`">
          {{ entries[0].translations[locale].title }}
        </RouterLink>
      </aside>
    </div>
  </section>

  <section class="section section--categories">
    <div class="page-shell">
      <div class="section-heading">
        <div>
          <p class="eyebrow">{{ ui[locale].navBrowse }}</p>
          <h2>{{ ui[locale].categorySectionTitle }}</h2>
        </div>
        <p>{{ ui[locale].categorySectionBody }}</p>
      </div>

      <div class="category-grid">
        <RouterLink
          v-for="(category, index) in categories"
          :key="category.id"
          class="category-card"
          :to="{ path: catalogPath(locale), query: { category: category.id } }"
        >
          <span class="category-card__number">0{{ index + 1 }}</span>
          <h3>{{ category.label[locale] }}</h3>
          <p>{{ category.description[locale] }}</p>
          <span class="category-card__arrow" aria-hidden="true">→</span>
        </RouterLink>
      </div>

      <div class="platform-row" :aria-label="ui[locale].platformFilter">
        <span>{{ ui[locale].platformFilter }}</span>
        <RouterLink
          v-for="platform in platforms"
          :key="platform.id"
          :to="{ path: catalogPath(locale), query: { platform: platform.id } }"
        >
          {{ platform.label[locale] }}
        </RouterLink>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="page-shell">
      <div class="section-heading section-heading--inline">
        <h2>{{ ui[locale].featuredTitle }}</h2>
        <RouterLink class="text-link" :to="catalogPath(locale)">
          {{ ui[locale].browseAll }} <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
      <div class="entry-grid">
        <EntryCard
          v-for="entry in featured"
          :key="entry.id"
          :entry="entry"
          :locale="locale"
        />
      </div>
    </div>
  </section>
</template>
