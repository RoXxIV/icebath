import { createWebHistory, createRouter } from "vue-router";
import IcebathListView from "./views/IcebathListView.vue";
import StatisticsView from "./views/StatisticsView.vue";
const routes = [
  {
    path: "/",
    alias: "/ice-bath-list-view",
    name: "ice-bath-list-view",
    component: IcebathListView,
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
  {
    path: "/",
    alias: "/statistics-view",
    name: "statistics-view",
    component: StatisticsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
