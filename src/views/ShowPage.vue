<template lang="pug">
LoadingOverlay(v-if="isLoading")
BasicLayout(v-else)
  .pb-5
    Hero(:img="showsBanner")

    section.shows-section.bg-light-subtle
      .container
        Heading.text-center.text-danger(:title="SHOW_PAGE_TITLE_SECTION.title")
        MediaCard(
          dir="rtl",
          :image-src="showsIntro",
          background-color="#ffffff",
        )
          .me-3.text-end
            p.font-normal(v-html="SHOW_PAGE_TITLE_SECTION.content")

        template(
          v-for="group in groupedShows",
          :key="group.typeKey",
        )
          div(v-if="group.shows.length > 0")
            Heading.mt-5.text-center.text-danger(:title="group.typeName")
            ShowTable(:show-items="group.shows")

        .text-center(v-if="!hasAnyShow")
          p Không có chương trình nào để hiển thị.
</template>

<script setup lang="ts">
import {
  computed,
  onMounted,
  ref,
} from 'vue';
import { BasicLayout } from '@/layouts';
import {
  Heading,
  Hero,
  LoadingOverlay,
  MediaCard,
  ShowTable,
} from '@/components';
import { showsService } from '@/api/services';
import {
  SHOW_PAGE_TITLE_SECTION,
  SHOW_TYPES,
} from '@/content';
import type { ShowItem } from '@/types';
import showsBanner from '@/assets/images/shows-banner.jpg';
import showsIntro from '@/assets/images/shows-intro.jpg';

interface ShowGroup {
  typeKey: keyof typeof SHOW_TYPES;
  typeName: string;
  shows: ShowItem[];
}

const isLoading = ref(true);
const allShows = ref<ShowItem[]>([]);

// Group shows by type while preserving the order defined in SHOW_TYPES so the
// sections on the page always appear in a predictable sequence.
const groupedShows = computed<ShowGroup[]>(() =>
  (Object.keys(SHOW_TYPES) as Array<keyof typeof SHOW_TYPES>).map(typeKey => ({
    typeKey,
    typeName: SHOW_TYPES[typeKey],
    shows: allShows.value.filter(show => show.Type === typeKey),
  })),
);

const hasAnyShow = computed(() => groupedShows.value.some(group => group.shows.length > 0));

onMounted(async () => {
  isLoading.value = true;
  const res = await showsService.getShows();

  allShows.value = res?.list ?? [];
  isLoading.value = false;
});
</script>

<style scoped lang="scss">
@import '@/scss/common/variables';

.shows-section {
  background-color: $color-bg-subtle;
  padding: 4rem 0;
}
</style>
