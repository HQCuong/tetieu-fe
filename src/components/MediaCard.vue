<template lang="pug">
section.media-card.w-100.pt-3.pb-5(
  :dir="dir",
  :style="{ backgroundColor }",
)
  .container
    .row.align-items-center
      .col-md-6(:class="imageColClass")
        img.img-fluid.rounded.w-100.card-image(
          :src="imageSrc",
          :alt="imageAlt || 'Card Image'",
        )
      .col-md-6.mt-4.mt-md-0.text-md-start.text-center
        slot
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  dir?: 'ltr' | 'rtl'
  imageSrc: string
  backgroundColor?: string
  imageAlt?: string
}

const props = withDefaults(defineProps<Props>(), {
  dir: 'ltr',
  backgroundColor: 'transparent',
  imageAlt: 'Card Image',
});

// Computed property để xác định class cho cột chứa ảnh
const imageColClass = computed(() => (props.dir === 'rtl' ? 'ps-md-4' : 'pe-md-4'));
</script>

<style scoped>
.card-image {
  max-height: 600px;
  object-fit: contain;
}
</style>
