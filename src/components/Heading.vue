<template lang="pug">
.big-heading
  .container
    .row
      .col-12.p-0
        p.font-heading.text-danger(:style="{ fontSize, fontWeight }") {{ title }}
</template>

<script setup lang="ts">
interface Props {
  title: string;
  fontSize?: string;
  fontWeight?: string;
}

withDefaults(
  defineProps<Props>(),
  {
    fontSize: '60px',
    fontWeight: 'normal',
  },
);
</script>
