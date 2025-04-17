<template lang="pug">
.news-table-section.container.my-5
  .list-group
    .list-group-item.border-0.border-top.p-4(
      v-for="(item) in newsItems",
      :key="item.Id",
    )
      .row.align-items-center
        .col-md-2.mb-3.mb-md-0
          img.news-item-image(
            :src="item.Thumbnail",
            :alt="item.Title",
          )

        .col-md-7.mb-3.mb-md-0
          .fw-bold.mb-1(v-html="item.Title")

        .col-md-3.text-md-end
          button.btn.btn-outline-dark(@click="router.push({ name: 'new-detail', params: { id: item.Id } })") Read more
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

interface NewsItem {
  Id: string | number;
  Thumbnail: string;
  Title: string;
}

const router = useRouter();

defineProps<{
  newsItems: NewsItem[];
}>();
</script>

<style scoped>
.news-item-image {
  width: 100%;
  height: 80px;
  object-fit: cover;
  display: block;
  border-radius: 0.25rem;
}
</style>
