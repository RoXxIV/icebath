import { createWebHistory, createRouter } from "vue-router";
import IcebathListView from "./views/IcebathListView.vue";
import StatisticsView from "./views/StatisticsView.vue";
import AddIcebathView from "./views/AddIcebathView.vue";
import IcebathDetailsView from "./views/IcebathDetailsView.vue";
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
    component: IcebathDetailsView,
  },
  {
    path: "/add",
    name: "add",
    component: AddIcebathView,
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
// component: () => import("./components/IcebathDetails"),
