<template lang="pug">
.performance-table-section.container.my-5(style="min-height: 300px;")
  .d-flex.justify-content-center.align-items-center.h-100(
    v-if="isLoading",
    style="min-height: inherit;",
  )
    .spinner-border(role="status")
      span.visually-hidden Loading...

  template(v-else)
    template(v-if="performances.length > 0")
      Heading(title="Lịch diễn sắp tới")
      .list-group
        .list-group-item.border-0.border-top.p-4(
          v-for="item in performances",
          :key="item.Id",
        )
          .row.align-items-center
            .col-md-3.mb-3.mb-md-0
              h6.text-uppercase.mb-1 {{ formatDayOfWeekVi(item.Date_Time) }}
              p.mb-0 {{ formatDateTime(item.Date_Time) }}
            .col-md-4
              h6.text-danger.fw-bold.mb-1 {{ item.Title }}
              p.mb-0 {{ item.Author }}
            .col-md-2.mb-3.mb-md-0
              div(v-html="item.Location")
            .col-md-3.text-md-end
              a.btn.btn-outline-dark(
                :href="item.URL",
                target="_blank",
                rel="noopener noreferrer",
              ) Chi tiết

    .alert.alert-light.text-center.p-5(v-else)
      p.mb-0 Không có lịch diễn nào
</template>

<script setup lang="ts">
import {
  ref,
  onMounted,
} from 'vue';
import {
  differenceInDays,
  endOfDay,
  endOfMonth,
  parseISO,
} from 'date-fns';
import {
  performancesService,
  type GetPerformancesParams,
} from '@/api/services';
import {
  formatDateTime,
  formatDayOfWeekVi,
} from '@/utils/date';
import { logger } from '@/utils/logger';
import { Heading } from '@/components';
import type { Performance } from '@/types';

interface Props {
  showRecent?: boolean;
  year?: number | null;
  month?: number | null;
}

const props = withDefaults(defineProps<Props>(), {
  showRecent: false,
  year: null,
  month: null,
});

const performances = ref<Performance[]>([]);
const isLoading = ref(true);

// Build the NocoDB `where` clause and whether we still need to narrow the
// result on the client (archive mode returns a date range, then we pick the
// specific month).
const buildQuery = (): { params: GetPerformancesParams; needsClientFilter: boolean } => {
  const params: GetPerformancesParams = { sort: 'Date_Time' };
  const isArchiveMode = props.year !== null
    && props.month !== null
    && props.month >= 1
    && props.month <= 12;

  if (isArchiveMode) {
    const target = endOfDay(endOfMonth(new Date(props.year as number, (props.month as number) - 1, 1)));
    const daysOffset = Math.max(0, differenceInDays(target, new Date()));

    params.where = `(Date_Time,ge,daysFromNow,0)~and(Date_Time,le,daysFromNow,${daysOffset})`;

    return { params, needsClientFilter: true };
  }

  params.where = '(Date_Time,ge,daysFromNow,0)';
  if (props.showRecent) { params.limit = 5; }

  return { params, needsClientFilter: false };
};

const matchesSelectedMonth = (item: Performance): boolean => {
  try {
    const date = parseISO(item.Date_Time);

    return date.getFullYear() === props.year
      && date.getMonth() === (props.month as number) - 1;
  } catch (error) {
    logger.warn('Invalid Date_Time during filtering', item.Date_Time, error);

    return false;
  }
};

onMounted(async () => {
  const { params, needsClientFilter } = buildQuery();
  const res = await performancesService.getPerformances(params);
  const list = res?.list ?? [];

  performances.value = needsClientFilter ? list.filter(matchesSelectedMonth) : list;
  isLoading.value = false;
});
</script>
