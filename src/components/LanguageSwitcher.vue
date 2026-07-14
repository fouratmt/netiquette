<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ui } from "../content/catalog";
import { catalogPath, entryPath, homePath } from "../domain/locale";
import { locales, type Locale } from "../domain/types";

const props = defineProps<{ locale: Locale }>();
const route = useRoute();
const router = useRouter();

const labels: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  "ar-TN": "تونسي",
};

function switchLocale(event: Event) {
  const nextLocale = (event.target as HTMLSelectElement).value as Locale;
  if (!locales.includes(nextLocale)) return;

  if (typeof window !== "undefined") {
    window.localStorage.setItem("netiquette.locale", nextLocale);
  }

  const page = route.meta.page;
  const entrySlug = route.meta.entrySlug;
  let path = homePath(nextLocale);

  if (page === "catalog") path = catalogPath(nextLocale);
  if (page === "entry" && typeof entrySlug === "string") {
    path = entryPath(nextLocale, entrySlug);
  }

  void router.push({ path, query: page === "catalog" ? route.query : undefined });
}
</script>

<template>
  <label class="language-switcher">
    <span class="sr-only">{{ ui[locale].languageLabel }}</span>
    <span aria-hidden="true">文</span>
    <select :value="props.locale" @change="switchLocale">
      <option v-for="item in locales" :key="item" :value="item">
        {{ labels[item] }}
      </option>
    </select>
  </label>
</template>
