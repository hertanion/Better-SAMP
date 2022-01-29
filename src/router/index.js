import Vue from "vue";
import VueRouter from "vue-router";
import Favorites from "../views/Favorites.vue";
import Internet from "../views/Internet.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Favorites",
    component: Favorites,
  },

  {
    path: "/internet",
    name: "Internet",
    component: Internet,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
