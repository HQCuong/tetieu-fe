<template lang="pug">
.news-table-section.container.my-5
  // List layout taking container width
  .list-group.news-list-spacious
    .list-group-item.border-0.border-top.px-3.py-3(
      v-for="(item) in newsItems",
      :key="item.Id",
    )
      .row.align-items-center.gx-5
        // Image Column
        .col-md-3.col-lg-2
          img.news-item-image(
            :src="item.Thumbnail",
            :alt="item.Title",
          )

        // Title Column
        .col
          h5.news-item-title.mb-0(v-html="item.Title")

        // Button Column
        .col-auto.text-end
          button.btn.btn-outline-secondary(@click="router.push({ name: 'new-detail', params: { id: item.Id } })") Details

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

<style scoped lang="scss">
// Spacious list styles
.news-list-spacious {
  // Removed max-width and margins

  .list-group-item {
    transition: background-color 0.2s ease-in-out;
    border-top: 1px solid #dee2e6 !important; // Slightly darker border
    background-color: #fff; // Default white background for odd rows

    &:first-child {
      border-top: none !important;
    }

    // Style for alternating background using :nth-child
    &:nth-child(even) {
      background-color: #f8f9fa; // Light gray for even rows
    }

    &:hover {
      background-color: #f1f3f5; // Slightly darker hover background (applies to both odd and even)
    }
  }
}

.news-item-image {
  width: 100%; // Let width be controlled by column
  height: 120px; // Significantly increased height
  object-fit: cover;
  display: block;
  border-radius: 0.25rem; // Slightly larger radius
}

.news-item-title {
  font-size: 1.1rem; // Increased font size
  font-weight: 500; // Medium weight
  color: #212529;
  // Removed ellipsis for now, let title wrap if needed
  // white-space: nowrap;
  // overflow: hidden;
  // text-overflow: ellipsis;
}

// Style for the secondary outline button
.btn-outline-secondary {
  font-size: 0.875rem; // Standard small button size
  padding: 0.375rem 0.75rem; // Standard small button padding
}

// Responsive adjustments for image height if needed
@media (max-width: 767px) {
  .news-item-image {
    height: 100px; // Slightly smaller height on mobile
  }
  // Adjust column definition for mobile if needed
  .row > .col-md-3 {
     margin-bottom: 1rem; // Add space below image on mobile stack
  }
}
</style>
