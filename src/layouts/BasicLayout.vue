<template lang="pug">
StickyHeader
slot
.mb-4
  Hero(:img="footerImg")
Footer
</template>

<script setup lang="ts">
import {
  Footer,
  Hero,
  StickyHeader,
} from '@/components';
import footerImg from '@/assets/images/footer.jpg';
</script>
