<template lang="pug">
.show-table-section.container.my-5
  .list-group.show-list-spacious
    .list-group-item.border-0.border-top.px-3.py-3(
      v-for="(item, index) in showItems",
      :key="item.Id",
      :style="{ backgroundColor: rowColor(index) }",
    )
      .row.align-items-center.gx-5
        .col-md-3.col-lg-2
          img.show-item-image(
            :src="item.Thumbnail",
            :alt="item.Title",
          )
        .col.title-column
          h5.show-item-title.mb-0(v-html="item.Title")
        .col-md-3.col-lg-2
          p.mb-0(v-html="item.Author")
        .col-auto.text-end.ms-auto
          router-link.btn.btn-outline-secondary(
            :to="{ name: 'show-detail', params: { id: item.Id } }",
          ) Details
</template>

<script setup lang="ts">
import type { ShowItem } from '@/types';

// Soft pastel palette cycled through rows for visual rhythm without clashing.
const ROW_COLORS = [
  '#fff0f0',
  '#e7f5ff',
  '#f0fff0',
  '#fff9db',
  '#f5f5f5',
  '#e6e6fa',
];

const rowColor = (index: number): string => ROW_COLORS[index % ROW_COLORS.length];

defineProps<{
  showItems: ShowItem[];
}>();
</script>
