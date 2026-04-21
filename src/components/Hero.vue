<template lang="pug">
section.hero
  img.hero-bg(
    v-if="img",
    :src="img",
    :alt="alt",
  )
</template>

<script setup lang="ts">
interface Props {
  img?: string;
  alt?: string;
}

withDefaults(defineProps<Props>(), {
  img: '',
  alt: 'Hero background',
});
</script>
