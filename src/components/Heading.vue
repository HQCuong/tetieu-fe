<template lang="pug">
.big-heading
  .container
    .row
      .col-12.p-0
        p.font-heading.text-danger(:style="headingStyle") {{ title }}
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  title: string;
  fontSize?: string;
  fontWeight?: string;
}

const props = withDefaults(defineProps<Props>(), {
  fontSize: '60px',
  fontWeight: 'normal',
});

const headingStyle = computed(() => ({
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
}));
</script>
