<template lang="pug">
BasicLayout
  Hero(:img="HeroImg")
  PerformanceTable(:performances="performances")

  Heading(
    title="The Salzburg Marionette Theatre",
    :style="{ marginTop: '6rem', marginBottom: '3rem' }",
  )
  MediaCard(
    dir="ltr",
    image-src="https://marionetten.at/assets/images/Haende1_2022-08-02-091704_lqec.JPG",
    background-color="#ffffff",
  )

  Heading(
    title="News",
    :style="{ marginTop: '6rem', marginBottom: '3rem' }",
  )
  .mt-5
    MediaCard(
      dir="rtl",
      image-src="https://marionetten.at/assets/transforms/imager/images/12050387/GvS-Die-Prinzessin_W1200_H1200_f9d35c2e75cded6d5435415681c0a155.webp",
      background-color="#2b5a6e",
    )

  .mt-5
    Hero(img="https://marionetten.at/assets/transforms/imager/images/2836/Saal-Wiener-quer2_1_W2400_P49-29-98-94_07cb76639935b5817b13052ad8924314.webp")
</template>

<script setup lang="ts">
import {
  BasicLayout,
  Hero,
  MediaCard,
  PerformanceTable,
  Heading,
} from '@/components';
import HeroImg from '@/assets/imgs/home-page-banner.jpg';

const performances = [
  {
    day: 'WEDNESDAY',
    datetime: '16.04.2025 | 19:30',
    title: 'A Midsummer Night\'s Dream',
    author: 'William Shakespeare',
    intermission: 'with intermission',
    duration: '2 hours 15 minutes (intermission after the third act)',
    ticketsUrl: '#',
  },
  {
    day: 'THURSDAY',
    datetime: '17.04.2025 | 19:30',
    title: 'Romeo and Juliet',
    author: 'William Shakespeare',
    intermission: 'without intermission',
    duration: '1 hour 30 minutes',
    ticketsUrl: '#',
  },
  {
    day: 'SATURDAY',
    datetime: '19.04.2025 | 16:00',
    title: 'Carnival of the Animals',
    author: 'Poulenc/Ridout/Saint-Saëns',
    intermission: 'without intermission',
    duration: '1 hour 10 minutes',
    ticketsUrl: '#',
  },
  {
    day: 'SATURDAY',
    datetime: '19.04.2025 | 19:30',
    title: 'The Magic Flute',
    author: 'Wolfgang Amadeus Mozart',
    intermission: 'with intermission',
    duration: '2 hours 10 minutes (intermission after the first act)',
    ticketsUrl: '#',
  },
];
</script>
