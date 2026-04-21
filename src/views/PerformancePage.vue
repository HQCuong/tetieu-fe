<template lang="pug">
BasicLayout
  Hero(:img="performanceBanner")

  .performance-page.container.py-5
    .row.g-3.my-4.justify-content-center.align-items-center
      .col-auto
        button.btn.btn-outline-secondary(
          aria-label="Tháng trước",
          @click="shiftMonth(-1)",
        ) &lt;
      .col-auto.text-center.performance-page__label
        h4.mb-0 {{ label }}
      .col-auto
        button.btn.btn-outline-secondary(
          aria-label="Tháng sau",
          @click="shiftMonth(1)",
        ) &gt;

    //- Re-mount PerformanceTable whenever year/month changes so its
    //- onMounted re-fetches the data for the new period.
    PerformanceTable(
      :key="`${year}-${month}`",
      :year="year",
      :month="month",
    )
</template>

<script setup lang="ts">
import {
  computed,
  ref,
} from 'vue';
import { BasicLayout } from '@/layouts';
import {
  Hero,
  PerformanceTable,
} from '@/components';
import performanceBanner from '@/assets/images/performance-banner.jpg';

const now = new Date();
const year = ref(now.getFullYear());
// JS months are 0-indexed; the API expects 1-12.
const month = ref(now.getMonth() + 1);

const label = computed(() => `Tháng ${month.value} / ${year.value}`);

const shiftMonth = (delta: 1 | -1) => {
  const next = month.value + delta;

  if (next < 1) {
    month.value = 12;
    year.value -= 1;
  } else if (next > 12) {
    month.value = 1;
    year.value += 1;
  } else {
    month.value = next;
  }
};
</script>

<style scoped>
.performance-page__label { min-width: 150px; }
</style>
