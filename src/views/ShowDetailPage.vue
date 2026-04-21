<template lang="pug">
LoadingOverlay(v-if="isLoading && !show")
BasicLayout(v-else)
  .pb-5
    template(v-if="show")
      Hero(:img="show.Banner")

      .show-detail.mx-auto
        Heading.show-detail__heading(:title="show.Title")
        .show-detail__description(v-html="show.Description")
        .mt-5
          .show-detail__content(v-html="show.Content")
</template>

<script setup lang="ts">
import {
  onMounted,
  ref,
} from 'vue';
import { useRoute } from 'vue-router';
import { BasicLayout } from '@/layouts';
import {
  Heading,
  Hero,
  LoadingOverlay,
} from '@/components';
import { showsService } from '@/api/services';
import type { ShowItem } from '@/types';

const route = useRoute();

const isLoading = ref(true);
const show = ref<ShowItem | null>(null);

onMounted(async () => {
  show.value = await showsService.getShowById(route.params.id as string);
  isLoading.value = false;
});
</script>

<style scoped>
.show-detail { max-width: 700px; }
.show-detail__heading { margin-top: 5rem; margin-bottom: 2rem; }
</style>
