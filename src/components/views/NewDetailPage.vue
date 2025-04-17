<template lang="pug">
FullPageLoading(v-if="isLoading && !newData")
BasicLayout(v-else)
  .pb-5
    template(v-if="newData")
      Hero(:img="newData.Banner")

      .mx-auto(:style="{ maxWidth: '700px'}")
        Heading(
          :title="newData.Title",
          :style="{ marginTop: '5rem', marginBottom: '2rem' }",
        )

        .new-description(v-html="newData.Description")
        .mt-5
          .new-content(v-html="newData.Content")
</template>

<script setup lang="ts">
import {
  ref,
  onMounted,
} from 'vue';
import { useRoute } from 'vue-router';
import { newServices } from '@/services';
import {
  BasicLayout,
  Hero,
  Heading,
  FullPageLoading,
} from '@/components';

const route = useRoute();

const isLoading = ref(true);
const newData = ref<null | Record<string, any>>(null);

const getNew = async () => {
  const { id } = route.params;
  const response = await newServices.getNew(id as string);

  newData.value = response;
  isLoading.value = false;
};

onMounted(() => {
  getNew();
});
</script>
