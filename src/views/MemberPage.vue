<template lang="pug">
BasicLayout
  Hero(:img="infoBanner")

  .our-team.py-5
    .container
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          h2.fw-bold.text-uppercase.our-team__title RỐI TẾ TIÊU
          p.text-muted.our-team__intro {{ INTRO }}

        .col-lg-8
          .row.g-2.g-md-3
            .col-6.col-sm-3(
              v-for="member in members",
              :key="member.id",
            )
              img.img-fluid.w-100.team-member-image(
                :src="member.image",
                :alt="`Team member ${member.id}`",
              )
</template>

<script setup lang="ts">
import { BasicLayout } from '@/layouts';
import { Hero } from '@/components';
import infoBanner from '@/assets/images/info-banner.jpg';
import member1 from '@/assets/images/member-1.jpg';
import member2 from '@/assets/images/member-2.jpg';
import member3 from '@/assets/images/member-3.jpg';
import member4 from '@/assets/images/member-4.jpg';
import member5 from '@/assets/images/member-5.jpg';
import member6 from '@/assets/images/member-6.jpg';
import member7 from '@/assets/images/member-7.jpg';
import member8 from '@/assets/images/member-8.jpg';

const INTRO = 'Phường Rối Tế Tiêu là nơi hội tụ những nghệ nhân tài hoa và người trẻ đam mê giữ gìn một di sản văn hóa, nghệ thuật múa rối cạn truyền thống. Mỗi thành viên đều mang trong mình một câu chuyện riêng: có người nối tiếp nghề tổ truyền qua nhiều thế hệ, có người tìm đến với rối như một mối duyên lành không hẹn trước. Họ là những người thợ mộc khéo tay, nghệ sĩ biểu diễn tận tụy, người truyền lửa cho thế hệ sau. Tại đây, chúng tôi mong muốn giới thiệu tới bạn đọc những người đứng sau mỗi tích trò, mỗi con rối, mỗi buổi biểu diễn đầy cảm xúc. Hiện một số nghệ nhân và thành viên vẫn đang tiếp tục cập nhật thông tin cá nhân và hình ảnh, nội dung sẽ được hoàn thiện dần trong thời gian tới để bạn có thể hiểu rõ hơn về phường rối – một tập thể đang cùng nhau gìn giữ và lan tỏa tinh hoa văn hóa dân gian Việt Nam.';

const members = [
  { id: 1, image: member1 },
  { id: 2, image: member2 },
  { id: 3, image: member3 },
  { id: 4, image: member4 },
  { id: 5, image: member5 },
  { id: 6, image: member6 },
  { id: 7, image: member7 },
  { id: 8, image: member8 },
];
</script>

<style scoped lang="scss">
@import '@/scss/common/variables';

.our-team {
  background-color: $color-bg-subtle;

  &__title { margin-bottom: 1.5rem; }

  &__intro {
    font-size: 0.95rem;
    line-height: 1.6;
  }
}

.team-member-image {
  display: block;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border: 2px solid $color-white;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: scale(1.05);
    opacity: 0.85;
    z-index: 10;
    position: relative;
  }
}
</style>
