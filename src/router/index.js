import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/IndexView.vue"),
      children: [
        {
          path: "/",
          component: HomeView,
        },
        {
          path: "about",
          component: () => import("../views/AboutView.vue"),
        },
        {
          path: "cart",
          component: () => import("../views/CartView.vue"),
        },
        {
          path: "products",
          component: () => import("../views/ProductsView.vue"),
        },
        {
          path: "Product/:id",
          component: () => import("../views/ProductView.vue"),
        },
      ],
    },
    {
      path: "/login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/admin",
      component: () => import("../views/admin/IndexView.vue"),
      children: [
        {
          path: "/admin/orders",
          component: () => import("../views/admin/OrdersView.vue"),
        },
        {
          path: "/admin/coupons",
          component: () => import("../views/admin/CouponsView.vue"),
        },
        {
          path: "/admin/products",
          component: () => import("../views/admin/ProductsView.vue"),
        },
        {
          path: "/admin/product",
          component: () => import("../views/admin/ProductView.vue"),
        },
      ],
    },
  ],
});

export default router;
