<template lang="pug">
BasicLayout
  Hero(:img="InfoBanner")

  .py-5(:style="{ maxWidth: '1200px', margin: '0 auto' }")
    Heading.my-5.text-center.text-danger(:title="INFO_PAGE_CONTENT.title")

    MediaCard(
      dir="rtl",
      :image-src="FirstInfoImg",
      background-color="#ffffff",
    )
      .me-3.text-end
        p.font-normal {{ INFO_PAGE_CONTENT.content }}

    //- Row 2: Image left
    .row.mt-5
      .col-md-6
        img.img-fluid.rounded.shadow(
          :src="SecondInfoImg",
          alt="puppet 2",
        )

    //- Row 3: Image right
    .row.mt-5.justify-content-end
      .col-md-6
        img.img-fluid.rounded.shadow(
          :src="ThirdInfoImg",
          alt="puppet 3",
        )
</template>

<script setup lang="ts">
import { INFO_PAGE_CONTENT } from '@/configs';
import {
  Heading,
  Hero,
  BasicLayout,
  MediaCard,
} from '@/components';
import InfoBanner from '@/assets/imgs/info-banner.jpg';
import FirstInfoImg from '@/assets/imgs/info-1.jpg';
import SecondInfoImg from '@/assets/imgs/info-2.jpg';
import ThirdInfoImg from '@/assets/imgs/info-3.jpg';
</script>

<style scoped>
</style>
