<template lang="pug">
.news-table-section.container.my-5
  .list-group.news-list-spacious
    .list-group-item.border-0.border-top.px-3.py-3(
      v-for="item in newsItems",
      :key="item.Id",
    )
      .row.align-items-center.gx-5
        .col-md-3.col-lg-2
          img.news-item-image(
            :src="item.Thumbnail",
            :alt="item.Title",
          )
        .col
          h5.news-item-title.mb-0(v-html="item.Title")
        .col-auto.text-end
          router-link.btn.btn-outline-secondary(
            :to="{ name: 'news-detail', params: { id: item.Id } }",
          ) Details
</template>

<script setup lang="ts">
import type { NewsItem } from '@/types';

defineProps<{
  newsItems: NewsItem[];
}>();
</script>
