import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Home",
    },
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/products/:category/:title",
    name: "products",
    meta: {
      title: "Pproducts",
    },
    component: () => import("@/views/ProductsCategories.vue"),
  },
  {
    path: "/products/product_details/:productId",
    name: "product_details",
    meta: {
      title: "ProductDetails",
    },
    component: () => import("@/views/ProductDetails"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
