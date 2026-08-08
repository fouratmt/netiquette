<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useHead } from "@unhead/vue";
import EntryCard from "../components/EntryCard.vue";
import InstallAppButton from "../components/InstallAppButton.vue";
import SearchForm from "../components/SearchForm.vue";
import ShareActions from "../components/ShareActions.vue";
import { categories, entries, platforms, ui } from "../content/catalog";
import { selectHomepageEntries } from "../content/homepage";
import { catalogPath } from "../domain/locale";
import type { EtiquetteEntry, Locale } from "../domain/types";

const props = withDefaults(
  defineProps<{ locale: Locale; catalog?: readonly EtiquetteEntry[] }>(),
  { catalog: () => entries },
);
const featured = computed(() => selectHomepageEntries(props.catalog));
const example = computed(() => featured.value[0]);

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

      <aside v-if="example" class="hero-note" aria-label="Netiquette example">
        <span class="hero-note__quote" aria-hidden="true">“</span>
        <p>{{ example.translations[locale].takeaway }}</p>
        <RouterLink :to="`${catalogPath(locale)}/${example.slug}`">
          {{ example.translations[locale].title }}
        </RouterLink>
      </aside>
    </div>

    <div class="page-shell hero-share">
      <span class="hero-share__spark" aria-hidden="true">✦</span>
      <div class="hero-share__copy">
        <strong>{{ ui[locale].shareGuideTitle }}</strong>
        <p>{{ ui[locale].shareGuideBody }}</p>
      </div>
      <div class="hero-share__actions">
        <ShareActions
          :locale="locale"
          title="Netiquette"
          :copy-label="ui[locale].copyHomeLink"
          :share-text="ui[locale].heroBody"
        />
        <InstallAppButton :locale="locale" />
      </div>
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

  <section id="why-netiquette" class="section purpose-section">
    <div class="page-shell">
      <div class="purpose-section__intro">
        <p class="eyebrow">{{ ui[locale].purposeEyebrow }}</p>
        <h2>{{ ui[locale].purposeTitle }}</h2>
        <p>{{ ui[locale].purposeIntro }}</p>
      </div>

      <div class="purpose-grid">
        <article class="purpose-card purpose-card--exists">
          <span aria-hidden="true">01</span>
          <h3>{{ ui[locale].purposeExistsTitle }}</h3>
          <p>{{ ui[locale].purposeExistsBody }}</p>
        </article>
        <article class="purpose-card purpose-card--created">
          <span aria-hidden="true">02</span>
          <h3>{{ ui[locale].purposeCreatedTitle }}</h3>
          <p>{{ ui[locale].purposeCreatedBody }}</p>
        </article>
        <article class="purpose-card purpose-card--sent">
          <span aria-hidden="true">03</span>
          <h3>{{ ui[locale].purposeSentTitle }}</h3>
          <p>{{ ui[locale].purposeSentBody }}</p>
        </article>
      </div>
    </div>
  </section>

  <section v-if="featured.length" class="section">
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
