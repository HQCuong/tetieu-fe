<template lang="pug">
section.hero
  // Render img tag directly
  img.hero-bg(
    v-if="img",
    :src="img",
    alt="Hero background",
  )
</template>

<script setup lang="ts">
interface Props {
  // Background img
  img?: string;
}

defineProps<Props>();
</script>
