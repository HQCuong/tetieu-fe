<template lang="pug">
.performance-table-section.container.my-5
  h2.my-4 LỊCH DIỄN SẮP TỚI
  .list-group
    .list-group-item.border-0.border-top.p-4(
      v-for="(item) in performances",
      :key="`${item.title}-${item.datetime}`",
    )
      .row.align-items-center
        // Date column (remains col-md-3)
        .col-md-3.mb-3.mb-md-0
          h6.text-uppercase.mb-1 {{ item.day }}
          p.mb-0 {{ item.datetime }}

        // Title/Author column (changed to col-md-4)
        .col-md-4
          h6.text-danger.fw-bold.mb-1 {{ item.title }}
          p.mb-0 {{ item.author }}

        // New column for Intermission/Duration (col-md-2)
        .col-md-2.mb-3.mb-md-0
          p.mb-1 {{ item.intermission }}
          p.mb-0 {{ item.duration }}

        // Button column (changed to col-md-3)
        .col-md-3.text-md-end
          a.btn.btn-outline-dark(
            :href="item.ticketsUrl"
            target="_blank"
            rel="noopener noreferrer"
          ) TICKETS
</template>

<script lang="ts" setup>
interface Performance {
  day: string
  datetime: string
  title: string
  author: string
  intermission: string
  duration: string
  ticketsUrl: string
}

defineProps<{
  performances: Performance[]
}>();
</script>
