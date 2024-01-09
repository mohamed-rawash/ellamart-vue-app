<template>
  <div class="quick-view-parent">
    <v-dialog v-model="dialog">
      <div class="quick-view-wrapper">
        <v-icon @click="dialog = flase" class="close">mdi-close</v-icon>

        <div class="quick-view">
          <v-container fluid class="pa-0">
            <v-row class="pa-0">
              <v-col sm="12" md="6" lg="6">
                <img
                  v-if="!loading"
                  class="w-100 product-img"
                  :src="tab ? product.images[tab] : product.thumbnail"
                  :alt="product.description"
                />
              </v-col>
              <v-col sm="12" md="6" lg="6" class="mt-4 pt-2 pl-4">
                <v-card v-if="!loading" elevation="0">
                  <v-card-title
                    class="px-0 text-h4 font-weight-bold text-capitalize"
                  >
                    {{ product.title }} Sample - {{ product.category }} For Sale
                  </v-card-title>
                  <div class="rating-parent d-flex align-center">
                    <v-rating
                      half-increments
                      :model-value="product.rating"
                      readonly
                      active-color="amber"
                      color="amber"
                      size="x-small"
                      density="combact"
                    ></v-rating>
                    <span
                      >{{ Math.floor(Math.random() * 100) + 4 }} Review</span
                    >
                    <span>
                      <font-awesome-icon :icon="['fas', 'fire']" />
                      {{ Math.floor(Math.random() * 10) + 2 }} solid in last 10
                      hours
                    </span>
                  </div>
                  <p class="description">
                    {{ product.description }}
                  </p>
                  <p class="brand">Brand: &nbsp; {{ product.brand }}</p>
                  <p class="brand" :class="{ danger: product.stock === 0 }">
                    Availabilty: &nbsp;
                    {{ product.stock > 0 ? "In Stock" : "Out Of Stock" }}
                  </p>
                  <p class="price">
                    $
                    {{ product.price }}
                  </p>
                  <div class="only-left">
                    <p class="danger">
                      Please hurry only
                      {{ Math.floor(Math.random() * 5) + 2 }} left in stock
                    </p>
                    <span class="bar"></span>
                  </div>
                  <div class="quantity">
                    <p>Quantity</p>
                    <div class="counter">
                      <v-icon
                        @click="
                          () => {
                            quantity > 1 ? quantity-- : quantity;
                          }
                        "
                        class="icon"
                        >mdi-minus</v-icon
                      >
                      <span>{{ quantity }}</span>
                      <v-icon
                        @click="
                          () => {
                            quantity < 10 ? quantity++ : quantity;
                          }
                        "
                        class="icon"
                        >mdi-plus</v-icon
                      >
                    </div>
                  </div>
                  <p class="brand">
                    Subtotal: {{ quantity * product.price }} $
                  </p>
                  <div class="add-to-cart py-3 d-flex align-center">
                    <v-btn
                      class="text-whit text-capitalize bg-black w-50"
                      rounded
                      @click="
                        addItemToCart(product, this.quantity);
                        handleAddingToCartLoading();
                      "
                      ><span v-if="!btnLoading">Add To Cart</span>
                      <v-progress-circular
                        indeterminate
                        color="amber"
                        v-else
                      ></v-progress-circular
                    ></v-btn>
                    <v-btn icon="mdi-heart-outline"></v-btn>
                    <v-btn
                      variant="plain"
                      icon="mdi-share-variant-outline"
                    ></v-btn>
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex justify-center">
                <v-tabs center-active v-model="tab" height="220" class="px-0">
                  <v-tab v-for="(img, i) in product.images" :key="i" :value="i">
                    <img
                      class="tab-img"
                      :src="img"
                      alt=""
                      width="200"
                      height="200"
                    />
                  </v-tab>
                </v-tabs>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import cartStore from "@/store/pinia/cart";
import { mapActions } from "pinia";
export default {
  inject: ["emitter"],
  data: () => ({
    dialog: false,
    tab: "",
    loading: false,
    btnLoading: false,
    quantity: 1,
    product: {},
  }),
  methods: {
    ...mapActions(cartStore, ["addItemToCart"]),
    handleAddingToCartLoading() {
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.dialog = false;
        this.emitter.emit("showMsg", this.product.title);
      }, 1000);
    },
  },
  mounted() {
    this.emitter.on("openQuickView", (data) => {
      this.product = data;
      this.dialog = true;
    });
  },
};
</script>

<style lang="scss" scoped>
.quick-view-wrapper {
  position: relative;
  height: 600px;
  width: 800px;
  margin: 0 auto;
  .close {
    position: absolute;
    top: -15px;
    right: -15px;
    width: 30px;
    height: 30px;
    background-color: black;
    color: white;
    cursor: pointer;
    z-index: 100000;
  }
  .quick-view {
    margin: 0 auto;
    height: 600px;
    padding: 12px;
    background-color: white;
    overflow-y: auto;
    overflow-x: hidden;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    .product-img {
      height: 100%;
    }
    .rating-parent {
      margin-top: 5px;
      gap: 10px;
      & span:first-of-type {
        margin-top: 4px;
        font-size: 12px;
        color: #777;
      }
      & span:last-child {
        margin-top: 4px;
        margin-left: 40px;
        color: red;
        font-size: 14px;
        .fa-fire {
          font-size: 18px;
          margin-right: 6px;
        }
      }
    }
    .description,
    .brand {
      margin: 12px 0;
      color: #777;
      font-size: 16px;
    }
    .price {
      font-size: 18px;
      font-weight: 700;
    }
    .danger {
      color: red;
    }
    .only-left {
      margin-top: 10px;
      .bar {
        display: block;
        width: 220px;
        height: 6px;
        margin-top: 4px;
        margin-left: 3px;
        border-radius: 3px;
        background: red;
        background: linear-gradient(90deg, red 50%, green 100%);
      }
    }
    .quantity {
      margin: 20px 0 10px;
      .counter {
        width: 100px;
        margin-top: 8px;
        padding: 4px 12px;
        border: 1px solid black;
        border-radius: 10px;
        text-align: center;
        .icon {
          cursor: pointer;
        }
        span {
          display: inline-block;
          margin: 0 2px;
          width: 20px;
        }
      }
    }
    .add-to-cart {
      gap: 10px;
    }
  }
}
</style>
