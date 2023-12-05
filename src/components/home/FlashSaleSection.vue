<template>
  <div class="flash-sale py-16 px-3">
    <div class="title mb-5 px-6 d-flex align-center justify-space-between">
      <h2 class="text-red-darken-2">Flash Sale</h2>
      <a href="#" class="text-black"> Shope All</a>
    </div>
    <v-container fluid v-if="products.length === 0">
      <v-row>
        <v-col v-for="i in 5" :key="i">
          <VSkeletonLoader type="image, article"></VSkeletonLoader>
        </v-col>
      </v-row>
    </v-container>
    <SwiperLayout v-else :products="products" />
  </div>
</template>

<script>
import SwiperLayout from "../global/SwiperLayout.vue";
import { productsModule } from "@/store/pinia/products";
import { mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
export default {
  components: {
    SwiperLayout,
    VSkeletonLoader,
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

<style lang="scss"></style>
