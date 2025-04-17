<template lang="pug">
BasicLayout
  Hero(:img="HomePageBanner")
  PerformanceTable(:performances="PERFORMANCES")

  Heading.text-center(
    title="The Salzburg Marionette Theatre",
    :style="{ marginTop: '6rem', marginBottom: '3rem' }",
  )
  MediaCard(
    dir="rtl",
    image-src="https://marionetten.at/assets/images/Haende1_2022-08-02-091704_lqec.JPG",
    background-color="#ffffff",
  )
    .ps-3
      h4 The high art of puppetry
      p.font-normal.fw-bold What makes the Salzburg Marionette Theatre different from other theatres?
      p.font-normal
        | This special performance technique,
        | has been declared a cultural asset worthy of preservation,
        | as the "most highly developed form of puppet and figure theatre",
        | earning the Salzburg Marionette Theatre a place in the UNESCO List of Intangible Cultural Heritage.

      button.btn.btn-outline-dark Unesco Intangible Cultural Heritage

  Heading.text-center(
    title="News",
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
        h4.latest-new-title.mb-4 {{ latestNew.Title }}
        .latest-new-description(v-html="latestNew.Description")

      button.btn.btn-outline-light.mt-4(@click="router.push({ name: 'new-detail', params: { id: latestNew?.Id } })") Read more

  .mt-5
    Hero(:img="FooterImg")
</template>

<script setup lang="ts">
import {
  onMounted,
  ref,
} from 'vue';
import { useRouter } from 'vue-router';
import { newServices } from '@/services';
import { PERFORMANCES } from '@/configs';
import {
  BasicLayout,
  Hero,
  MediaCard,
  PerformanceTable,
  Heading,
} from '@/components';
import HomePageBanner from '@/assets/imgs/home-page-banner.jpg';
import FooterImg from '@/assets/imgs/footer.jpg';

const router = useRouter();

const latestNew = ref<null | Record<string, any>>(null);

const getFirstNews = async () => {
  const news = await newServices.getNews() as null | Record<string, any>;

  if (news && news.list && news.list.length) {
    const lastNews = news.list[news.list.length - 1];

    latestNew.value = lastNews;
  }
};

onMounted(() => {
  getFirstNews();
});
</script>
