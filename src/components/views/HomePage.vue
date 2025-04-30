<template lang="pug">
BasicLayout
  Hero(:img="HomePageBanner")
  PerformanceTable(:performances="PERFORMANCES")

  Heading.text-center(
    title=" RỐI TẾ TIÊU",
    :style="{ marginTop: '6rem', marginBottom: '3rem' }",
  )
  MediaCard(
    dir="rtl",
    image-src="https://marionetten.at/assets/images/Haende1_2022-08-02-091704_lqec.JPG",
    background-color="#ffffff",
  )
    .me-3.text-end
      h4 {{ HOME_PAGE_TITLE_SECTION.title }}
      p.font-normal {{ HOME_PAGE_TITLE_SECTION.subTitle }}
      p.font-normal {{ HOME_PAGE_TITLE_SECTION.content }}
      button.btn.btn-outline-dark.mt-3 {{ HOME_PAGE_TITLE_SECTION.buttonText }}

  Heading.text-center(
    title="TIN TỨC",
    :style="{ marginTop: '6rem', marginBottom: '3rem' }",
  )
  .mt-5
    MediaCard(
      v-if="latestNew",
      dir="ltr",
      :image-src="latestNew.Thumbnail",
      background-color="#2b5a6e",
    )
      .text-white
        h4.latest-new-title.mb-4
          router-link.text-white.text-decoration-none(:to="{ name: 'new-detail', params: { id: latestNew?.Id } }") {{ latestNew.Title }}
        p.latest-new-description.fw-lighter(v-html="latestNew.Description")

      button.btn.btn-outline-light.mt-3(@click="router.push({ name: 'new-detail', params: { id: latestNew?.Id } })") Read more

    MediaCard(
      v-if="secondNew",
      dir="rtl",
      :image-src="secondNew.Thumbnail",
      background-color="#2b5a6e",
    )
      .text-white.text-end
        h4.second-new-title.mb-4
          router-link.text-white.text-decoration-none(:to="{ name: 'new-detail', params: { id: secondNew?.Id } }") {{ secondNew.Title }}
        p.second-new-description.fw-lighter(v-html="secondNew.Description")

      .d-flex.justify-content-end.mt-3
        button.btn.btn-outline-light(@click="router.push({ name: 'new-detail', params: { id: secondNew?.Id } })") Read more
</template>

<script setup lang="ts">
import {
  onMounted,
  ref,
} from 'vue';
import { useRouter } from 'vue-router';
import { newServices } from '@/services';
import {
  HOME_PAGE_TITLE_SECTION,
  PERFORMANCES,
} from '@/configs';
import {
  BasicLayout,
  Hero,
  MediaCard,
  PerformanceTable,
  Heading,
} from '@/components';
import HomePageBanner from '@/assets/imgs/home-page-banner.jpg';

const router = useRouter();

const latestNew = ref<null | Record<string, any>>(null);
const secondNew = ref<null | Record<string, any>>(null);

const getFirstNew = async () => {
  const news = await newServices.getNews() as null | Record<string, any>;

  if (news && news.list && news.list.length) {
    const lastNews = news.list[news.list.length - 1];

    latestNew.value = lastNews;

    if (news.list.length > 1) {
      const secondLastNews = news.list[news.list.length - 2];

      secondNew.value = secondLastNews;
    }
  }
};

onMounted(() => {
  getFirstNew();
});
</script>
