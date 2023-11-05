<template>
  <div class="home">
    <upper-banner />
    <features-list />
    <top-offers />
  </div>
</template>

<script>
import UpperBanner from "@/components/home/UpperBanner";
import FeaturesList from "@/components/home/FeaturesList";
import TopOffers from "@/components/home/TopOffers";
export default {
  name: "HomeView",
  components: {
    UpperBanner,
    FeaturesList,
    TopOffers,
  },
};
</script>
