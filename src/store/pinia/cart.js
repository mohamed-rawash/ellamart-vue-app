import { defineStore } from "pinia";

export default defineStore("cartStore", {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addItemToCart(item, quantity) {
      const found = this.cartItems.find((element) => element.id === item.id);
      if (found === undefined) {
        item.quantity = quantity;
        item.totalPrice = quantity * item.price;
        this.cartItems.push(item);
        localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
        console.log(`from first ${this.cartItems}`);
      } else {
        const itemIndex = this.cartItems.indexOf(found);
        this.cartItems[itemIndex].quantity += quantity;
        this.cartItems[itemIndex].totalPrice += quantity * item.price;
        localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
        console.log(this.cartItems);
      }
    },
    getCartItems() {
      this.cartItems = JSON.parse(localStorage.getItem("cartItems"));
    },
    deleteItemFromCart(id) {
      const index = this.cartItems.indexOf(
        this.cartItems.find((item) => item.id === id)
      );
      this.cartItems.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
      console.log(this.cartItems);
    },
  },
});
