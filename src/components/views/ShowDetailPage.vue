<template lang="pug">
  FullPageLoading(v-if="isLoading && !showData")
  BasicLayout(v-else)
    .pb-5
      template(v-if="showData")
        Hero(:img="showData.Banner")

        .mx-auto(:style="{ maxWidth: '700px'}")
          Heading(
            :title="showData.Title",
            :style="{ marginTop: '5rem', marginBottom: '2rem' }",
          )

          .show-description(v-html="showData.Description")
          .mt-5
            .show-content(v-html="showData.Content")
  </template>

  <script setup lang="ts">
  import {
    ref,
    onMounted,
  } from 'vue';
  import { useRoute } from 'vue-router';
  import { showService } from '@/services';
  import {
    BasicLayout,
    Hero,
    Heading,
    FullPageLoading,
  } from '@/components';

  const route = useRoute();

  const isLoading = ref(true);
  const showData = ref<null | Record<string, any>>(null);

  const getShow = async () => {
    const { id } = route.params;
    const response = await showService.getShow(id as string);

    showData.value = response;
    isLoading.value = false;
  };

  onMounted(() => {
    getShow();
  });
  </script>
