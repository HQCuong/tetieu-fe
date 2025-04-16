<template lang="pug">
BasicLayout
  Hero(:img="HomePageBanner")
  PerformanceTable(:performances="PERFORMANCES")

  Heading(
    title="The Salzburg Marionette Theatre",
    :style="{ marginTop: '6rem', marginBottom: '3rem' }",
  )
  MediaCard(
    dir="ltr",
    image-src="https://marionetten.at/assets/images/Haende1_2022-08-02-091704_lqec.JPG",
    background-color="#ffffff",
  )
    .ps-3
      h4 The high art of puppetry
      p.normal-font.fw-bold What makes the Salzburg Marionette Theatre different from other theatres?
      p.normal-font
        | This special performance technique,
        | has been declared a cultural asset worthy of preservation,
        | as the "most highly developed form of puppet and figure theatre",
        | earning the Salzburg Marionette Theatre a place in the UNESCO List of Intangible Cultural Heritage.

      button.btn.btn-outline-dark Unesco Intangible Cultural Heritage

  Heading(
    title="News",
    :style="{ marginTop: '6rem', marginBottom: '3rem' }",
  )
  .mt-5
    MediaCard(
      dir="rtl",
      image-src="https://marionetten.at/assets/transforms/imager/images/12050387/GvS-Die-Prinzessin_W1200_H1200_f9d35c2e75cded6d5435415681c0a155.webp",
      background-color="#2b5a6e",
    )
      .text-white.text-end
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

  .mt-5
    Hero(:img="FooterImg")
</template>

<script setup lang="ts">
import {
  BasicLayout,
  Hero,
  MediaCard,
  PerformanceTable,
  Heading,
} from '@/components';
import { PERFORMANCES } from '@/configs';
import HomePageBanner from '@/assets/imgs/home-page-banner.jpg';
import FooterImg from '@/assets/imgs/footer.jpg';
</script>
