<template>
  <div class="cart-drawer">
    <v-navigation-drawer
      width="370"
      v-model="drawer"
      class="pa-3"
      location="right"
      temporary
    >
      <section class="cart-title">
        <h2>Shopping Cart</h2>
        <v-btn
          variant="plain"
          color="red"
          class="cart-close-btn"
          @click="this.drawer = false"
          ><v-icon class="cart-close-btn-icon">mdi-close</v-icon></v-btn
        >
      </section>
      <section class="cart-body">
        <p class="cart-body-text">{{ cartItems.length }} Items</p>
        <p v-if="cartItems.length === 0" class="cart-body-text">
          Free shipping for all orders over 800 $
        </p>
        <p v-if="cartItems.length === 0" class="cart-empty-hint">
          Your cart is empty
        </p>
        <div class="free-shipping-progress">
          <font-awesome-icon :icon="['fas', 'truck-fast']" />
          <v-progress-linear
            color="red"
            height="10"
            model-value="60"
            striped
            class="progress-bar"
          ></v-progress-linear>
        </div>
      </section>
      <section class="cart-action">
        <v-btn
          variant="outlined"
          class="text-capitalize w-100 mt-5 cart-action-btn"
        >
          Containue Shipping
        </v-btn>
      </section>
    </v-navigation-drawer>
  </div>
</template>
<script>
import cartStore from "@/store/pinia/cart";
import { mapState, mapActions } from "pinia";
export default {
  inject: ["emitter"],
  data: () => ({
    drawer: true,
  }),
  computed: {
    ...mapState(cartStore, ["cartItems"]),
  },
  methods: {
    ...mapActions(cartStore, ["deleteItemFromCart"]),
  },
  mounted() {
    this.emitter.on("openCart", () => {
      this.drawer = !this.drawer;
    });
  },
};
</script>
<style lang="scss">
.cart-drawer {
  width: 370px;
  .cart-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding: 5px 2px;
    h3 {
      font-size: 1rem;
      font-weight: 400;
    }
    .cart-close-btn {
      & .cart-close-btn-icon {
        font-size: 25px;
      }
    }
  }
  .cart-body {
    .cart-body-text {
      margin: -5px 10px 10px 20px;
      color: #6f6f6f;
    }
    .cart-empty-hint {
      margin-top: 40px;
      margin-bottom: 10px;
      text-align: center;
      color: #6f6f6f;
    }
    .free-shipping-progress {
      position: relative;
      margin-top: 20px;
      padding: 0 20px;
      & .fa-truck-fast {
        position: absolute;
        left: 55%;
        bottom: 100%;
        color: red;
      }
      & .progress-bar {
        border-radius: 10px;
      }
    }
  }
  .cart-action {
    padding: 0 10px;
    & .cart-action-btn {
      border: 1px solid black;
      border-radius: 20px;
      color: black;
    }
  }
}
</style>
