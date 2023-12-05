<template>
  <v-container fluid>
    <v-row class="row">
      <v-col sm="12" md="12" lg="6">
        <img
          class="w-100"
          src="../../assets/images/band-left-cover.webp"
          alt=""
        />
      </v-col>
      <v-col sm="12" md="12" lg="6">
        <img
          class="w-100"
          src="../../assets/images/band-right-cover.webp"
          alt=""
        />
      </v-col>
    </v-row>
  </v-container>
  <div class="top-fragrances">
    <div class="title mb-5 px-6 d-flex align-center justify-space-between">
      <h2 class="text-black">Top Fragrances</h2>
      <a href="#" class="text-black"> Shope All</a>
    </div>
    <v-container fluid v-if="fragrances.length === 0">
      <v-row>
        <v-col v-for="i in 5" :key="i">
          <VSkeletonLoader type="image, article"></VSkeletonLoader>
        </v-col>
      </v-row>
    </v-container>
    <SwiperLayout v-else :products="this.fragrances"></SwiperLayout>
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
    ...mapState(productsModule, ["fragrances"]),
  },
};
</script>

<style lang="scss" scoped>
.top-fragrances {
  padding: 30px 5px;
}
</style>
