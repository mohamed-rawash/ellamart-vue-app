import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    products: [],
    flashSale: [],
    laptops: [],
    phones: [],
    fragrances: [],
    womensWatches: [],
    womensJewellery: [],
    categoryProducts: [],
    categories: [
      {
        title: "Smartphones",
        routeName: "smartphones",
      },
      {
        title: "Laptops",
        routeName: "laptops",
      },
      {
        title: "Furniture",
        routeName: "furniture",
      },
      {
        title: "Womens Shoes",
        routeName: "womens-shoes",
      },
      {
        title: "Mens Shoes",
        routeName: "mens-shoes",
      },
      {
        title: "Sunglasses",
        routeName: "sunglasses",
      },
      {
        title: "Tops",
        routeName: "tops",
      },
    ],
    product: {},
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          this.products = res.data.products;
          this.flashSale = this.products.slice(7, 20);
          this.laptops = this.products.filter(
            (el) => el.category === "laptops"
          );
          this.phones = this.products.filter(
            (el) => el.category === "smartphones"
          );
          this.fragrances = this.products.filter(
            (el) => el.category === "fragrances"
          );
        })
        .catch((err) => console.log(err));
    },
    async getProductsByCategory(categoryName) {
      this.categoryProducts = [];
      await axios
        .get(`https://dummyjson.com/products/category/${categoryName}`)
        .then((res) => (this.categoryProducts = res.data.products))
        .catch((error) => console.log(error));
    },
    async getWomensWatchesProducts() {
      await axios
        .get(`https://dummyjson.com/products/category/womens-watches`)
        .then((res) => (this.womensWatches = res.data.products))
        .catch((error) => console.log(error));
    },
    async getWomensJewelleryProducts() {
      await axios
        .get(`https://dummyjson.com/products/category/womens-jewellery`)
        .then((res) => (this.womensJewellery = res.data.products))
        .catch((error) => console.log(error));
    },
    async getSingleProduct(productId) {
      this.product = {};
      await axios
        .get(`https://dummyjson.com/products/${productId}`)
        .then((res) => {
          console.log(res.data);
          this.product = res.data;
          console.log(this.product);
        })
        .catch((error) => console.log(error));
    },
  },
});
