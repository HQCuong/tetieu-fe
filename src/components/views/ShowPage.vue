<template lang="pug">
FullPageLoading(v-if="isLoading")
BasicLayout(v-else)
  .pb-5
    Hero(:img="ShowsBanner")

    section.section-py.bg-light-subtle
      .container
        Heading.text-center.text-danger(title="Các vở diễn")

        ShowTable(
          v-if="shows && shows.list && shows.list.length > 0",
          :show-items="shows.list",
        )

        .text-center(v-else)
          p Không có chương trình nào để hiển thị.

        Pagination(
          v-if="pageInfo && !(isFirstPage && isLastPage)",
          :is-first-page="isFirstPage",
          :is-last-page="isLastPage",
          @next="handleNext",
          @prev="handlePrev",
        )
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
} from 'vue';
import { showService } from '@/services';
import {
  BasicLayout,
  Hero,
  ShowTable,
  FullPageLoading,
  Pagination,
  Heading,
} from '@/components';
import ShowsBanner from '@/assets/imgs/shows-banner.jpg';

const isLoading = ref(true);
const shows = ref<null | Record<string, any>>(null);
const latestShow = ref<null | Record<string, any>>(null);
const pageInfo = ref<null | Record<string, any>>(null);

const isFirstPage = computed(() => pageInfo.value?.isFirstPage ?? true);
const isLastPage = computed(() => pageInfo.value?.isLastPage ?? true);
const currentPage = computed(() => pageInfo.value?.page ?? 1);

const handleNext = () => {
  if (!isLastPage.value) {
    getShows(currentPage.value + 1);
  }
};

const handlePrev = () => {
  if (!isFirstPage.value) {
    getShows(currentPage.value - 1);
  }
};

const getShows = async (page: number) => {
  const res = await showService.getShows({ page }) as null | Record<string, any>;

  pageInfo.value = res?.pageInfo;

  if (res && res.list && res.list.length) {
    shows.value = res;

    if (latestShow.value) {
      return;
    }

    latestShow.value = res.list[res.list.length - 2] || null;
  }

  isLoading.value = false;
};

onMounted(() => {
  getShows(1);
});
</script>

<style lang="scss" scoped>
.bg-light-subtle {
  background-color: #f8f9fa;
}
.section-py {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
</style>
