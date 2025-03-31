<template lang="pug">
.b-card.container.py-4
  .row.align-items-center(:class="cardClass")
    .col-md-6
      img.img-fluid.rounded(
        :src="image",
        alt="Media Image",
      )
    .col-md-6.text-center.text-md-start
      h4 {{ title }}
      p {{ description }}
      a.btn.btn-primary(:href="actionLink") {{ actionText }}
</template>

<script setup lang="ts">
import {
  defineProps,
  computed,
} from 'vue';

interface Props {
  image: string;
  title: string;
  description: string;
  actionText?: string;
  actionLink?: string;
  rtl?: boolean;
}

const props = defineProps<Props>();

const cardClass = computed(() => ({ 'flex-row-reverse': props.rtl }));
</script>

<style scoped>
.b-card {
  background: #eaf2f8;
  padding: 20px;
  border-radius: 10px;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
