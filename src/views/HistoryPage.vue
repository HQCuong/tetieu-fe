<template lang="pug">
BasicLayout
  Hero(:img="historyBanner")

  .history-page.py-5
    Heading.my-5.text-center.text-danger(title="LỊCH SỬ HÌNH THÀNH")

    MediaCard(
      v-for="(section, index) in sections",
      :key="section.key",
      :class="{ 'mt-5': index > 0 }",
      :image-src="section.image",
      background-color="#ffffff",
    )
      .me-5
        h4 {{ section.content.title }}
        p.font-normal(v-if="section.content.subTitle") {{ section.content.subTitle }}
        p(v-html="section.content.content")
</template>

<script setup lang="ts">
import { BasicLayout } from '@/layouts';
import {
  Heading,
  Hero,
  MediaCard,
} from '@/components';
import { HISTORY_PAGE_CONTENT } from '@/content';
import historyBanner from '@/assets/images/history-banner.jpg';
import history1 from '@/assets/images/history-1.jpg';
import history2 from '@/assets/images/history-2.jpg';
import history3 from '@/assets/images/history-3.jpg';
import history4 from '@/assets/images/history-4.jpg';
import history5 from '@/assets/images/history-5.jpg';

interface HistorySection {
  key: string;
  image: string;
  content: { title: string; subTitle?: string; content: string };
}

const sections: HistorySection[] = [
  { key: 'first',  image: history1, content: HISTORY_PAGE_CONTENT.firstSection },
  { key: 'second', image: history2, content: HISTORY_PAGE_CONTENT.secondSection },
  { key: 'third',  image: history3, content: HISTORY_PAGE_CONTENT.thirdSection },
  { key: 'fourth', image: history4, content: HISTORY_PAGE_CONTENT.fourthSection },
  { key: 'fifth',  image: history5, content: HISTORY_PAGE_CONTENT.fifthSection },
];
</script>

<style scoped>
.history-page { max-width: 1200px; margin: 0 auto; }
</style>
