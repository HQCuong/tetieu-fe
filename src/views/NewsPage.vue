<template lang="pug">
LoadingOverlay(v-if="isLoading")
BasicLayout(v-else)
  .pb-5
    Hero(:img="newsBanner")

    MediaCard(
      v-if="latest",
      dir="ltr",
      :image-src="latest.Thumbnail",
      background-color="#ffffff",
    )
      h4.mb-4
        router-link.text-dark.text-decoration-none(
          :to="{ name: 'news-detail', params: { id: latest.Id } }",
        ) {{ latest.Title }}
      p.fw-lighter(v-html="latest.Description")

      router-link.btn.btn-outline-dark.mt-4(
        :to="{ name: 'news-detail', params: { id: latest.Id } }",
      ) Read more

    MediaCard(
      v-if="secondLatest",
      dir="rtl",
      :image-src="secondLatest.Thumbnail",
      background-color="#2b5a6e",
    )
      .text-white.text-end
        h4.mb-4
          router-link.text-white.text-decoration-none(
            :to="{ name: 'news-detail', params: { id: secondLatest.Id } }",
          ) {{ secondLatest.Title }}
        p.fw-lighter(v-html="secondLatest.Description")

      .d-flex.justify-content-end
        router-link.btn.btn-outline-light.mt-4(
          :to="{ name: 'news-detail', params: { id: secondLatest.Id } }",
        ) Read more

    .mt-4
      NewsTable(
        v-if="newsList.length",
        :news-items="newsList",
      )

      Pagination(
        v-if="showPagination",
        :is-first-page="isFirstPage",
        :is-last-page="isLastPage",
        @next="onNext",
        @prev="onPrev",
      )
</template>

<script setup lang="ts">
import {
  computed,
  onMounted,
} from 'vue';
import { BasicLayout } from '@/layouts';
import {
  Hero,
  LoadingOverlay,
  MediaCard,
  NewsTable,
  Pagination,
} from '@/components';
import { useNewsHighlights } from '@/composables';
import newsBanner from '@/assets/images/news-banner.jpg';

const {
  isLoading,
  newsList,
  latest,
  secondLatest,
  pageInfo,
  fetchPage,
} = useNewsHighlights();

const isFirstPage = computed(() => pageInfo.value?.isFirstPage ?? true);
const isLastPage = computed(() => pageInfo.value?.isLastPage ?? true);
const currentPage = computed(() => pageInfo.value?.page ?? 1);
// Hide the pagination UI when all results fit on one page.
const showPagination = computed(() => !(isFirstPage.value && isLastPage.value));

const onNext = () => fetchPage(currentPage.value + 1);
const onPrev = () => fetchPage(currentPage.value - 1);

onMounted(() => fetchPage(1));
</script>
