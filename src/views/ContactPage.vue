<template lang="pug">
BasicLayout
  Hero(:img="contactBanner")

  .contact-page.mx-auto.py-5
    h6.fw-bold Địa chỉ:
    p.mb-1
      a.link-dark.text-decoration-none(:href="`tel:${CONTACT.phone}`")
        | Điện thoại: {{ CONTACT.phoneDisplay }}
    p.mb-1
      a.link-dark.text-decoration-none(:href="`mailto:${CONTACT.email}`")
        | Email: {{ CONTACT.email }}
    p.mb-1 2 Đại Nghĩa
    p.mb-1 TT.Đại Nghĩa, Mỹ Đức, Hà Nội

    .mt-5
      h6.d-inline.fw-bold Giờ mở cửa:
      span  Hiện tại, khu bảo tồn Rối Tế Tiêu đang trong quá trình hoàn thiện.
        |  Chúng tôi đón tiếp khách tham quan và các đoàn sinh viên, học sinh theo lịch hẹn trước.
        |  Xin quý khách vui lòng liên hệ với chúng tôi để được hỗ trợ đặt lịch.

    .mt-5
      h6.d-inline.fw-bold Cách đến khu bảo tồn bằng phương tiện công cộng tại Hà Nội:
      span  bắt tuyến xe buýt 103A tại bến xe Mỹ Đình hoặc bất cứ xe 103A nào gần bến xe nơi bạn đang đứng nhất.
        | Điểm dừng sẽ là Nghĩa trang liệt sỹ huyện Mỹ Đức đối diện khu bảo tồn.
        | (Ngay cạnh khu bảo tồn có bãi đỗ xe rộng dành cho oto)

    .mt-5
      iframe.contact-map(
        :src="MAP_EMBED_URL",
        loading="lazy",
        referrerpolicy="no-referrer-when-downgrade",
      )
</template>

<script setup lang="ts">
import { BasicLayout } from '@/layouts';
import { Hero } from '@/components';
import contactBanner from '@/assets/images/contact-banner.jpg';

const CONTACT = {
  phone: '+84961580259',
  phoneDisplay: '+84 961 580 259',
  email: 'roitetieu@gmail.com',
} as const;

const MAP_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59722.21041175528!2d105.7022344!3d20.6842954!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31343500503229a1%3A0xa4da1487ed6a023f!2zUGjGsOG7nW5nIFLhu5FpIFThur8gVGnDqnU!5e0!3m2!1svi!2s!4v1746100224492!5m2!1svi!2s';
</script>

<style scoped lang="scss">
.contact-page { max-width: 700px; }

.contact-map {
  width: 600px;
  max-width: 100%;
  height: 450px;
  border: 0;
}
</style>
