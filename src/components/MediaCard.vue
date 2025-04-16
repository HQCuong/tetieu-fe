<template lang="pug">
section.media-card.w-100.pt-4.pb-5(
  :style="{ backgroundColor }",
)
  .container
    .row
      .col-md-6(:class="{ 'order-md-2': dir === 'rtl' }")
        img.img-fluid.rounded.w-100.card-image(
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
