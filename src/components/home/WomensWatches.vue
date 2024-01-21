<template>
  <div class="top-fragrances">
    <div class="title mb-5 px-6 d-flex align-center justify-space-between">
      <h2 class="text-red">Womens Watches</h2>
      <a href="#" class="text-red"> Shope All</a>
    </div>
    <v-container fluid v-if="womensWatches.length === 0">
      <v-row>
        <v-col v-for="i in 5" :key="i">
          <VSkeletonLoader type="image, article"></VSkeletonLoader>
        </v-col>
      </v-row>
    </v-container>
    <SwiperLayout v-else :products="this.womensWatches"></SwiperLayout>
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
    ...mapState(productsModule, ["womensWatches"]),
  },
};
</script>

<style lang="scss" scoped>
.top-fragrances {
  padding: 30px 5px;
}
</style>
