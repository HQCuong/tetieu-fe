<template lang="pug">
footer.py-4.py-md-5.mt-auto.border-top
  .container
    .row.gy-4.justify-content-between
      .col-lg-4.col-md-5
        .d-flex
          .brand-icon
            img.brand-logo(
              alt="Brand Logo",
              :src="BrandIcon",
            )
          .ms-3
            h5.fw-bold.mb-2 Salzburger Marionettentheater
            p.mb-1 Schwarzstraße 24
            p.mb-1 5020 Salzburg
            p.mb-2
              a.link-secondary.text-decoration-none(href="tel:+43662872406")
                | +43 / 662 / 87 24 06
            p.mb-3
              a.link-secondary.text-decoration-none(href="mailto:info@marionetten.at")
                | info@marionetten.at

      .col-lg-auto.col-md-3.ps-lg-4.border-start-lg
        h6.mb-3 Links
        ul.list-unstyled.mb-0
          li.mb-2
            a.link-secondary.text-decoration-none(href="#") Imprint
          li.mb-2
            a.link-secondary.text-decoration-none(href="#") Privacy Policy
          li.mb-2
            a.link-secondary.text-decoration-none(href="#") Terms of Use
          li.mb-2
            a.link-secondary.text-decoration-none(href="#") Termination Policy

      .col-lg-4.col-md-4.ps-lg-4.border-start-lg
        p.small.mb-1.fw-bold United Nations Educational, Scientific and Cultural Organization
        p.small.mb-1 Österreichische UNESCO - Kommission
        p.small.mb-1 Immaterielles Kulturerbe / Nationales Verzeichnis
        p.small Spielpraxis des Salzburger Marionettentheaters anerkannt 2016

</template>

<script setup lang="ts">
import BrandIcon from '@/assets/imgs/brand.png';
</script>
