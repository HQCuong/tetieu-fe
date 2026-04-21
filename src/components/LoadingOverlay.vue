<template lang="pug">
.loading-overlay
  .loading-indicator {{ message }}
</template>

<script setup lang="ts">
interface Props {
  message?: string;
}

withDefaults(defineProps<Props>(), { message: 'Loading...' });
</script>

<style scoped lang="scss">
@import '@/scss/common/variables';
@import '@/scss/common/mixins';

.loading-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba($color-white, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: $z-overlay;
  font-size: 1.5rem;
  color: #333;
}

.loading-indicator {
  padding: 20px;
  background-color: $color-white;
  border-radius: 8px;
  box-shadow: $shadow-soft;
  @include pulse;
}
</style>
