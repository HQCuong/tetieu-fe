<template lang="pug">
BasicLayout
  Hero(:img="HERO_BG_IMAGE")
</template>

<script setup lang="ts">
import { HERO_BG_IMAGE } from '@/configs';
import {
  BasicLayout,
  Hero,
} from '@/components';
</script>
