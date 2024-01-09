<template>
  <div class="cart-drawer">
    <v-navigation-drawer
      width="370"
      v-model="drawer"
      class="pa-3 drawer"
      location="right"
      temporary
    >
      <header class="cart-header">
        <div class="cart-title">
          <h2>Shopping Cart</h2>
          <v-btn
            variant="plain"
            color="red"
            class="cart-close-btn"
            @click="this.drawer = false"
            ><v-icon class="cart-close-btn-icon">mdi-close</v-icon></v-btn
          >
        </div>
        <p class="cart-body-text">{{ cartItems.length }} Items</p>
        <p
          class="cart-body-text"
          v-if="cartItems.length !== 0 && 8000 - getTotalPrice > 0"
        >
          Free shipping for all orders over {{ 8000 - getTotalPrice }} $
        </p>
        <p class="cart-body-text" v-if="8000 - getTotalPrice <= 0">
          You have free shipping
        </p>
        <p v-if="cartItems.length === 0" class="cart-empty-hint">
          Your cart is empty
        </p>
        <div v-if="cartItems.length > 0" class="free-shipping-progress">
          <div
            class="truck-position"
            :style="`
            width: fit-content;
        position: absolute;
        bottom: 100%;
        color: red;
            left: calc(${parseInt(
              (getTotalPrice / 8000) * 100 > 100
                ? 100
                : (getTotalPrice / 8000) * 100
            )}% - 25px);`"
          >
            <font-awesome-icon :icon="['fas', 'truck-fast']" />
          </div>
          <v-progress-linear
            color="red"
            height="10"
            :model-value="
              parseInt((getTotalPrice / 8000) * 100) <= 100
                ? parseInt((getTotalPrice / 8000) * 100)
                : 100
            "
            striped
            class="progress-bar"
          ></v-progress-linear>
        </div>
      </header>
      <section class="cart-body">
        <div v-if="cartItems.length !== 0" class="palce-holder"></div>
        <v-container v-if="cartItems.length !== 0" class="px-0" fluid>
          <v-row v-for="item in cartItems" :key="item.id">
            <v-col cols="5">
              <img :src="item.thumbnail" alt="" class="w-100" />
            </v-col>
            <v-col cols="7">
              <h5>{{ item.title }} Sample - {{ item.category }}</h5>
              <p>Black</p>
              <p>Quantity - {{ item.quantity }}</p>
              <p>Total Price - {{ item.totalPrice }}</p>
              <v-btn
                @click="deleteItemFromCart(item.id)"
                variant="outlined"
                color="red"
                class="mt-1"
                >Delete</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
        <div class="divider"></div>
        <div class="d-flex justify-space-between mt-3">
          <span>SubTotal</span>
          <span>{{ getTotalPrice }}</span>
        </div>
        <div class="d-flex justify-space-between">
          <span>Total</span>
          <span>{{ getTotalPrice }}</span>
        </div>
      </section>
      <section class="cart-action">
        <v-btn
          v-if="cartItems.length === 0"
          variant="outlined"
          class="text-capitalize w-100 mt-5 cart-action-btn"
          @click="drawer = false"
        >
          Containue Shipping
        </v-btn>
        <v-btn v-if="cartItems.length > 0" color="blue" class="checkout"
          >Checkout</v-btn
        >
        <v-btn
          v-if="cartItems.length > 0"
          class="text-capitalize mt-2 cart-action-btn"
          >View Cart</v-btn
        >
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
    drawer: false,
  }),
  computed: {
    ...mapState(cartStore, ["cartItems"]),
    getTotalPrice() {
      let itemsTotalPrice = 0;
      this.cartItems.forEach((el) => (itemsTotalPrice += el.totalPrice));
      return itemsTotalPrice;
    },
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
  position: relative;
  .v-navigation-drawer__content {
    &::-webkit-scrollbar {
      display: none;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none;
    }
  }
  .cart-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    padding-bottom: 20px;
    z-index: 1000;
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
      & .truck-position {
        width: fit-content;
        position: absolute;
        bottom: 100%;
        color: red;
      }
      & .progress-bar {
        border-radius: 10px;
      }
    }
  }
  .cart-body {
    .palce-holder {
      height: 165px;
    }
    .divider {
      height: 2px;
      width: 80%;
      background-color: #6f6f6f;
      margin: auto;
    }
  }
  .cart-action {
    margin-top: 20px;
    padding: 0 10px;
    text-align: center;
    & .cart-action-btn {
      width: 80%;
      border: 1px solid black;
      border-radius: 20px;
      color: black;
    }
    & .checkout {
      border-radius: 16px;
      width: 80%;
      padding: 10px;
    }
  }
}
</style>
