<script setup lang="ts">
defineProps<{ name: string }>();
</script>

<template>
  <svg
    class="taxonomy-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.9"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <template v-if="name === 'calls-voice'">
      <path d="M7.2 3.8 4.7 5.3c-.8.5-.9 1.7-.4 2.7 2.6 5.3 6.4 9.1 11.7 11.7 1 .5 2.2.4 2.7-.4l1.5-2.5-4.6-2.2-1.4 1.8c-2.9-1.5-5.1-3.7-6.6-6.6l1.8-1.4-2.2-4.6Z" />
    </template>
    <template v-else-if="name === 'social-media'">
      <circle cx="6" cy="12" r="2.2" />
      <circle cx="17.5" cy="6" r="2.2" />
      <circle cx="17.5" cy="18" r="2.2" />
      <path d="m8 11 7.5-4M8 13l7.5 4" />
    </template>
    <template v-else-if="name === 'privacy-audience'">
      <path d="M12 3.5 19 6v5.2c0 4.2-2.7 7.6-7 9.3-4.3-1.7-7-5.1-7-9.3V6l7-2.5Z" />
      <path d="M9.2 11.5 11 13.3l3.8-4" />
    </template>
    <template v-else-if="name === 'messaging-groups'">
      <path d="M4 5.5h12v8H9l-4 3v-3H4v-8Z" />
      <path d="M9 16h6l4 3v-9h-1" />
    </template>
    <template v-else-if="name === 'instagram'">
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.3" cy="6.8" r=".7" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="name === 'facebook'">
      <path d="M14.2 20v-7h2.5l.4-3h-2.9V8.1c0-.9.3-1.6 1.7-1.6h1.5V3.8c-.5-.1-1.4-.2-2.4-.2-2.5 0-4.2 1.5-4.2 4.3V10H8v3h2.8v7" />
    </template>
    <template v-else-if="name === 'messenger'">
      <path d="M20 11.5c0 4.4-3.6 7.5-8 7.5-1 0-2-.2-2.9-.5L5 20l1.1-3.3A7 7 0 0 1 4 11.5C4 7.1 7.6 4 12 4s8 3.1 8 7.5Z" />
      <path d="m8 13 3-3 2.2 2 3-3" />
    </template>
    <template v-else-if="name === 'whatsapp'">
      <path d="M19.5 11.7a7.5 7.5 0 0 1-11.1 6.6L4 19.5l1.2-4.2a7.5 7.5 0 1 1 14.3-3.6Z" />
      <path d="M9.2 7.8c.4 3.3 2 5 5.3 5.8l1.1-1.2" />
    </template>
    <template v-else>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.8 12h16.4M12 3.5c2.2 2.3 3.2 5.1 3.2 8.5s-1 6.2-3.2 8.5C9.8 18.2 8.8 15.4 8.8 12s1-6.2 3.2-8.5Z" />
    </template>
  </svg>
</template>
