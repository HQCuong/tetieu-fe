<template lang="pug">
FullPageLoading(v-if="isLoading")
BasicLayout(v-else)
  Hero(:img="NewsPageBanner")

  MediaCard(
    v-if="latestNew",
    dir="ltr",
    :image-src="latestNew.Thumbnail",
    background-color="#ffffff",
  )
    h4.latest-new-title.mb-4 {{ latestNew.Title }}
    .latest-new-description(v-html="latestNew.Description")

    button.btn.btn-outline-dark.mt-4(@click="router.push({ name: 'new-detail', params: { id: latestNew?.Id } })") Read more

  MediaCard(
    v-if="secondNew",
    dir="rtl",
    :image-src="secondNew.Thumbnail",
    background-color="#2b5a6e",
  )
    .text-white.text-end
      h4.latest-new-title.mb-4 {{ secondNew.Title }}
      .latest-new-description(v-html="secondNew.Description")

    .d-flex.justify-content-end
      button.btn.btn-outline-light.mt-4(@click="router.push({ name: 'new-detail', params: { id: secondNew?.Id } })") Read more

  .mt-4
    NewTable(
      v-if="news && news.list",
      :news-items="news.list",
    )
</template>

<script setup lang="ts">
import {
  ref,
  onMounted,
} from 'vue';
import { useRouter } from 'vue-router';
import { newServices } from '@/services';
import {
  BasicLayout,
  Hero,
  MediaCard,
  NewTable,
  FullPageLoading,
} from '@/components';
import NewsPageBanner from '@/assets/imgs/news-page-banner.jpg';

const router = useRouter();

const isLoading = ref(true);
const news = ref<null | Record<string, any>>(null);
const latestNew = ref<null | Record<string, any>>(null);
const secondNew = ref<null | Record<string, any>>(null);

const getNews = async () => {
  const res = await newServices.getNews() as null | Record<string, any>;

  if (res && res.list && res.list.length) {
    news.value = res;

    const lastNews = res.list[res.list.length - 1];

    latestNew.value = lastNews;

    if (res.list.length > 1) {
      const secondLastNews = res.list[res.list.length - 2];

      secondNew.value = secondLastNews;
    }
  }

  isLoading.value = false;
};

onMounted(() => {
  getNews();
});
</script>
