<template>
  <div class="top-mobile-phones">
    <div class="title mb-5 px-6 d-flex align-center justify-space-between">
      <h2 class="text-red-darken-2">Top Mobile Phones</h2>
      <a href="#" class="text-black"> Shope All</a>
    </div>
    <SwiperLayout :products="this.phones"></SwiperLayout>
  </div>
</template>

<script>
import { mapState } from "pinia";
import SwiperLayout from "../global/SwiperLayout.vue";
import { productsModule } from "@/store/pinia/products";
export default {
  components: {
    SwiperLayout,
  },
  computed: {
    ...mapState(productsModule, ["phones"]),
  },
};
</script>

<style lang="scss" scoped>
.top-mobile-phones {
  padding: 30px 5px;
}
</style>
