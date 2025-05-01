<template lang="pug">
BasicLayout
  Hero(:img="PerformancePageBanner")
  .performance-page.container.py-5
    // Filter Section - Replaced with Arrow Navigation
    .row.g-3.my-4.justify-content-center.align-items-center
      .col-auto
        button.btn.btn-outline-secondary(
          aria-label="Tháng trước",
          @click="goToPreviousMonth",
        )
          i.bi.bi-chevron-left &lt;
      .col-auto.text-center(style="min-width: 150px;")
        h4.mb-0 {{ displayMonthYear }}
      .col-auto
        button.btn.btn-outline-secondary(
          aria-label="Tháng sau",
          @click="goToNextMonth",
        )
          i.bi.bi-chevron-right &gt;

    // Performance Table remains the same
    PerformanceTable(
      v-if="selectedYear && selectedMonth",
      :key="`${selectedYear}-${selectedMonth}`",
      :year="selectedYear",
      :month="selectedMonth",
    )
</template>

<script setup lang="ts">
import {
  ref,
  computed,
} from 'vue';
import {
  Hero,
  BasicLayout,
  PerformanceTable,
} from '@/components'; // Import any other components you need
import PerformancePageBanner from '@/assets/imgs/performance-banner.jpg';
// Optional: Import Bootstrap Icons CSS if not globally included
// import 'bootstrap-icons/font/bootstrap-icons.css';

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1; // JS months are 0-indexed

// Refs for selected filter values
const selectedYear = ref<number>(currentYear);
const selectedMonth = ref<number>(currentMonth);

// Computed property to display the selected month and year nicely
const displayMonthYear = computed(() => `Tháng ${selectedMonth.value} / ${selectedYear.value}`);

// Functions to handle month navigation
const goToPreviousMonth = () => {
  if (selectedMonth.value === 1) {
    selectedMonth.value = 12;
    selectedYear.value -= 1;
  } else {
    selectedMonth.value -= 1;
  }
};

const goToNextMonth = () => {
  if (selectedMonth.value === 12) {
    selectedMonth.value = 1;
    selectedYear.value += 1;
  } else {
    selectedMonth.value += 1;
  }
};

// Remove computed properties for dropdown options
// const yearOptions = computed(() => { ... });
// const monthOptions = computed(() => { ... });

// Note: The :key binding on PerformanceTable forces it to re-render
// when the year or month changes, triggering its onMounted hook again.
</script>

<style scoped>
/* Add any specific styles for PerformancePage here */
h4.mb-0 {
  /* Optional: Adjust font size or weight */
  font-weight: normal;
}
/* Ensure buttons are vertically aligned if needed */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
/* Example using Bootstrap Icons (ensure CSS is loaded) */
.bi {
  font-size: 1.2rem; /* Adjust icon size */
}
</style>
