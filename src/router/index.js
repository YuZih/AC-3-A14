import Vue from "vue";
import VueRouter from "vue-router";
import Checkout from "../views/Checkout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Root",
    component: Checkout,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "*",
    name: "About",
    component: () =>
      import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  // linkExactActiveClass: 'active',
  routes,
});

export default router;
