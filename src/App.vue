<template>
  <app-layout>
    <router-view />
    <v-snackbar v-model="snack" location="left bottom" color="green"
      >{{ snackMsg }} has been added successfully
      <template v-slot:actions>
        <v-icon @click="snack = false">mdi-close</v-icon>
      </template></v-snackbar
    >
  </app-layout>
  <quick-view />
</template>
<script>
import QuickView from "@/components/home/QuickView.vue";

import AppLayout from "@/components/global/AppLayout.vue";
export default {
  inject: ["emitter"],
  components: {
    AppLayout,
    QuickView,
  },
  data: () => ({
    snack: false,
    snackMsg: "",
  }),
  mounted() {
    this.emitter.on("showMsg", (data) => {
      this.snackMsg = data;
      this.snack = true;
    });
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
