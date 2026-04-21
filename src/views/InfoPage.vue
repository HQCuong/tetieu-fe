<template lang="pug">
BasicLayout
  Hero(:img="infoBanner")

  .info-page.py-5
    Heading.my-5.text-center.text-danger(:title="INFO_PAGE_CONTENT.title")

    MediaCard(
      dir="rtl",
      :image-src="info1",
      background-color="#ffffff",
    )
      .me-3.text-end
        p.font-normal {{ INFO_PAGE_CONTENT.content }}

    .row.mt-5
      .col-md-6
        img.img-fluid.rounded.shadow(
          :src="info2",
          alt="Puppet 2",
        )

    .row.mt-5.justify-content-end
      .col-md-6
        img.img-fluid.rounded.shadow(
          :src="info3",
          alt="Puppet 3",
        )
</template>

<script setup lang="ts">
import { BasicLayout } from '@/layouts';
import {
  Heading,
  Hero,
  MediaCard,
} from '@/components';
import { INFO_PAGE_CONTENT } from '@/content';
import infoBanner from '@/assets/images/info-banner.jpg';
import info1 from '@/assets/images/info-1.jpg';
import info2 from '@/assets/images/info-2.jpg';
import info3 from '@/assets/images/info-3.jpg';
</script>

<style scoped>
.info-page { max-width: 1200px; margin: 0 auto; }
</style>
