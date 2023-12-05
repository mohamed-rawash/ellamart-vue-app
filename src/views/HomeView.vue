<template>
  <div class="home">
    <upper-banner />
    <features-list />
    <top-offers />
    <flash-sale-section :products="flashSale" />
    <top-categories />
    <new-products :products="laptops" />
    <quality-feature />
    <top-mobile-phones />
    <top-fragrances />
    <why-shop-with-us />
  </div>
</template>

<script>
import WhyShopWithUs from "../components/home/WhyShopWithUs.vue";
import TopFragrances from "@/components/home/TopFragrances.vue";
import TopMobilePhones from "@/components/home/TopMobilePhones.vue";
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
    TopMobilePhones,
    TopFragrances,
    WhyShopWithUs,
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
