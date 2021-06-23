/** @format */

import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/auth",
    name: "Auth",
    component: () => import("@/views/Auth.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/Dashboard"),
    icon: "fas fa-braille",
  },
  {
    path: "/zip-codes",
    name: "ZipCodes",
    component: () => import("@/views/ZipCodes"),
  },
  {
    path: "/categories",
    name: "Categories",
    component: () => import("@/views/Categories"),
  },
  {
    path: "/subtypes",
    name: "Subtypes",
    component: () => import("@/views/SubTypes"),
  },
  {
    path: "/services",
    name: "Services",
    component: () => import("@/views/Services"),
  },
  {
    path: "/professionals",
    name: "Professionals",
    component: () => import("@/views/Professionals"),
  },
  {
    path: "/partners",
    name: "Partners",
    component: () => import("@/views/Partners"),
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("@/views/Users"),
  },
  {
    path: "/orders",
    name: "Orders",
    component: () => import("@/views/Orders"),
  },
  {
    path: "/revenue",
    name: "Revenue",
    component: () => import("@/views/Revenue"),
  },
  {
    path: "/reports",
    name: "Reports",
    component: () => import("@/views/Reports"),
  },
  {
    path: "/contracts",
    name: "Contracts",
    component: () => import("@/views/Contracts"),
  },
];

function checkToken() {
  var isLoggedIn = store.getters["auth/isLoggedIn"];
  return isLoggedIn;
}

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path != "/") {
    if (checkToken()) {
      next();
    } else {
      next({ name: "Auth" });
    }
  } else {
    next();
  }
});

export default router;
