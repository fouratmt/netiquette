<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ui } from "../content/catalog";
import { catalogPath, homePath } from "../domain/locale";
import type { Locale } from "../domain/types";
import LanguageSwitcher from "./LanguageSwitcher.vue";

defineProps<{ locale: Locale }>();
</script>

<template>
  <header class="site-header">
    <div class="site-header__inner page-shell">
      <RouterLink class="brand" :to="homePath(locale)" aria-label="Netiquette">
        <span class="brand__mark" aria-hidden="true">N</span>
        <span class="brand__text">
          <strong>Netiquette</strong>
          <small>{{ ui[locale].brandTagline }}</small>
        </span>
      </RouterLink>

      <nav class="main-nav" :aria-label="ui[locale].navBrowse">
        <RouterLink :to="homePath(locale)">{{ ui[locale].navHome }}</RouterLink>
        <RouterLink :to="catalogPath(locale)">{{ ui[locale].navBrowse }}</RouterLink>
      </nav>

      <LanguageSwitcher :locale="locale" />
    </div>
  </header>
</template>
