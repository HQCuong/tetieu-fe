<template lang="pug">
FullPageLoading(v-if="isLoading")
BasicLayout(v-else)
  .pb-5
    Hero(:img="ShowsBanner")

    section.section-py.bg-light-subtle
      .container
        Heading.text-center.text-danger(:title="SHOW_PAGE_TITLE_SECTION.title")
        MediaCard(
          dir="rtl",
          :image-src="ShowsIntroImg",
          background-color="#ffffff",
        )
          .me-3.text-end
            p.font-normal(v-html="SHOW_PAGE_TITLE_SECTION.content")

        // Loop through grouped shows
        template(
          v-for="group in groupedShows",
          :key="group.typeKey",
        )
          // Only render group if it has shows
          div(v-if="group.shows.length > 0")
            // Heading for the show type
            Heading.mt-5.text-center.text-danger(:title="group.typeName")

            // Table for shows of this type
            ShowTable(:show-items="group.shows")

        // Empty State (if no shows at all after loading)
        .text-center(v-if="!isLoading && groupedShows.every(g => g.shows.length === 0)")
          p Không có chương trình nào để hiển thị.

</template>

<script setup lang="ts">
import {
  ref,
  onMounted,
  computed,
} from 'vue';
import { showService } from '@/services';
import {
  SHOW_TYPES,
  SHOW_PAGE_TITLE_SECTION,
} from '@/configs';
import {
  BasicLayout,
  Hero,
  ShowTable,
  FullPageLoading,
  Heading,
  MediaCard,
} from '@/components';
import ShowsBanner from '@/assets/imgs/shows-banner.jpg';
import ShowsIntroImg from '@/assets/imgs/shows-intro-img.jpeg';

// Define Show interface including Type
interface Show {
  Id: string | number;
  Title: string;
  Thumbnail: string;
  Author: string;
  Type: keyof typeof SHOW_TYPES;
  // Add other fields as needed
}

// Define structure for grouped shows
interface ShowGroup {
  typeKey: keyof typeof SHOW_TYPES;
  typeName: string;
  shows: Show[];
}

const isLoading = ref(true);
// Ref to store the raw list from API
const allShows = ref<Show[]>([]);

// Computed property to group shows by type in the desired order
const groupedShows = computed((): ShowGroup[] => {
  const groups: ShowGroup[] = [];

  // Iterate through SHOW_TYPES to maintain order
  for (const key in SHOW_TYPES) {
    const typeKey = key as keyof typeof SHOW_TYPES;

    groups.push({
      typeKey: typeKey,
      typeName: SHOW_TYPES[typeKey],
      shows: allShows.value.filter(show => show.Type === typeKey),
    });
  }

  return groups;
});

const getShows = async () => {
  isLoading.value = true;
  try {
    // Fetch all shows (assuming service fetches all without pagination)
    const res = await showService.getShows() as null | { list: Show[] };

    allShows.value = res?.list || [];
  } catch (error) {
    console.error('Error fetching shows:', error);
    allShows.value = [];
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  getShows();
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
