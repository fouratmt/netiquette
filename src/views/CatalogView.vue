<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useHead } from "@unhead/vue";
import EntryCard from "../components/EntryCard.vue";
import { categories, entries, platforms, ui } from "../content/catalog";
import { searchEntries } from "../domain/search";
import type { Locale } from "../domain/types";

const props = defineProps<{ locale: Locale }>();
const route = useRoute();
const router = useRouter();

const query = computed(() => stringQuery("q"));
const category = computed(() => stringQuery("category"));
const platform = computed(() => stringQuery("platform"));

const results = computed(() =>
  searchEntries(entries, props.locale, {
    query: query.value,
    category: category.value,
    platform: platform.value,
  }),
);

const hasFilters = computed(
  () => Boolean(query.value || category.value || platform.value),
);

useHead(() => ({
  title: `${ui[props.locale].catalogTitle} — Netiquette`,
  meta: [{ name: "description", content: ui[props.locale].catalogBody }],
}));

function stringQuery(key: string): string {
  const value = route.query[key];
  return typeof value === "string" ? value : "";
}

function updateQuery(key: string, value: string) {
  const next = { ...route.query };
  if (value) next[key] = value;
  else delete next[key];
  void router.replace({ path: route.path, query: next });
}

function clearFilters() {
  void router.replace({ path: route.path });
}
</script>

<template>
  <section class="catalog-hero">
    <div class="page-shell catalog-hero__inner">
      <p class="eyebrow">{{ ui[locale].catalogEyebrow }}</p>
      <h1>{{ ui[locale].catalogTitle }}</h1>
      <p>{{ ui[locale].catalogBody }}</p>
    </div>
  </section>

  <section class="section catalog-section">
    <div class="page-shell">
      <div class="catalog-tools">
        <label class="catalog-search">
          <span>{{ ui[locale].searchLabel }}</span>
          <span class="catalog-search__field">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              :value="query"
              :placeholder="ui[locale].searchPlaceholder"
              @input="updateQuery('q', ($event.target as HTMLInputElement).value)"
            />
          </span>
        </label>

        <div class="catalog-filter-row">
          <label>
            <span>{{ ui[locale].categoryFilter }}</span>
            <select
              :value="category"
              @change="updateQuery('category', ($event.target as HTMLSelectElement).value)"
            >
              <option value="">{{ ui[locale].allCategories }}</option>
              <option v-for="item in categories" :key="item.id" :value="item.id">
                {{ item.label[locale] }}
              </option>
            </select>
          </label>

          <label>
            <span>{{ ui[locale].platformFilter }}</span>
            <select
              :value="platform"
              @change="updateQuery('platform', ($event.target as HTMLSelectElement).value)"
            >
              <option value="">{{ ui[locale].allPlatforms }}</option>
              <option v-for="item in platforms" :key="item.id" :value="item.id">
                {{ item.label[locale] }}
              </option>
            </select>
          </label>
        </div>
      </div>

      <div class="catalog-summary">
        <strong>{{ results.length }} {{ ui[locale].resultsLabel }}</strong>
        <button v-if="hasFilters" type="button" @click="clearFilters">
          {{ ui[locale].clearFilters }}
        </button>
      </div>

      <div v-if="results.length" class="entry-grid entry-grid--catalog">
        <EntryCard
          v-for="entry in results"
          :key="entry.id"
          :entry="entry"
          :locale="locale"
        />
      </div>

      <div v-else class="empty-state">
        <span aria-hidden="true">⌕</span>
        <h2>{{ ui[locale].noResultsTitle }}</h2>
        <p>{{ ui[locale].noResultsBody }}</p>
        <button class="button button--secondary" type="button" @click="clearFilters">
          {{ ui[locale].clearFilters }}
        </button>
      </div>
    </div>
  </section>
</template>
