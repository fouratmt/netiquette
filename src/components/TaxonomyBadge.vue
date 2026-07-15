<script setup lang="ts">
import TaxonomyIcon from "./TaxonomyIcon.vue";

defineProps<{ name: string; label: string; category?: boolean }>();
</script>

<template>
  <span class="badge" :class="{ 'badge--category': category }">
    <TaxonomyIcon :name="name" />
    <span>{{ label }}</span>
  </span>
</template>
