<template>
  <div class="flash-sale">
    <v-container fluid>
      <h1>Text</h1>
      <v-row>
        <v-col v-for="product in flashSale" :key="product.id" cols="3">
          <flash-sale-item :product="product" :key="product.id" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import FlashSaleItem from "./FlashSaleItem.vue";
import { productsModule } from "@/store/pinia/products";
import { mapState } from "pinia";
export default {
  components: {
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

<style lang="scss" scoped></style>
