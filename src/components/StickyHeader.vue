<template lang="pug">
header.fixed-top(:class="headerClasses")
  .container-fluid
    .row
      .col-4

      .col-4.text-center.p-0
        router-link(
          :to="{ path: '/' }",
          aria-label="Home",
        )
          img.brand-logo(
            alt="Brand Logo",
            :src="brandLogo",
            :class="{ scrolled: isScrolled, 'menu-open': isMenuOpen }",
          )

      .col-4.text-end
        nav(aria-label="Main navigation")
          ul.nav
            li.nav-item(
              v-for="item in NAVIGATION_ITEMS",
              :key="String(item.to)",
            )
              router-link.nav-link.font-heading(:to="item.to") {{ item.label }}
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
                BurgerMenu.burger-svg-icon(:class="{ open: isMenuOpen }")

.collapsible-menu#collapsibleMenu(
  :class="{ open: isMenuOpen }",
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
            h3.menu-column-title.font-heading {{ column.title }}
            ul.collapsible-nav
              li.collapsible-nav-item(
                v-for="(item, index) in column.items",
                :key="`${colIndex}-${index}`",
              )
                router-link.collapsible-nav-link.font-heading(
                  :to="item.to",
                  @click="closeMenu",
                ) {{ item.label }}
</template>

<script setup lang="ts">
import {
  computed,
  onMounted,
  onUnmounted,
  ref,
} from 'vue';
import {
  BURGER_MENU_ITEMS,
  NAVIGATION_ITEMS,
} from '@/constants';
import brandLogo from '@/assets/images/brand.png';
import BurgerMenu from '@/assets/icons/burger-menu.svg?component';

// Keep these in sync with the matching SCSS breakpoint / header sizing.
const SCROLL_THRESHOLD = 50;
const DESKTOP_BREAKPOINT = 1280;

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const headerClasses = computed(() => ({
  'header-scrolled': isScrolled.value,
  'menu-open': isMenuOpen.value,
}));

// Lock body scroll while the fullscreen menu is open.
const setBodyScrollLocked = (locked: boolean) => {
  document.body.style.overflow = locked ? 'hidden' : '';
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  setBodyScrollLocked(isMenuOpen.value);
};

const closeMenu = () => {
  if (!isMenuOpen.value) { return; }

  isMenuOpen.value = false;
  setBodyScrollLocked(false);
};

const handleScroll = () => {
  const scrolled = window.scrollY > SCROLL_THRESHOLD;

  if (isScrolled.value !== scrolled) {
    isScrolled.value = scrolled;
  }
};

// Collapse the menu automatically when resizing back to desktop width.
const handleResize = () => {
  if (window.innerWidth > DESKTOP_BREAKPOINT && isMenuOpen.value) {
    closeMenu();
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleResize);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
  setBodyScrollLocked(false);
});
</script>
