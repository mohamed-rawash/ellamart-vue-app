<template>
  <app-layout>
    <router-view />
  </app-layout>
  <quick-view />
</template>
<script>
import QuickView from "@/components/home/QuickView.vue";

import AppLayout from "@/components/global/AppLayout.vue";
export default {
  components: {
    AppLayout,
    QuickView,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
