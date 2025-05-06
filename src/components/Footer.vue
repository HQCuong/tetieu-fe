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
            h5.fw-bold.mb-2 Rối Tế Tiêu
            p.mb-1 2 Đại Nghĩa
            p.mb-1 TT.Đại Nghĩa, Mỹ Đức, Hà Nội
            p.mb-2
              a.link-secondary.text-decoration-none(href="tel:+43662872406")
                | +84 961 580 259
            p.mb-3
              a.link-secondary.text-decoration-none(href="mailto:info@marionetten.at")
                | roitetieu@gmail.com

      .col-lg-auto.col-md-3.ps-lg-4.border-start-lg
        h6.mb-3 Links
        ul.list-unstyled.mb-0
          li.mb-2
            a.link-secondary.text-decoration-none(
              href="https://www.facebook.com/roitetieu",
              target="_blank",
            ) Facebook
          li.mb-2
            a.link-secondary.text-decoration-none(
              href="https://www.instagram.com/roitetieu",
              target="_blank",
            ) Instagram
          //- li.mb-2
          //-   a.link-secondary.text-decoration-none(href="#") Terms of Use
          //- li.mb-2
          //-   a.link-secondary.text-decoration-none(href="#") Termination Policy

      .col-lg-4.col-md-4.ps-lg-4.border-start-lg
        p.small.mb-1.fw-bold Khu Bảo Tồn Rối Tế Tiêu
        p.small.mb-1 Di Sản Văn Hóa Phi Vật Thể
        p.small.mb-1 Liên Hiệp Các Hội Unesco Việt Nam
        p.small Nghệ nhân ưu tú Phạm Công Bằng

</template>

<script setup lang="ts">
import BrandIcon from '@/assets/imgs/brand.png';
</script>
