<template>
  <v-layout class="position-relative">
    <cart-drawer />
    <app-nav-bar />
    <fixed-nav />
    <v-main style="margin-top: 138px">
      <slot></slot>
    </v-main>
    <app-footer />
  </v-layout>
</template>
<script>
import CartDrawer from "@/components/global/CartDrawer.vue";
import AppNavBar from "@/components/global/AppNavBar.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import FixedNav from "./FixedNav.vue";
export default {
  components: {
    CartDrawer,
    AppNavBar,
    AppFooter,
    FixedNav,
  },
  data: () => {
    return {
      drawer: false,
    };
  },
};
</script>
