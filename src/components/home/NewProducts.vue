<template>
  <div class="new-products">
    <div class="title mb-5 px-6 d-flex align-center justify-space-between">
      <h2 class="text-red-darken-2">New Products</h2>
      <a href="#" class="text-black"> Shope All</a>
    </div>
    <v-container fluid>
      <v-row>
        <v-col md="12" lg="9">
          <SwiperLayout :products="products" />
        </v-col>
        <v-col md="12" lg="3">
          <div class="banner"></div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SwiperLayout from "../global/SwiperLayout.vue";

export default {
  props: {
    products: {
      type: Array,
    },
  },
  components: { SwiperLayout },
};
</script>
<style lang="scss" scoped>
.new-products {
  .banner {
    width: 100%;
    height: 320px;
    border-radius: 8px;
    overflow: hidden;
    transform: translateY(-30px);
    background-image: url("@/assets/images/vr-banner.webp");
    background-size: cover;
  }
}
</style>
