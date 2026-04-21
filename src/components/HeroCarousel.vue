<template lang="pug">
section.hero-carousel-section
  .hero-carousel-skeleton(v-if="isLoading")

  Carousel(
    v-else-if="banners.length > 0",
    :autoplay="AUTOPLAY_MS",
    :wrap-around="true",
    :items-to-show="1",
    :transition="TRANSITION_MS",
  )
    Slide(
      v-for="banner in banners",
      :key="banner.Id",
    )
      img.hero-bg.d-block.w-100(
        :src="banner.Url",
        :alt="`Hero banner ${banner.Id}`",
      )

    template(#addons)
      Navigation

  .d-flex.justify-content-center.align-items-center(
    v-else,
    style="min-height: 300px;",
  )
    p Không có banner nào để hiển thị.
</template>

<script setup lang="ts">
import {
  ref,
  onMounted,
} from 'vue';
import 'vue3-carousel/dist/carousel.css';
import {
  Carousel,
  Navigation,
  Slide,
} from 'vue3-carousel';
import { contentService } from '@/api/services';
import { logger } from '@/utils/logger';
import type { BannerImage } from '@/types';

const AUTOPLAY_MS = 3000;
const TRANSITION_MS = 300;

const isLoading = ref(true);
const banners = ref<BannerImage[]>([]);

// Fisher-Yates shuffle without mutating the input array — keeps the function
// pure so it is safe to call repeatedly or in tests.
const shuffle = <T>(input: T[]): T[] => {
  const arr = [...input];

  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};

onMounted(async () => {
  try {
    const res = await contentService.getHomeBanners();

    banners.value = shuffle(res?.list ?? []);
  } catch (error) {
    logger.error('Failed to load carousel banners', error);
    banners.value = [];
  } finally {
    isLoading.value = false;
  }
});
</script>
