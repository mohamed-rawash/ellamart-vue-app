<template>
  <div class="cart-drawer">
    <v-navigation-drawer v-model="drawer" location="right" temporary>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
        facere laboriosam illo nam! Voluptatem nulla veniam dolore quo earum,
        sint cumque, officiis mollitia rem dignissimos dicta. Expedita labore
        quam fuga!
      </p>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  inject: ["emitter"],
  data: () => ({
    drawer: false,
  }),
  mounted() {
    this.emitter.on("openCart", () => {
      this.drawer = !this.drawer;
    });
  },
};
</script>
