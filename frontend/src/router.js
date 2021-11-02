import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    alias: "/ice-baths",
    name: "ice-baths",
    component: () => import("./components/IcebathList"),
  },
  {
    path: "/ice-baths/:id",
    name: "ice-baths-details",
    component: () => import("./components/Icebath"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddIcebath"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
