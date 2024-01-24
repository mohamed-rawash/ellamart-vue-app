<template>
  <v-layout class="position-relative">
    <cart-drawer v-if="$route.name != 'checkout'" />
    <app-nav-bar v-if="$route.name != 'checkout'" />
    <fixed-nav v-if="$route.name != 'checkout'" />
    <v-main
      style="`${$route.name != 'checkout'? margin-top: 0:margin-top: 138px}`"
    >
      <slot></slot>
    </v-main>
    <app-footer v-if="$route.name != 'checkout'" />
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
