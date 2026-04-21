<template lang="pug">
section.media-card.w-100.py-5(:style="{ backgroundColor }")
  .container
    .row.gx-5
      .col-md-6(:class="{ 'order-md-2': dir === 'rtl' }")
        img.img-fluid.rounded.card-image(
          :src="imageSrc",
          :alt="imageAlt",
        )
      .col-md-6.mt-4.mt-md-0(:class="{ 'order-md-1': dir === 'rtl' }")
        slot
</template>

<script setup lang="ts">
interface Props {
  imageSrc: string;
  dir?: 'ltr' | 'rtl';
  backgroundColor?: string;
  imageAlt?: string;
}

withDefaults(defineProps<Props>(), {
  dir: 'ltr',
  backgroundColor: 'transparent',
  imageAlt: 'Card image',
});
</script>

<style scoped lang="scss">
.media-card {
  overflow: hidden;
}

.card-image {
  display: block;
  width: 100%;
  height: auto;
  // Force square aspect ratio on the image itself so layout doesn't shift.
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: var(--bs-border-radius);
  transition: transform 0.6s ease;

  &:hover { transform: scale(1.02); }
}
</style>
