<script setup lang="ts">
import { ui } from "../content/catalog";
import type { Locale } from "../domain/types";

defineProps<{ locale: Locale }>();
</script>

<template>
  <footer class="site-footer">
    <div class="page-shell site-footer__inner">
      <div class="brand brand--footer">
        <span class="brand__mark" aria-hidden="true">N</span>
        <strong>Netiquette</strong>
      </div>
      <p>{{ ui[locale].footerContext }}</p>
    </div>
  </footer>
</template>
