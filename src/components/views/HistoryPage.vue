<template lang="pug">
BasicLayout
  Hero(:img="HistoryBanner")
</template>

<script setup lang="ts">
import {
  Hero,
  BasicLayout,
} from '@/components';
import HistoryBanner from '@/assets/imgs/history-banner.jpg';
</script>
