<template lang="pug">
BasicLayout
  Hero(:img="ShowsBanner")
</template>

<script setup lang="ts">
import {
  Hero,
  BasicLayout,
} from '@/components';
import ShowsBanner from '@/assets/imgs/shows-banner.jpg';
</script>
