<template>
  <Swiper
    :pagination="{ el: '.swiper-pagination', clickable: true }"
    :modules="modules"
    :breakpoints="{
      300: { slidesPerView: 1 },
      600: { slidesPerView: 3 },
      900: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
    }"
    :space-between="35"
    :autoplay="{ delay: 3000 }"
    class="pb-16 pl-6 pr-6"
    :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
  >
    <SwiperSlide class="mx-5" v-for="product in products" :key="product.id">
      <flash-sale-item :product="product" />
    </SwiperSlide>
    <div class="swiper-prev"></div>
    <div class="swiper-next"></div>
    <div class="swiper-pagination"></div>
  </Swiper>
</template>
<script>
import FlashSaleItem from "../home/FlashSaleItem.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
export default {
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    FlashSaleItem,
  },
  props: {
    products: {
      type: Array,
    },
  },
};
</script>
<style lang="scss">
.swiper {
  .swiper-button-next,
  .swiper-button-prev {
    width: 35px;
    height: 35px;
    border: 2px solid rgb(95, 95, 95);
    border-radius: 50%;
    background-color: white;
    &::after {
      font-size: 14px;
      font-weight: 900;
      color: black;
      padding: 0;
      display: grid;
      place-content: center;
    }
  }
  .swiper-pagination-bullet {
    width: 14px;
    height: 14px;
    background-color: transparent;
    border: 1px solid #007aff;
  }
  .swiper-pagination-bullet-active {
    background-color: #007aff;
  }
}
</style>
