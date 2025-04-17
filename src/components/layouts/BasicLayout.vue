<template lang="pug">
StickyHeader
slot
Hero(:img="FooterImg")
Footer
</template>

<script setup lang="ts">
import {
  Footer,
  StickyHeader,
  Hero,
} from '@/components';
import FooterImg from '@/assets/imgs/footer.jpg';
</script>
