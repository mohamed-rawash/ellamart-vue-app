<template>
  <div class="prdoducts-categories">
    <h2>{{ this.$route.params.title }}</h2>
    <v-container v-if="this.categoryProducts.length === 0">
      <v-row class="d-felx justify-center">
        <v-col
          class="text-center"
          sm="12"
          md="6"
          lg="4"
          v-for="i in 5"
          :key="i"
        >
          <VSkeletonLoader type="image, article"></VSkeletonLoader>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <v-row>
        <v-col
          class="d-felx justify-center"
          sm="12"
          md="6"
          lg="4"
          v-for="product in categoryProducts"
          :key="product.id"
        >
          <section class="product">
            <FlashSaleItem :product="product" />
          </section>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import FlashSaleItem from "@/components/home/FlashSaleItem.vue";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
import { productsModule } from "../store/pinia/products";
import { mapActions, mapState } from "pinia";
export default {
  components: {
    FlashSaleItem,
    VSkeletonLoader,
  },
  computed: {
    ...mapState(productsModule, ["categoryProducts"]),
  },
  methods: {
    ...mapActions(productsModule, ["getProductsByCategory"]),
  },
  watch: {
    $route() {
      this.getProductsByCategory(this.$route.params.category);
    },
  },
  async mounted() {
    await this.getProductsByCategory(this.$route.params.category);
  },
};
</script>

<style lang="scss">
.prdoducts-categories {
  h2 {
    font-weight: 700;
    font-size: 1.6rem;
    text-align: center;
  }
  .product {
    width: fit-content;
    margin-left: 50%;
    transform: translateX(-50%);
  }
}
</style>
