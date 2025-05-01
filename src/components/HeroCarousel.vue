<template lang="pug">
section.hero-carousel-section
  // Skeleton Loading state
  .skeleton-loader(v-if="isLoading")
    // You can add more complex skeleton shapes inside if needed

  // vue3-carousel implementation
  Carousel(
    v-else-if="carouselImages.length > 0",
    :autoplay="3000",
    :wrap-around="true",
    :items-to-show="1",
    :transition="300"
  )
    Slide(
      v-for="banner in carouselImages",
      :key="banner.Id",
    )
      .carousel__item
        // Use hero-bg class for styling consistency
        img.hero-bg.d-block.w-100(
          :src="banner.Url",
          :alt="`Hero Banner ${banner.Id}`",
          style="object-fit: cover;",
        )

    // Add navigation buttons and optional pagination
    template(#addons)
      Navigation

  // Empty state
  .d-flex.justify-content-center.align-items-center(
    v-else,
    style="min-height: 300px;",
  )
    p Không có banner nào để hiển thị.

</template>

<script setup lang="ts">
import {
  ref,
  onMounted,
} from 'vue';
import { contentService } from '@/services';
// Import vue3-carousel components and CSS
import 'vue3-carousel/dist/carousel.css'; // Import base CSS
import {
  Carousel,
  Slide,
  Navigation,
} from 'vue3-carousel';

const isLoading = ref(true);
const carouselImages = ref<any[]>([]);

// Keep shuffle function if needed, otherwise remove
const shuffleArray = (array: any[]) => {
  let currentIndex = array.length;
  let randomIndex = 0;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex],
    ];
  }

  return array;
};

const fetchCarouselImages = async () => {
  isLoading.value = true;
  try {
    const response = await contentService.getHomePageBanners();
    const images = response?.list || response || [];

    // Decide if shuffling is still desired
    carouselImages.value = shuffleArray(images);
    // carouselImages.value = images; // Or assign directly without shuffle
  } catch (error) {
    console.error('Failed to load carousel images:', error);
    carouselImages.value = [];
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchCarouselImages();
});

// Remove custom interval logic (startAutoplay, stopAutoplay, intervalId, onUnmounted)
// Remove custom navigation logic (nextImage, prevImage, activeIndex)
</script>

<style lang="scss">
// Import custom styles for vue3-carousel if needed, or override globally
// @import 'vue3-carousel/dist/carousel.css'; // Already imported in script, but can be here too

// --- Keep necessary base styles ---
.hero-carousel-section {
  position: relative;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

// Ensure the image style is applied
.hero-bg {
  display: block;
  width: 100%;
  height: auto; // Let image determine height
  object-fit: cover;
}

// --- vue3-carousel overrides ---
.carousel__prev,
.carousel__next {
  // Remove background and border
  background-color: transparent;
  border-radius: 0;
  // Adjust size to fit icon, or remove if default is okay
  width: auto;
  height: auto;
  // Ensure icon color is visible
  color: white;
  // Adjust margin for positioning from edge
  margin: 0 15px; // Example margin

  &:hover {
    // Remove background change on hover
    background-color: transparent;
    // Optionally change icon color on hover
    color: #eee; // Lighter gray example
  }

  .carousel__icon {
     // Adjust icon size if needed
     width: 30px;
     height: 30px;
     // Add a drop shadow for better visibility against various backgrounds
     filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.7));
  }
}

// --- Skeleton Loader Styles ---
.skeleton-loader {
  width: 100%;
  // Set a height consistent with the expected carousel height
  // Using vh unit like the original hero image might be appropriate
  height: 60vh; // Example: Match the original max-height. Adjust as needed.
  // Or use a fixed pixel height if preferred:
  // height: 400px;
  background-color: #e0e0e0; // Light gray background
  border-radius: 4px; // Optional: slight rounding

  // Optional: Add a subtle animation
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

// Adjust skeleton height and hide controls for smaller screens
@media (max-width: 767px) {
  .skeleton-loader {
    height: 40vh; // Example: Smaller height for mobile
  }

  // Hide navigation buttons on mobile
  .carousel__prev,
  .carousel__next {
    display: none;
  }
}
</style>

