<script setup lang="ts">
import { onMounted, ref } from "vue";
import QrcodeVue from "qrcode.vue";
import { ui } from "../content/catalog";
import type { Locale } from "../domain/types";

defineProps<{ locale: Locale }>();

const url = ref("");

onMounted(() => {
  const currentUrl = new URL(window.location.href);
  currentUrl.hash = "";
  url.value = currentUrl.toString();
});
</script>

<template>
  <aside class="qr-share">
    <div class="qr-share__copy">
      <strong>{{ ui[locale].qrTitle }}</strong>
      <span>{{ ui[locale].qrBody }}</span>
    </div>
    <div class="qr-share__code" aria-hidden="true">
      <QrcodeVue
        v-if="url"
        :value="url"
        :size="104"
        level="M"
        render-as="svg"
        foreground="#18352f"
        background="#fffdf9"
      />
      <span v-else class="qr-share__placeholder" />
    </div>
  </aside>
</template>
