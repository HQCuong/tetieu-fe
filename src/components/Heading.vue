<template lang="pug">
.big-heading
  .container
    .row
      .col-12.text-center
        p.text-danger(:style="{ fontSize, fontWeight }") {{ title }}
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
    fontSize: '2.5rem',
    fontWeight: 'normal',
  },
);
</script>
