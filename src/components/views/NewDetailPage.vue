<template lang="pug">
BasicLayout
  Hero(img="https://marionetten.at/assets/transforms/imager/images/12050387/GvS-Die-Prinzessin_W1200_H1200_f9d35c2e75cded6d5435415681c0a155.webp")

  .p-5
    Heading(
      title="Die Geschichte vom Soldaten",
      :style="{ marginTop: '6rem', marginBottom: '3rem' }",
    )

    div(:style="{ maxWidth: '600px', margin: '0 auto' }")
      p to be read, played and danced (2 parts; 1918)
      p Text: Ferdinand Ramuz
      p In the German adaptation by: Hans Reinhart

      .content-section
        p Puppets and décor: Georg Baselitz

      .content-section
        p A co-production with the Salzburg Festival

      p.mt-5.normal-font
        | The story of a deserting soldier, the Devil, a violin and a princess comes from the world of Russian fairy tales. When the Devil is involved, the story rarely ends well — and this tale is no exception. The original scenic concept, inspired in both aesthetic and practical terms by travelling fairs and theatre troupes, brings to mind images of street balladeers. The world premiere of L’Histoire du soldat in 1918 in Lausanne was not only an important moment in the history of 20th-century Swiss theatre, but also cemented the work’s status as a landmark of musical modernism. Of course, Stravinsky had already been recognized as a figure to be reckoned with soon after the turn of the century, when the May 1913 premiere of his ballet Le Sacre du printemps provoked a succès de scandale in Paris. In German with English explanations
</template>

<script setup lang="ts">
import {
  BasicLayout,
  Hero,
  Heading,
} from '@/components';
</script>
