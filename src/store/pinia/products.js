import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    products: [],
    flashSale: [],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          this.products = res.data.products;
          this.flashSale = this.products.slice(7, 20);
          console.log(this.flashSale);
        })
        .catch((err) => console.log(err));
    },
  },
});
