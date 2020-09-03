import Vue from "vue";
import Vuex from "vuex";
import cart from "./modules/cart";
import form from "./modules/form";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    form
  }
});
