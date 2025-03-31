<template lang="pug">
section.hero
  img.hero-bg(
    src="https://marionetten.at/assets/transforms/imager/images/2049402/smt2021_sommernachtstraum_georgeye-526_W2400_4e57d52f89dc62001fa3deff5aab68af.webp",
    alt="Người nông dân",
  )
  template(v-if="showContent")
    .overlay
    .hero-content
      h3.lead
        | Tác giả

      h1.text-uppercase.fw-bold.birthstone-font
        | Tế tiêu show
</template>

<script setup lang="ts">
interface Props {
  showContent?: boolean;
  img: string;
  lead?: string;
  title?: string;
}

defineProps<Props>();
</script>
