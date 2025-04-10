<template lang="pug">
BasicLayout
  Hero(:img="HERO_BG_IMAGE")
  .mt-4
    MediaCard(
      dir="ltr",
      image-src="https://marionetten.at/assets/images/Haende1_2022-08-02-091704_lqec.JPG",
      background-color="#ffffff",
    )

  .mt-4
    MediaCard(
      dir="rtl",
      image-src="https://marionetten.at/assets/transforms/imager/images/12050387/GvS-Die-Prinzessin_W1600_H1600_f4f1a05c9611d579a52ea0262873fff8.webp",
      background-color="#2b5a6e",
    )
</template>

<script setup lang="ts">
import { HERO_BG_IMAGE } from '@/configs';
import {
  BasicLayout,
  Hero,
  MediaCard,
} from '@/components';
</script>
