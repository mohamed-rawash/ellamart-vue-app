<template>
  <div class="home">
    <upper-banner />
    <features-list />
    <top-offers />
    <flash-sale-section :products="flashSale" />
  </div>
</template>

<script>
import UpperBanner from "@/components/home/UpperBanner";
import FeaturesList from "@/components/home/FeaturesList";
import TopOffers from "@/components/home/TopOffers";
import FlashSaleSection from "@/components/home/FlashSaleSection.vue";
import { mapState, mapActions } from "pinia";
import { productsModule } from "@/store/pinia/products";
export default {
  name: "HomeView",
  components: {
    UpperBanner,
    FeaturesList,
    TopOffers,
    FlashSaleSection,
  },
  computed: {
    ...mapState(productsModule, ["flashSale"]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  mounted() {
    this.getProducts();
  },
};
</script>
