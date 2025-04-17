<template lang="pug">
.pagination-wrapper.d-flex.justify-content-center.mt-4
  .btn-group(
    role="group",
    aria-label="Pagination",
  )
    button.btn.btn-outline-dark(
      type="button",
      aria-label="Previous",
      :disabled="isFirstPage",
      @click.prevent="emit('prev')",
    )
      span(aria-hidden) &laquo; Prev

    button.btn.btn-outline-dark(
      type="button",
      aria-label="Next",
      :disabled="isLastPage",
      @click.prevent="emit('next')",
    )
      span(aria-hidden) Next &raquo;
</template>

<script setup lang="ts">
interface Props {
  isFirstPage: boolean;
  isLastPage: boolean;
}

defineProps<Props>();

const emit = defineEmits<{
  (e: 'prev'): void;
  (e: 'next'): void;
}>();
</script>
