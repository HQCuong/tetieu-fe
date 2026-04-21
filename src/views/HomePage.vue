<template lang="pug">
BasicLayout
  HeroCarousel

  .mt-5
    PerformanceTable(show-recent)

  .text-center
    router-link.btn.btn-outline-dark.mt-3(:to="{ name: 'performances' }") Xem tất cả lịch diễn

  Heading.text-center.home-section-heading(title="RỐI TẾ TIÊU")
  MediaCard(
    dir="rtl",
    :image-src="INTRO_IMAGE",
    background-color="#ffffff",
  )
    .me-3.text-end
      h4 {{ HOME_PAGE_TITLE_SECTION.title }}
      p.font-normal {{ HOME_PAGE_TITLE_SECTION.subTitle }}
      p.font-normal {{ HOME_PAGE_TITLE_SECTION.content }}
      button.btn.btn-outline-dark.mt-3 {{ HOME_PAGE_TITLE_SECTION.buttonText }}

  Heading.text-center.home-section-heading(title="TIN TỨC")

  .mt-5
    MediaCard(
      v-if="latest",
      dir="ltr",
      :image-src="latest.Thumbnail",
      :background-color="NEWS_BG",
    )
      .text-white
        h4.mb-4
          router-link.text-white.text-decoration-none(
            :to="{ name: 'news-detail', params: { id: latest.Id } }",
          ) {{ latest.Title }}
        p.fw-lighter(v-html="latest.Description")

      router-link.btn.btn-outline-light.mt-3(
        :to="{ name: 'news-detail', params: { id: latest.Id } }",
      ) Read more

    MediaCard(
      v-if="secondLatest",
      dir="rtl",
      :image-src="secondLatest.Thumbnail",
      :background-color="NEWS_BG",
    )
      .text-white.text-end
        h4.mb-4
          router-link.text-white.text-decoration-none(
            :to="{ name: 'news-detail', params: { id: secondLatest.Id } }",
          ) {{ secondLatest.Title }}
        p.fw-lighter(v-html="secondLatest.Description")

      .d-flex.justify-content-end.mt-3
        router-link.btn.btn-outline-light(
          :to="{ name: 'news-detail', params: { id: secondLatest.Id } }",
        ) Read more
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { BasicLayout } from '@/layouts';
import {
  Heading,
  HeroCarousel,
  MediaCard,
  PerformanceTable,
} from '@/components';
import { HOME_PAGE_TITLE_SECTION } from '@/content';
import { useNewsHighlights } from '@/composables';

// External intro photo — kept as a constant so it can be swapped without
// touching the template.
const INTRO_IMAGE = 'https://marionetten.at/assets/images/Haende1_2022-08-02-091704_lqec.JPG';

// Muted plum — softer and more editorial than the previous teal.
const NEWS_BG = '#7a5c73';

const {
  latest,
  secondLatest,
  fetchPage,
} = useNewsHighlights();

onMounted(() => fetchPage(1));
</script>

<style scoped>
.home-section-heading {
  margin-top: 6rem;
  margin-bottom: 3rem;
}
</style>
