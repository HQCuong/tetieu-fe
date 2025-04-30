<template lang="pug">
// Only render the container if there is data or potentially during loading (optional)
.performance-table-section.container.my-5(v-if="performanceList.length > 0")
  // Restore original static title
  h2.my-4 LỊCH DIỄN SẮP TỚI
  .list-group
    .list-group-item.border-0.border-top.p-4(
      v-for="(item) in performanceList",
      :key="item.Id",
    )
      .row.align-items-center
        // Column 1: Date/Time - Updated bindings
        .col-md-3.mb-3.mb-md-0
          h6.text-uppercase.mb-1 {{ formatDayOfWeek(item.Date_Time) }}
          p.mb-0 {{ formatDateTime(item.Date_Time) }}

        // Column 2: Title/Author
        .col-md-4
          h6.text-danger.fw-bold.mb-1 {{ item.Title }}
          p.mb-0 {{ item.Author }}

        // Column 3: Location
        .col-md-2.mb-3.mb-md-0
          div(v-html="item.Location")

        // Column 4: Button
        .col-md-3.text-md-end
          a.btn.btn-outline-dark(
            :href="item.URL"
            target="_blank"
            rel="noopener noreferrer"
          ) Chi tiết
</template>

<script lang="ts" setup>
import {
  ref,
  onMounted,
  defineProps,
} from 'vue';
import {
  format,
  parseISO,
  startOfMonth,
  endOfMonth,
} from 'date-fns';
import { vi } from 'date-fns/locale';
import {
  type GetPerformancesPageParams,
  performanceServices,
} from '@/services';

// Define props
const props = defineProps({
  showRecent: {
    type: Boolean,
    default: false,
  },
  year: {
    type: Number,
    default: null,
  },
  month: {
    type: Number,
    default: null,
  },
});

// Define the structure of a single performance item from the API
interface ApiPerformance {
  Id: number;
  Title: string;
  Date_Time: string; // Combined Date and Time field (expecting ISO format like 'YYYY-MM-DDTHH:mm:ssZ' or similar)
  URL: string;
  Author: string;
  Location: string;
  CreatedAt: string;
  UpdatedAt: string | null;
}

// Ref to store the list of performances
const performanceList = ref<ApiPerformance[]>([]);

// Helper function to format day of the week in Vietnamese
const formatDayOfWeek = (dateTimeString: string): string => {
  try {
    const date = parseISO(dateTimeString); // Parse the combined date-time string

    return format(date, 'EEEE', { locale: vi }); // Format as full day name
  } catch (e) {
    console.error('Error formatting day of week from Date_Time:', e);

    return 'N/A';
  }
};

// Helper function to format date and time
const formatDateTime = (dateTimeString: string): string => {
  try {
    const date = parseISO(dateTimeString); // Parse the combined date-time string

    return format(date, 'dd/MM/yyyy HH:mm'); // Format as dd/MM/yyyy HH:mm
  } catch (e) {
    console.error('Error formatting date time from Date_Time:', e);

    return 'N/A';
  }
};

// Fetch data when the component mounts
onMounted(async () => {
  const params: GetPerformancesPageParams = { sort: 'Date_Time' };

  try {
    // Archive Mode: Year and Month provided
    if (props.year !== null && props.month !== null && props.month >= 1 && props.month <= 12) {
      const dateForMonth = new Date(props.year, props.month - 1, 1);
      const startDate = format(startOfMonth(dateForMonth), 'yyyy-MM-dd');
      const endDate = format(endOfMonth(dateForMonth), 'yyyy-MM-dd');

      params.where = `(Date_Time,ge,'${startDate}')~and(Date_Time,le,'${endDate}')`;
    }
    // Recent Mode: showRecent is true
    else if (props.showRecent) {
      params.where = '(Date_Time,ge,daysFromNow,0)';
      params.limit = 5;
    }
    // Default Mode: Show all upcoming
    else {
      params.where = '(Date_Time,ge,daysFromNow,0)';
    }

    const response = await performanceServices.getPerformances(params) as null | Record<string, any>;

    // Simplified response check
    if (response && response.list && Array.isArray(response.list)) {
      performanceList.value = response.list;
    } else {
      performanceList.value = [];
    }
  } catch (error) {
    performanceList.value = [];
    console.error('Error fetching performances:', error);
  }
});
</script>
