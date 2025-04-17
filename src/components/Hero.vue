<template lang="pug">
// Remove style binding
section.hero
  // Link wrapper
  component(
    :is="link ? 'a' : 'div'",
    :href="link ? link : undefined",
    :aria-label="link ? 'Xem thêm' : undefined",
  )
    // Re-add img tag inside the component wrapper
    img.hero-bg(
      v-if="img",
      :src="img",
      alt="Hero background",
    )
    // slot // Keep slot if you intend to add content over the image
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
