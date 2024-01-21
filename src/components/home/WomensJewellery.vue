<template>
  <div class="top-fragrances">
    <div class="title mb-5 px-6 d-flex align-center justify-space-between">
      <h2 class="text-black">Womens Jewellery</h2>
      <a href="#" class="text-black"> Shope All</a>
    </div>
    <v-container fluid v-if="womensJewellery.length === 0">
      <v-row>
        <v-col v-for="i in 5" :key="i">
          <VSkeletonLoader type="image, article"></VSkeletonLoader>
        </v-col>
      </v-row>
    </v-container>
    <SwiperLayout v-else :products="this.womensJewellery"></SwiperLayout>
  </div>
</template>

<script>
import { mapState } from "pinia";
import SwiperLayout from "../global/SwiperLayout.vue";
import { productsModule } from "@/store/pinia/products";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
export default {
  components: {
    SwiperLayout,
    VSkeletonLoader,
  },
  computed: {
    ...mapState(productsModule, ["womensJewellery"]),
  },
};
</script>

<style lang="scss" scoped>
.top-fragrances {
  padding: 30px 5px;
}
</style>
