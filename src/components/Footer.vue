<template lang="pug">
footer.bg-light.py-4.py-md-5.mt-auto.border-top
  .container
    .row.gy-4.justify-content-between
      .col-lg-4.col-md-5
        .d-flex
          .brand-icon
            img.brand-logo(
              alt="Brand Logo",
              :src="BrandIcon",
            )
          div
            h5.fw-bold.mb-2 Salzburger Marionettentheater
            p.mb-1 Schwarzstraße 24
            p.mb-1 5020 Salzburg
            p.mb-2
              a.link-secondary.text-decoration-none(href="tel:+43662872406")
                | +43 / 662 / 87 24 06
            p.mb-3
              a.link-secondary.text-decoration-none(href="mailto:info@marionetten.at")
                | info@marionetten.at
            div
              a.link-secondary.fs-5.me-2(href="#", aria-label="Facebook")
                i.bi.bi-facebook
              a.link-secondary.fs-5(href="#", aria-label="Instagram")
                i.bi.bi-instagram

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
        .d-flex.align-items-center.mb-3
        p.small.mb-1.fw-bold United Nations Educational, Scientific and Cultural Organization
        p.small.mb-1 Österreichische UNESCO - Kommission
        p.small.mb-1 Immaterielles Kulturerbe / Nationales Verzeichnis
        p.small Spielpraxis des Salzburger Marionettentheaters anerkannt 2016

</template>

<script setup>
import BrandIcon from '@/assets/imgs/brand.png';
</script>


<style scoped>
footer {
  font-size: 0.875rem;
  background-color: #f8f9fa;
}

a.link-secondary {
  color: #6c757d;
  transition: color 0.2s ease-in-out;
}

a.link-secondary:hover {
  color: #343a40;
  text-decoration: underline !important;
}

@media (min-width: 992px) {
  .border-start-lg {
    border-left: 1px solid #dee2e6 !important;
  }
}

h5, h6 {
  color: #212529;
}

p {
  color: #495057;
}

.bi {
  vertical-align: -0.125em;
}
</style>
