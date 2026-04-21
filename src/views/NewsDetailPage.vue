<template lang="pug">
LoadingOverlay(v-if="isLoading && !article")
BasicLayout(v-else)
  .pb-5
    template(v-if="article")
      Hero(:img="article.Banner")

      .article.mx-auto
        Heading.article__heading(:title="article.Title")
        .article__description(v-html="article.Description")
        .mt-5
          .article__content(v-html="article.Content")
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
import { newsService } from '@/api/services';
import type { NewsItem } from '@/types';

const route = useRoute();

const isLoading = ref(true);
const article = ref<NewsItem | null>(null);

onMounted(async () => {
  article.value = await newsService.getNewsById(route.params.id as string);
  isLoading.value = false;
});
</script>

<style scoped>
.article { max-width: 700px; }
.article__heading { margin-top: 5rem; margin-bottom: 2rem; }
</style>
