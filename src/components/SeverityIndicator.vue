<script setup lang="ts">
import { computed } from "vue";
import { severityContent, ui } from "../content/catalog";
import type { Locale, SeverityLevel } from "../domain/types";

const props = defineProps<{ locale: Locale; severity: SeverityLevel }>();
const content = computed(() => severityContent[props.locale][props.severity]);
const accessibleLabel = computed(
  () =>
    `${ui[props.locale].severityTitle}: ${content.value.label}, ${props.severity}/4`,
);
</script>

<template>
  <section
    class="severity-indicator"
    :class="`severity-indicator--${severity}`"
    :aria-label="accessibleLabel"
  >
    <div class="severity-indicator__heading">
      <span>{{ ui[locale].severityTitle }}</span>
      <strong>{{ severity }}/4 · {{ content.label }}</strong>
    </div>
    <div
      class="severity-indicator__scale"
      role="img"
      :aria-label="accessibleLabel"
    >
      <span
        v-for="level in 4"
        :key="level"
        :class="{ 'is-active': level <= severity }"
        aria-hidden="true"
      />
    </div>
    <p>{{ content.description }}</p>
  </section>
</template>
