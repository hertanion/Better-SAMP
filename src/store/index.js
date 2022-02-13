import Vue from "vue";
import Vuex from "vuex";
import Favorite from "./modules/Favorite";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Favorite,
  },
});
