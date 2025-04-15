<template lang="pug">
section.hero
  component(
    :is="link ? 'a' : 'div'",
    :href="link ? link : undefined",
    :aria-label="link ? 'Xem thêm' : undefined",
  )
    img.hero-bg(
      :src="img",
      alt="hero background",
    )
</template>

<script setup lang="ts">
interface Props {
  // Background img
  img?: string;
  // Optional link
  link?: string;
}

defineProps<Props>();
</script>
