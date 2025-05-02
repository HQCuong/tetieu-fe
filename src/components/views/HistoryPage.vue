<template lang="pug">
BasicLayout
  Hero(:img="HistoryBanner")

  .py-5(:style="{ maxWidth: '1200px', margin: '0 auto' }")
    Heading.my-5.text-center.text-danger(title="LỊCH SỬ HÌNH THÀNH")

    MediaCard(
      :image-src="FirstHistoryBanner",
      background-color="#ffffff",
    )
      .me-5
        h4 {{ HISTORY_PAGE_CONTENT.firstSection.title }}
        p.heading.font-normal {{ HISTORY_PAGE_CONTENT.firstSection.subTitle }}
        p(v-html="HISTORY_PAGE_CONTENT.firstSection.content")

    MediaCard.mt-5(
      :image-src="SecondHistoryBanner",
      background-color="#ffffff",
    )
      .me-5
        h4 {{ HISTORY_PAGE_CONTENT.secondSection.title }}
        p(v-html="HISTORY_PAGE_CONTENT.secondSection.content")

    MediaCard.mt-5(
      :image-src="ThirdHistoryBanner",
      background-color="#ffffff",
    )
      .me-5
        h4 {{ HISTORY_PAGE_CONTENT.thirdSection.title }}
        p(v-html="HISTORY_PAGE_CONTENT.thirdSection.content")

    MediaCard.mt-5(
      :image-src="FourthHistoryBanner",
      background-color="#ffffff",
    )
      .me-5
        h4 {{ HISTORY_PAGE_CONTENT.fourthSection.title }}
        p(v-html="HISTORY_PAGE_CONTENT.fourthSection.content")

    MediaCard.mt-5(
      :image-src="FifthHistoryBanner",
      background-color="#ffffff",
    )
      .me-5
        h4 {{ HISTORY_PAGE_CONTENT.fifthSection.title }}
        p(v-html="HISTORY_PAGE_CONTENT.fifthSection.content")
</template>

<script setup lang="ts">
import { HISTORY_PAGE_CONTENT } from '@/configs';
import {
  Hero,
  Heading,
  MediaCard,
  BasicLayout,
} from '@/components';
import HistoryBanner from '@/assets/imgs/history-banner.jpg';
import FirstHistoryBanner from '@/assets/imgs/h-rtt1.jpg';
import SecondHistoryBanner from '@/assets/imgs/h-rtt2.jpg';
import ThirdHistoryBanner from '@/assets/imgs/h-rtt3.jpg';
import FourthHistoryBanner from '@/assets/imgs/h-rtt4.jpg';
import FifthHistoryBanner from '@/assets/imgs/h-rtt5.jpg';
</script>
