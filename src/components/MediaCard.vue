<template lang="pug">
section.w-100.pt-3.pb-5(
  :dir="dir",
  :style="{ backgroundColor }",
)
  .container
    .row.align-items-center
      .col-md-6(:class="dir === 'rtl' ? 'ps-md-4' : 'pe-md-4'")
        img.img-fluid.rounded.w-100(
          :src="imageSrc",
          alt="Card Image",
          style="max-height: 600px; object-fit: contain;",
        )
      .col-md-6.mt-4.mt-md-0.text-md-start.text-center
        slot
</template>

<script setup lang="ts">
defineProps<{
  dir?: 'ltr' | 'rtl'
  imageSrc: string
  backgroundColor?: string
}>();
</script>
