<!-- eslint-disable @stylistic/js/max-len -->
<template lang="pug">
BasicLayout
  Hero(:img="InfoBanner")

  .our-team-component.py-5
    .container
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          h2.fw-bold.text-uppercase RỐI TẾ TIÊU
          p.text-muted
            | Phường Rối Tế Tiêu là nơi hội tụ những nghệ nhân tài hoa và người trẻ đam mê giữ gìn một di sản văn hóa, nghệ thuật múa rối cạn truyền thống. Mỗi thành viên đều mang trong mình một câu chuyện riêng: có người nối tiếp nghề tổ truyền qua nhiều thế hệ, có người tìm đến với rối như một mối duyên lành không hẹn trước. Họ là những người thợ mộc khéo tay, nghệ sĩ biểu diễn tận tụy, người truyền lửa cho thế hệ sau. Tại đây, chúng tôi mong muốn giới thiệu tới bạn đọc những người đứng sau mỗi tích trò, mỗi con rối, mỗi buổi biểu diễn đầy cảm xúc. Hiện một số nghệ nhân và thành viên vẫn đang tiếp tục cập nhật thông tin cá nhân và hình ảnh, nội dung sẽ được hoàn thiện dần trong thời gian tới để bạn có thể hiểu rõ hơn về phường rối – một tập thể đang cùng nhau gìn giữ và lan tỏa tinh hoa văn hóa dân gian Việt Nam.
        .col-lg-8
          .row.g-2.g-md-3
            .col-6.col-sm-3(
              v-for="member in topRowMembers",
              :key="'top-' + member.id",
            )
              img.img-fluid.w-100.team-member-image(
                :src="member.imageUrl",
                :alt="'Team Member ' + member.id",
              )
            .col-6.col-sm-3(
              v-for="member in bottomRowMembers",
              :key="'bottom-' + member.id",
            )
              img.img-fluid.w-100.team-member-image(
                :src="member.imageUrl",
                :alt="'Team Member ' + member.id",
              )
</template>

<script setup lang="ts">
import {
  ref,
  computed,
} from 'vue';
import {
  BasicLayout,
  Hero,
} from '@/components';
import InfoBanner from '@/assets/imgs/info-banner.jpg';
import FirstMember from '@/assets/imgs/member-1.jpg';
import SecondMember from '@/assets/imgs/member-2.jpg';
import ThirdMember from '@/assets/imgs/member-3.jpg';
import FourthMember from '@/assets/imgs/member-4.jpg';
import FifthMember from '@/assets/imgs/member-5.jpg';
import SixthMember from '@/assets/imgs/member-6.jpg';
import SeventhMember from '@/assets/imgs/member-7.jpg';
import EighthMember from '@/assets/imgs/member-8.jpg';

interface TeamMember {
  id: number;
  imageUrl: string;
}

const teamMembers = ref<TeamMember[]>([
  {
    id: 1,
    imageUrl: FirstMember,
  },
  {
    id: 2,
    imageUrl: SecondMember,
  },
  {
    id: 3,
    imageUrl: ThirdMember,
  },
  {
    id: 4,
    imageUrl: FourthMember,
  },
  {
    id: 5,
    imageUrl: FifthMember,
  },
  {
    id: 6,
    imageUrl: SixthMember,
  },
  {
    id: 7,
    imageUrl: SeventhMember,
  },
  {
    id: 8,
    imageUrl: EighthMember,
  },
]);

const topRowMembers = computed(() => teamMembers.value.slice(0, 4));
const bottomRowMembers = computed(() => teamMembers.value.slice(4, 8));

</script>

<style scoped lang="scss">
.our-team-component {
  background-color: #f8f9fa;
}

h2.fw-bold {
  margin-bottom: 1.5rem;
}

p.text-muted {
  font-size: 0.95rem;
  line-height: 1.6;
}

.team-member-image {
  display: block;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border: 2px solid white;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: scale(1.05);
    opacity: 0.85;
    z-index: 10;
    position: relative;
  }
}
</style>
