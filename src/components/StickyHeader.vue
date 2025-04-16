<template lang="pug">
header.fixed-top(:class="headerClasses")
  .container-fluid
    .row(:class="rowClasses")
      .col-4

      .col-4.text-center.p-0
        router-link(
          :to="{ path: '/' }",
          aria-label="Home",
        )
          img.brand-logo(
            alt="Brand Logo",
            :src="Brand",
            :class="{ 'scrolled': isScrolled, 'menu-open': isMenuOpen }",
          )

      .col-4.text-end
        nav(aria-label="Main Navigation")
          ul.nav
            li.nav-item(
              v-for="(item, index) in NAVIGATION_ITEMS",
              :key="index",
            )
              router-link.nav-link(:to="item.to") {{ item.label }}
            li.nav-item.ms-3
              .hamburger-menu(
                role="button",
                tabindex="0",
                aria-controls="collapsibleMenu",
                :aria-expanded="isMenuOpen",
                @click="toggleMenu",
                @keydown.enter="toggleMenu",
                @keydown.space.prevent="toggleMenu",
              )
                BurgerMenu.burger-svg-icon(:class="{ 'open': isMenuOpen }")

.collapsible-menu#collapsibleMenu(
  :class="{ 'open': isMenuOpen }",
  :aria-hidden="!isMenuOpen",
)
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
                router-link.collapsible-nav-link(
                  :to="item.to",
                  @click="closeMenu",
                ) {{ item.label }}
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
  onUnmounted,
} from 'vue';
import {
  NAVIGATION_ITEMS,
  BURGER_MENU_ITEMS,
} from '@/configs';
import Brand from '@/assets/imgs/brand.png';
import BurgerMenu from '@/assets/burger-menu.svg?component';

// State
const isScrolled = ref(false);
const isMenuOpen = ref(false);

// Computed
const headerClasses = computed(() => ({
  'header-scrolled': isScrolled.value,
  'menu-open': isMenuOpen.value,
}));

// Remove 'align-items-center' from here
const rowClasses = computed(() => '');

// Methods
const setBodyOverflow = (hidden = false) => {
  document.body.style.overflow = hidden ? 'hidden' : '';
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  setBodyOverflow(isMenuOpen.value);
};

const closeMenu = () => {
  if (!isMenuOpen.value) { return; }

  isMenuOpen.value = false;
  setBodyOverflow(false);
};

const handleScroll = () => {
  const shouldBeScrolled = window.scrollY > 50;

  if (isScrolled.value !== shouldBeScrolled) {
    isScrolled.value = shouldBeScrolled;
  }
};

const handleResize = () => {
  if (window.innerWidth > 1280 && isMenuOpen.value) {
    closeMenu();
  }
};

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleResize);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
  setBodyOverflow(false);
});
</script>
