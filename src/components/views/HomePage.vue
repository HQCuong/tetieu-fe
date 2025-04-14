<template lang="pug">
BasicLayout
  Hero(:img="HeroImg")
  .mt-4
    MediaCard(
      dir="ltr",
      image-src="https://marionetten.at/assets/images/Haende1_2022-08-02-091704_lqec.JPG",
      background-color="#ffffff",
    )

  .mt-4
    MediaCard(
      dir="rtl",
      image-src="@/assets/images/home-page-banner.jpg",
      background-color="#2b5a6e",
    )
</template>

<script setup lang="ts">
import {
  BasicLayout,
  Hero,
  MediaCard,
} from '@/components';
import HeroImg from '@/assets/imgs/home-page-banner.jpg';
</script>
