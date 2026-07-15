<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ui } from "../content/catalog";
import { catalogPath, homePath } from "../domain/locale";
import type { Locale } from "../domain/types";

defineProps<{ locale: Locale }>();

const languageLinks: { locale: Locale; label: string }[] = [
  { locale: "en", label: "English" },
  { locale: "fr", label: "Français" },
  { locale: "ar-TN", label: "تونسي" },
];
const year = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="page-shell site-footer__inner">
      <div class="site-footer__about">
        <RouterLink class="brand brand--footer" :to="homePath(locale)">
          <span class="brand__mark" aria-hidden="true">N</span>
          <span class="brand__text">
            <strong>Netiquette</strong>
            <small>{{ ui[locale].brandTagline }}</small>
          </span>
        </RouterLink>
        <p>{{ ui[locale].footerContext }}</p>
      </div>

      <nav class="site-footer__nav" :aria-label="ui[locale].footerExploreTitle">
        <strong>{{ ui[locale].footerExploreTitle }}</strong>
        <RouterLink :to="homePath(locale)">{{ ui[locale].navHome }}</RouterLink>
        <RouterLink :to="catalogPath(locale)">{{ ui[locale].navBrowse }}</RouterLink>
      </nav>

      <nav class="site-footer__nav" :aria-label="ui[locale].footerLanguagesTitle">
        <strong>{{ ui[locale].footerLanguagesTitle }}</strong>
        <RouterLink
          v-for="option in languageLinks"
          :key="option.locale"
          :to="homePath(option.locale)"
          :lang="option.locale"
          :dir="option.locale === 'ar-TN' ? 'rtl' : 'ltr'"
        >
          {{ option.label }}
        </RouterLink>
      </nav>

      <div class="site-footer__bottom">
        <span>© {{ year }} Netiquette</span>
        <span>{{ ui[locale].footerNote }}</span>
      </div>
    </div>
  </footer>
</template>
