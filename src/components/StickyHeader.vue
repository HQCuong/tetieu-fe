<template lang="pug">
header.fixed-top(:class="headerClasses")
  .container-fluid
    .row(:class="rowClasses")
      .col-4

      .col-4.text-center.p-0
        a(
          href="#",
          aria-label="Home",
        )
          BrandIcon.brand-icon(:style="brandStyle")

      .col-4.text-end
        nav(aria-label="Main Navigation")
          ul.nav
            li.nav-item(
              v-for="(item, index) in NAVIGATION_ITEMS",
              :key="index",
            )
              a.nav-link.text-white(:href="item.href") {{ item.label }}
            li.nav-item.ms-3
              .hamburger-menu(
                role="button",
                aria-controls="collapsibleMenu",
                :aria-expanded="isMenuOpen",
                @click="toggleMenu",
              )
                BurgerMenu.burger-svg-icon(:class="{ 'open': isMenuOpen }")

.collapsible-menu#collapsibleMenu(:class="{ 'open': isMenuOpen }")
  .container-fluid.h-100
    .row.h-100.align-items-center
      .col-12
        .row.menu-columns
          .col-lg-3.col-md-6.col-12.mb-4.mb-lg-0(
            v-for="(column, colIndex) in BURGER_MENU_ITEMS",
            :key="`col-${colIndex}`",
          )
            h3.menu-column-title {{ column.title }}
            ul.collapsible-nav
              li.collapsible-nav-item(
                v-for="(item, index) in column.items",
                :key="`${colIndex}-${index}`",
              )
                a.collapsible-nav-link(
                  :href="item.href",
                  @click="closeMenu",
                ) {{ item.label }}
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
  onUnmounted,
  watch,
} from 'vue';
import {
  NAVIGATION_ITEMS,
  BURGER_MENU_ITEMS,
} from '@/configs';
import BrandIcon from '@/assets/brand.svg';
import BurgerMenu from '@/assets/burger-menu.svg';

// State
const isScrolled = ref(false);
const isMenuOpen = ref(false);

// Computed
const headerClasses = computed(() => ({
  'header-scrolled': isScrolled.value,
  'menu-open': isMenuOpen.value,
}));

const rowClasses = computed(() => ({ 'align-items-center': isScrolled.value }));

const brandStyle = computed(() => ({
  '--svg-brand-text-color': isScrolled.value ? 'black' : 'white',
  height: `${isScrolled.value ? 60 : 150}px`,
}));

// Methods
const setBodyOverflow = (hidden = false) => {
  document.body.style.overflow = hidden ? 'hidden' : '';
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  setBodyOverflow(isMenuOpen.value);
};

const closeMenu = () => {
  if (!isMenuOpen.value) {return;}

  isMenuOpen.value = false;
  setBodyOverflow(false);
};

const handleScroll = () => {
  const shouldBeScrolled = window.scrollY > 50;

  if (isScrolled.value !== shouldBeScrolled) {
    isScrolled.value = shouldBeScrolled;
  }
};

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  setBodyOverflow(false);
});

watch(
  () => window.innerWidth,
  width => {
    if (width > 1280 && isMenuOpen.value) {
      closeMenu();
    }
  },
);
</script>
