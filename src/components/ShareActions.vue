<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ui } from "../content/catalog";
import type { Locale } from "../domain/types";

const props = defineProps<{ locale: Locale; title: string }>();
const canShare = ref(false);
const status = ref("");

onMounted(() => {
  canShare.value = typeof navigator.share === "function";
});

async function copyLink() {
  const url = window.location.href;

  try {
    await navigator.clipboard.writeText(url);
  } catch {
    const input = document.createElement("textarea");
    input.value = url;
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  }

  status.value = ui[props.locale].copied;
  window.setTimeout(() => {
    status.value = "";
  }, 2500);
}

async function share() {
  try {
    await navigator.share({
      title: props.title,
      text: ui[props.locale].shareIntro,
      url: window.location.href,
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") return;
  }
}
</script>

<template>
  <div class="share-actions">
    <button class="button button--primary" type="button" @click="copyLink">
      <span aria-hidden="true">↗</span>
      {{ ui[locale].copyLink }}
    </button>
    <button
      v-if="canShare"
      class="button button--secondary"
      type="button"
      @click="share"
    >
      {{ ui[locale].share }}
    </button>
    <span class="share-actions__status" role="status" aria-live="polite">
      {{ status }}
    </span>
  </div>
</template>
