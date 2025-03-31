<template lang="pug">
section.hero
  img.hero-bg(
    :src="img",
    alt="hero background",
  )
  .overlay
  .hero-content
    h1.fw-bold.birthstone-font
      | RỐI TẾ TIÊU

    button.btn.btn-outline-light.btn-lg Get tickets
</template>

<script setup lang="ts">
interface Props {
  // Background img
  img?: string;
}

defineProps<Props>();
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}

.hero-content {
  position: absolute;
  color: white;
  text-align: center;
  z-index: 2;
}

.hero-content h1 {
  font-size: 7rem;
}
</style>
