<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ui } from "../content/catalog";
import { catalogPath } from "../domain/locale";
import type { Locale } from "../domain/types";

const props = defineProps<{ locale: Locale; initialValue?: string }>();
const router = useRouter();
const query = ref(props.initialValue ?? "");

function submit() {
  const value = query.value.trim();
  void router.push({
    path: catalogPath(props.locale),
    query: value ? { q: value } : undefined,
  });
}
</script>

<template>
  <form class="search-form" role="search" @submit.prevent="submit">
    <label for="home-search">{{ ui[locale].searchLabel }}</label>
    <div class="search-form__controls">
      <span class="search-form__icon" aria-hidden="true">⌕</span>
      <input
        id="home-search"
        v-model="query"
        type="search"
        :placeholder="ui[locale].searchPlaceholder"
        autocomplete="off"
      />
      <button class="button button--primary" type="submit">
        {{ ui[locale].searchAction }}
      </button>
    </div>
  </form>
</template>
