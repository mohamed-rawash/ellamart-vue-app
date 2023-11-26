<template>
  <div class="home">
    <upper-banner />
    <features-list />
    <top-offers />
    <flash-sale-section :products="flashSale" />
    <top-categories />
    <new-products :products="laptops" />
    <quality-feature />
  </div>
</template>

<script>
import QualityFeature from "@/components/home/QualityFeature.vue";
import NewProducts from "@/components/home/NewProducts.vue";
import TopCategories from "@/components/home/TopCategories.vue";
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
    TopCategories,
    NewProducts,
    QualityFeature,
  },
  computed: {
    ...mapState(productsModule, ["flashSale", "laptops"]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  mounted() {
    this.getProducts();
  },
};
</script>
