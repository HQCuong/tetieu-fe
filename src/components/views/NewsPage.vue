<template lang="pug">
BasicLayout
  Hero(:img="NewsPageBanner")

  MediaCard(
    dir="ltr",
    image-src="https://marionetten.at/assets/transforms/imager/images/12050387/GvS-Die-Prinzessin_W1200_H1200_f9d35c2e75cded6d5435415681c0a155.webp",
    background-color="#2b5a6e",
  )
    .text-white
      h1.fw-light.mb-5 HISTOIRE DU SOLDAT
      p.lead Igor Stravinsky
      p to be read, played and danced (2 parts; 1918)
      p Text: Ferdinand Ramuz
      p In the German adaptation by: Hans Reinhart

      .content-section
        p Puppets and décor: Georg Baselitz

      .content-section
        p A co-production with the Salzburg Festival

      .mt-5
        router-link.btn.btn-outline-light.py-2.px-5(to="/news/1")
          span.text-white Read more
</template>

<script setup lang="ts">
import {
  BasicLayout,
  Hero,
  MediaCard,
} from '@/components';
import NewsPageBanner from '@/assets/imgs/news-page-banner.jpg';
</script>
