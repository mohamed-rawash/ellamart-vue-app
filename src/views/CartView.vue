<template>
  <div class="cart-view">
    <v-container fluid class="">
      <v-row class="cart-view-header">
        <v-col cols="12">
          <v-breadcrumbs :items="['Home', 'Your Cart']">
            <template #divider>
              <v-icon color="#E4E4E4">mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
          <div class="cart-title">
            <h2>Your Cart</h2>
          </div>
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
                : (getTotalPrice / 8000) * 100 < 0
                ? 0
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
          <p
            class="cart-body-text"
            v-if="cartItems.length !== 0 && 8000 - getTotalPrice > 0"
          >
            Free shipping for all orders over {{ 8000 - getTotalPrice }} $
          </p>
          <p class="cart-body-text" v-if="8000 - getTotalPrice <= 0">
            You have free shipping
          </p>
        </v-col>
      </v-row>
      <v-row class="cart-view-content" v-if="cartItems.length > 0">
        <v-col cols="9">
          <div class="header" v-if="cartItems.length > 0">
            <h4>Product</h4>
            <h4>Price</h4>
            <h4>Quantity</h4>
            <h4>Total</h4>
          </div>
          <div class="product" v-for="item in cartItems" :key="item.id">
            <div class="details">
              <v-row class="d-flex align-center">
                <v-col cols="4" class="pa-0">
                  <img :src="item.thumbnail" alt="" class="w-100" />
                </v-col>
                <v-col cols="8">
                  <h3>{{ item.title }} Sample - {{ item.category }}</h3>
                </v-col>
              </v-row>
            </div>
            <div class="price">
              {{ item.price }}
            </div>
            <div class="quantity">
              {{ item.quantity }}
            </div>
            <div class="total">
              <span>{{ item.totalPrice }}</span>
              <v-btn
                @click="deleteItemFromCart(item.id)"
                variant="plain"
                color="red"
              >
                <font-awesome-icon :icon="['fas', 'trash-can']" size="xl"
              /></v-btn>
            </div>
          </div>
          <div class="footer">
            <div class="secure">
              <font-awesome-icon
                :icon="['fas', 'shield']"
                size="2xl"
                style="color: #63e6be"
                class="icon"
              />
              <span>Secure Shopping Guarantee</span>
            </div>
            <div class="payments-banner">
              <img src="../assets/images/cart-page-cards.webp" alt="" />
            </div>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="order-summary">
            <h2 class="title">Order Summary</h2>
            <div class="divider divider-bold-black"></div>
            <div class="sub-total">
              <span>Subtotal</span>
              <span>{{ getTotalPrice }} $</span>
            </div>
            <div class="divider divider-thin-grey"></div>
            <h4>Get Shipping Estimate:</h4>
            <select name="countery" class="select">
              <option
                v-for="country in countries"
                :key="country"
                :value="country"
              >
                {{ country }}
              </option>
            </select>
            <div class="state">
              <select name="countery" class="select">
                <option v-for="state in states" :key="state" :value="state">
                  {{ state }}
                </option>
              </select>
              <input type="text" class="select" placeholder="Post Code" />
            </div>
            <v-btn
              elevation="0"
              color="blue"
              class="text-capitalize w-100 calc-shipping"
              >Calculate Shipping</v-btn
            >
            <div class="coupon">
              <h4>Coupon code</h4>
              <input type="text" class="select" placeholder="Coupon code" />
              <p class="text-body-2">
                Coupon code will be applied on the checkout page
              </p>
            </div>
            <div class="divider divider-thin-grey"></div>
            <div class="sub-total">
              <span>Total</span>
              <span>{{ getTotalPrice }} $</span>
            </div>
            <v-btn
              color="blue"
              elevation="0"
              class="text-capitalize w-100 action-btn btn-blue"
              @click="toCheckout"
              >Proceed To Checkout</v-btn
            >
            <v-btn
              color="#eee"
              elevation="0"
              class="text-capitalize w-100 action-btn btn-grey"
              @click="$router.push({ name: 'home' })"
              >Containue Shopping</v-btn
            >
          </div>
        </v-col>
      </v-row>
      <div class="cart-view-content">
        <div class="empty-cart" v-if="cartItems.length === 0">
          <font-awesome-icon
            :icon="['far', 'face-sad-tear']"
            fade
            size="2xl"
            style="color: #ffd43b"
            class="icon"
          />
          <span>Your Cart is empty</span>
          <v-btn
            @click="$router.push({ name: 'home' })"
            color="amber"
            class="w-50 mt-5"
            >Containue Shopping</v-btn
          >
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import cartStore from "@/store/pinia/cart";
import { mapState, mapActions } from "pinia";
export default {
  data: () => ({
    countries: ["Egypt", "Sudan", "Algeria", "Saudi Arabia", "Syria", "Jordan"],
    states: ["Cairo", "Alex", "Luxor", "Aswan"],
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
    ...mapActions(cartStore, ["deleteItemFromCart", "setToLocalStorage"]),
    toCheckout() {
      this.setToLocalStorage();
      this.$router.push({ name: "checkout" });
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-view {
  position: relative;

  .cart-view-header {
    .free-shipping-progress {
      position: relative;
      margin-top: 20px;
      padding: 0 20px;
      & .truck-position {
        width: fit-content;
        position: absolute;
        bottom: 100%;
        left: 0;
        color: red;
        padding: 0 20px;
        transition: left 0.2s linear;
      }
      & .progress-bar {
        border-radius: 10px;
        width: 104%;
      }
    }
    .cart-body-text {
      margin: 6px 10px 10px 20px;
      color: #6f6f6f;
    }
  }
  .cart-view-content {
    //box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    //padding-bottom: -50x;
    .header {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 10px 8px;
      font-size: 16px;
      font-weight: 400;
      background-color: rgba(255, 0, 0, 0.05);
      border-radius: 8px;
      text-transform: uppercase;
      & h4 {
        flex-basis: 15%;
      }
      & h4:first-of-type {
        flex-basis: 60%;
      }
      & h4:last-of-type {
        flex-basis: 20%;
      }
    }
    .product {
      width: 100%;
      display: flex;
      align-items: center;
      margin-top: 20px;
      padding: 10px 8px;
      font-size: 16px;
      font-weight: 400;
      background-color: rgba(255, 0, 0, 0.05);
      border-radius: 8px;
      overflow: hidden;
      & .details {
        flex-basis: 60%;
      }
      & .price {
        flex-basis: 15%;
      }
      & .quantity {
        flex-basis: 15%;
      }
      & .total {
        flex-basis: 20%;

        display: flex;
        align-items: center;
        justify-content: space-evenly;
      }
    }
    .empty-cart {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transform: translateX(-20%);
      padding: 30px 0;
      & .icon {
        font-size: 700%;
      }
      & span {
        margin-top: 20px;
        font-size: 200%;
        color: red;
        letter-spacing: 3px;
      }
    }
    .footer {
      margin-top: 30px;
      .secure {
        display: flex;
        align-items: center;
        & .icon {
          margin-right: 10px;
        }
      }
      .payments-banner {
        width: 100%;
        margin-top: 6px;
        & img {
          width: 30%;
        }
      }
    }
    .order-summary {
      h2 {
        letter-spacing: 3px;
        font-size: 200%;
      }
      .divider {
        width: 100%;
        margin: 10px 0;
      }
      .divider-bold-black {
        height: 3px;
        background-color: black;
      }
      .divider-thin-grey {
        height: 1px;
        background-color: grey;
      }
      .sub-total {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        & span {
          font-weight: 400;
        }
      }
      h4 {
        margin-top: 20px;
      }
      .select {
        outline: none;
        width: 100%;
        border: 1px solid #000;
        border-radius: 20px;
        padding: 10px;
        margin: 10px 0;
        font-size: 0.8rem;
      }
      .state {
        display: flex;
        justify-content: space-between;
        & .select {
          flex-basis: 60%;
        }
        & input[type="text"] {
          flex-basis: 35%;
        }
      }
      .calc-shipping {
        border-radius: 10px;
        margin-top: 25px;
      }
      .coupon {
        margin: 40px 0 0;
        & p {
          font-size: 12px;
          font-weight: 400;
          color: #6f6f6f;
          margin-left: 10px;
        }
      }
      .action-btn {
        width: 100%;
        height: 50px;
        padding: 15px 0 !important;
        margin-top: 20px;
        border-radius: 0;
      }
    }
  }
}
</style>
