<template>
  <div class="flash-sale py-16 px-3">
    <div class="title mb-5 px-6 d-flex align-center justify-space-between">
      <h2 class="text-red-darken-2">Flash Sale</h2>
      <a href="#" class="text-black"> Shope All</a>
    </div>
    <Swiper
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
      :slides-per-view="4"
      :space-between="35"
      :autoplay="{ delay: 3000 }"
      class="pb-16 pl-6 pr-6"
      :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
    >
      <SwiperSlide class="mx-5" v-for="product in flashSale" :key="product.id">
        <flash-sale-item :product="product" :key="product.id" />
      </SwiperSlide>
      <div class="swiper-prev"></div>
      <div class="swiper-next"></div>
      <div class="swiper-pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import FlashSaleItem from "./FlashSaleItem.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
import { productsModule } from "@/store/pinia/products";
import { mapState } from "pinia";
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
  computed: {
    ...mapState(productsModule, ["flashSale"]),
  },
  mounted() {
    console.log(this.products);
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
