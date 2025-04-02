<template lang="pug">
header.fixed-top(:class="headerClasses")
  .container-fluid
    .row(:class="rowClasses")
      .col-4

      .col-4.text-center.p-0
        a(href="#")
          BrandIcon.brand-icon(:style="brandStyle")

      .col-4.text-end
        nav
          ul.nav
            li.nav-item(
              v-for="(item, index) in NAVIGATION_ITEMS",
              :key="index",
            )
              a.nav-link.text-white(:href="item.href") {{ item.label }}
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
  onUnmounted,
} from 'vue';
import { NAVIGATION_ITEMS } from '@/configs';
import BrandIcon from '@/assets/brand.svg';

const isScrolled = ref(false);

const headerClasses = computed(() => ({ 'header-scrolled': isScrolled.value }));

const rowClasses = computed(() => ({ 'align-items-center': isScrolled.value }));

const brandStyle = computed(() => ({
  '--svg-brand-text-color': isScrolled.value ? 'black' : 'white',
  height: `${isScrolled.value ? 60 : 150}px`,
}));

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => window.addEventListener('scroll', handleScroll));

onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<style scoped>
header {
  background-color: transparent;
  padding: 15px 0;
  margin-top: 0.5rem;
}

header {
  transition: all 0.6s ease;
}

.header-scrolled {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  margin-top: 0;
}

.brand-icon {
  transition: all 0.3s ease;
}

.header-scrolled .nav-link {
  transition: color 0.2s ease-in-out;
  color: black !important;
}

.nav-link:hover {
  color: #f31212d1;
}
</style>
