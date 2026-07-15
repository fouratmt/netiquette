<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useHead } from "@unhead/vue";
import EntryCard from "../components/EntryCard.vue";
import QrShare from "../components/QrShare.vue";
import SeverityIndicator from "../components/SeverityIndicator.vue";
import ShareActions from "../components/ShareActions.vue";
import {
  getCategory,
  getEntryById,
  getEntryBySlug,
  getPlatform,
  ui,
} from "../content/catalog";
import { catalogPath } from "../domain/locale";
import type { Locale } from "../domain/types";

const props = defineProps<{ locale: Locale; slug: string }>();
const entry = computed(() => getEntryBySlug(props.slug));
const translation = computed(() => entry.value?.translations[props.locale]);
const related = computed(() =>
  (entry.value?.related ?? [])
    .map((id) => getEntryById(id))
    .filter((item) => item !== undefined),
);

useHead(() => ({
  title: translation.value
    ? `${translation.value.title} — Netiquette`
    : `Netiquette`,
  meta: translation.value
    ? [
        { name: "description", content: translation.value.takeaway },
        { property: "og:title", content: translation.value.title },
        { property: "og:description", content: translation.value.takeaway },
        { property: "og:type", content: "article" },
      ]
    : [],
}));
</script>

<template>
  <template v-if="entry && translation">
    <article class="entry-page">
      <header class="entry-hero">
        <div class="page-shell entry-hero__inner">
          <RouterLink class="back-link" :to="catalogPath(locale)">
            <span aria-hidden="true">←</span> {{ ui[locale].backToCatalog }}
          </RouterLink>

          <div class="entry-hero__meta">
            <span class="badge badge--category">
              {{ getCategory(entry.category)?.label[locale] }}
            </span>
            <span v-for="platformId in entry.platforms" :key="platformId" class="badge">
              {{ getPlatform(platformId)?.label[locale] }}
            </span>
          </div>

          <h1>{{ translation.title }}</h1>
          <p class="entry-hero__takeaway">{{ translation.takeaway }}</p>
          <SeverityIndicator :locale="locale" :severity="entry.severity" />
          <div class="entry-hero__sharing">
            <ShareActions :locale="locale" :title="translation.title" />
            <QrShare :locale="locale" />
          </div>
        </div>
      </header>

      <div class="page-shell entry-content">
        <section class="entry-section">
          <span class="entry-section__number">01</span>
          <div>
            <h2>{{ ui[locale].situationTitle }}</h2>
            <p>{{ translation.situation }}</p>
          </div>
        </section>

        <section class="entry-section entry-section--accent">
          <span class="entry-section__number">02</span>
          <div>
            <h2>{{ ui[locale].whyTitle }}</h2>
            <p>{{ translation.whyItMatters }}</p>
          </div>
        </section>

        <section class="entry-section">
          <span class="entry-section__number">03</span>
          <div>
            <h2>{{ ui[locale].insteadTitle }}</h2>
            <p>{{ translation.whatToDo }}</p>
          </div>
        </section>

        <aside v-if="translation.nuance" class="nuance-card">
          <span aria-hidden="true">i</span>
          <div>
            <h2>{{ ui[locale].nuanceTitle }}</h2>
            <p>{{ translation.nuance }}</p>
          </div>
        </aside>
      </div>

      <section class="shared-context">
        <div class="page-shell shared-context__card">
          <span class="shared-context__icon" aria-hidden="true">?</span>
          <div>
            <h2>{{ ui[locale].receivedTitle }}</h2>
            <p>{{ ui[locale].receivedBody }}</p>
            <p class="shared-context__note">{{ ui[locale].receivedNote }}</p>
          </div>
        </div>
      </section>
    </article>

    <section v-if="related.length" class="section related-section">
      <div class="page-shell">
        <div class="section-heading section-heading--inline">
          <h2>{{ ui[locale].relatedTitle }}</h2>
          <RouterLink class="text-link" :to="catalogPath(locale)">
            {{ ui[locale].browseAll }} <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
        <div class="entry-grid entry-grid--related">
          <EntryCard
            v-for="item in related"
            :key="item.id"
            :entry="item"
            :locale="locale"
          />
        </div>
      </div>
    </section>
  </template>
</template>
