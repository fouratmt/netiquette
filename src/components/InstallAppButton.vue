<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { ui } from "../content/catalog";
import type { Locale } from "../domain/types";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

defineProps<{ locale: Locale }>();

const installPrompt = ref<BeforeInstallPromptEvent>();
const installed = ref(false);

function isStandalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    ("standalone" in navigator && navigator.standalone === true)
  );
}

function captureInstallPrompt(event: Event) {
  event.preventDefault();
  installPrompt.value = event as BeforeInstallPromptEvent;
}

function markInstalled() {
  installed.value = true;
  installPrompt.value = undefined;
}

async function install() {
  const prompt = installPrompt.value;
  if (!prompt) return;

  await prompt.prompt();
  const choice = await prompt.userChoice;
  if (choice.outcome === "accepted") markInstalled();
}

onMounted(() => {
  installed.value = isStandalone();
  window.addEventListener("beforeinstallprompt", captureInstallPrompt);
  window.addEventListener("appinstalled", markInstalled);
});

onBeforeUnmount(() => {
  window.removeEventListener("beforeinstallprompt", captureInstallPrompt);
  window.removeEventListener("appinstalled", markInstalled);
});
</script>

<template>
  <button
    v-if="installPrompt && !installed"
    class="button button--install"
    type="button"
    :aria-label="ui[locale].installAppLabel"
    @click="install"
  >
    <span aria-hidden="true">↓</span>
    {{ ui[locale].installApp }}
  </button>
</template>
