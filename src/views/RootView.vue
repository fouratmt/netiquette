<script setup lang="ts">
import { onMounted } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useHead } from "@unhead/vue";
import { detectPreferredLocale, homePath, isLocale } from "../domain/locale";
import type { Locale } from "../domain/types";

const router = useRouter();

const languageOptions: Array<{
  locale: Locale;
  label: string;
  description: string;
}> = [
  { locale: "en", label: "English", description: "Continue in English" },
  { locale: "fr", label: "Français", description: "Continuer en français" },
  { locale: "ar-TN", label: "تونسي", description: "كمّل بالتونسي" },
];

useHead({
  title: "Netiquette — Choose your language",
  meta: [
    {
      name: "description",
      content: "Choose a language for practical guidance on digital courtesy.",
    },
  ],
});

onMounted(() => {
  const saved = window.localStorage.getItem("netiquette.locale");
  const locale = isLocale(saved)
    ? saved
    : detectPreferredLocale(navigator.languages);
  void router.replace(homePath(locale));
});

function remember(locale: Locale) {
  window.localStorage.setItem("netiquette.locale", locale);
}
</script>

<template>
  <section class="root-page">
    <div class="root-page__card">
      <div class="brand brand--root">
        <span class="brand__mark" aria-hidden="true">N</span>
        <span class="brand__text">
          <strong>Netiquette</strong>
          <small>A practical guide to digital courtesy</small>
        </span>
      </div>

      <div class="root-page__intro">
        <p class="eyebrow">Welcome · Bienvenue · مرحبا</p>
        <h1>Choose your language</h1>
        <p>
          We normally use your browser preference. You can change language at
          any time.
        </p>
      </div>

      <div class="language-cards">
        <RouterLink
          v-for="option in languageOptions"
          :key="option.locale"
          class="language-card"
          :lang="option.locale"
          :dir="option.locale === 'ar-TN' ? 'rtl' : 'ltr'"
          :to="homePath(option.locale)"
          @click="remember(option.locale)"
        >
          <strong>{{ option.label }}</strong>
          <span>{{ option.description }}</span>
          <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
