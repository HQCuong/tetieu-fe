<template lang="pug">
section.hero
  template(v-if="link")
    a(:href="link")
      img.hero-bg(
        :src="img",
        alt="hero background",
        :title="link ? 'Click để xem thêm' : ''"
      )
  template(v-else)
    img.hero-bg(
      :src="img",
      alt="hero background"
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
