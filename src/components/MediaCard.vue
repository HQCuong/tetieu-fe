<template lang="pug">
section.media-card.w-100.py-5(:style="{ backgroundColor }")
  .container
    .row.gx-5
      .col-md-6(:class="{ 'order-md-2': dir === 'rtl' }")
        img.img-fluid.rounded.card-image(
          :src="imageSrc",
          :alt="imageAlt",
        )
      .col-md-6.mt-4.mt-md-0(
        :class="{ 'order-md-1': dir === 'rtl' }"
      )
        slot
</template>

<script setup lang="ts">
interface Props {
  dir?: 'ltr' | 'rtl'
  imageSrc: string
  backgroundColor?: string
  imageAlt?: string
}

withDefaults(defineProps<Props>(), {
  dir: 'ltr',
  backgroundColor: 'transparent',
  imageAlt: 'Card Image',
});
</script>

<style scoped lang="scss">
.card-image {
  display: block;
  width: 100%; // Ensure it takes column width
  height: auto; // Let aspect-ratio determine height based on width
  aspect-ratio: 1 / 1; // Force square aspect ratio directly on the image element
  object-fit: cover; // Crop the image to cover the square area, maintaining aspect ratio
  border-radius: var(--bs-border-radius); // Keep rounded corners
}
</style>
