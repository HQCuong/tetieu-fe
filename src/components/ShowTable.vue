<template lang="pug">
.show-table-section.container.my-5
  // List layout taking container width
  .list-group.show-list-spacious
    .list-group-item.border-0.border-top.px-3.py-3(
      v-for="(item, index) in showItems",
      :key="item.Id",
      :style="{ backgroundColor: getRowColor(index) }"
    )
      .row.align-items-center.gx-5
        // Image Column (Adjust column size if needed)
        .col-md-3.col-lg-2
          img.show-item-image(
            :src="item.Thumbnail",
            :alt="item.Title",
          )

        // Title Column - Apply width limiting class/style here if needed, or rely on CSS below
        .col.title-column
          h5.show-item-title.mb-0(v-html="item.Title")

        .col-md-3.col-lg-2
          // Assuming 'Author' field exists
          p.mb-0(v-html="item.Author")

        // Button Column - Add ms-auto to push column to the right
        .col-auto.text-end.ms-auto
          // Update route name to 'show-detail'
          button.btn.btn-outline-secondary(@click="router.push({ name: 'show-detail', params: { id: item.Id } })") Details

</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

// Define interface for ShowItem based on expected data
interface ShowItem {
  Id: string | number;
  Thumbnail: string; // Adjust field names if different
  Title: string; // Adjust field names if different
  Author: string; // Adjust field names if different
  // Add other relevant fields if needed
}

const router = useRouter();

defineProps<{
  showItems: ShowItem[];
}>();

// More diverse (but light) color palette
const colors = [
  '#fff0f0', // Very light red/pink
  '#e7f5ff', // Very light blue
  '#f0fff0', // Very light green (honeydew)
  '#fff9db', // Very light yellow
  '#f5f5f5', // Light gray
  '#e6e6fa', // Lavender
];

const getRowColor = (index: number) => colors[index % colors.length];
</script>

<style scoped lang="scss">
// Spacious list styles for shows
.show-list-spacious {
  .list-group-item {
    transition: background-color 0.2s ease-in-out;
    border-top: 1px solid #dee2e6 !important;
    // Default background for the first item or if others don't match
    background-color: #f8f9fa; // Light gray default

    &:first-child {
      border-top: none !important;
    }

    &:hover {
      // Slightly darken the existing background on hover
      // Using filter might be easier than calculating darker shades for each color
      filter: brightness(96%);
    }
  }
}

.show-item-image {
  width: 100%;
  height: 120px; // Adjust height as needed
  object-fit: cover;
  display: block;
  border-radius: 0.25rem;
}

// Limit title column width
.title-column {
  // Prevent the column from growing indefinitely
  flex-grow: 1;
  flex-shrink: 1;
  // Important: Set an explicit width or max-width for ellipsis to work
  // Adjust this value based on your layout needs
  max-width: 40%; // Example: Limit to 40% of the row width
  // Or use a fixed max-width:
  // max-width: 300px;
  overflow: hidden; // Keep hidden overflow for the column itself if needed, but allow text wrap inside
}

.show-item-title {
  font-size: 1.1rem;
  font-weight: 500;
  color: #212529; // Ensure text color contrasts with backgrounds
  // Allow normal wrapping
  white-space: normal; // Explicitly set to normal (default)
  word-wrap: break-word; // Ensure long words break if necessary
}

.btn-outline-secondary {
  font-size: 0.875rem;
  padding: 0.375rem 0.75rem;
}

// Responsive adjustments
@media (max-width: 767px) {
  .show-item-image {
    height: 100px;
  }
  .row > .col-md-3 {
     margin-bottom: 1rem;
  }
}
</style>
