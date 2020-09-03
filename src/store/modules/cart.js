const state = () => ({
  formData: {
    email: "",
    phone: 0,
    name: "",
    address: "",
    city: "",
    country: "",
    postalCode: 0,
    errors: {}
  },
  items: [
    {
      id: 1,
      name: "Vintage Backbag",
      price: 94.99,
      sale: 54.99,
      img: "images/photo1.png",
      quantity: 1
    },
    {
      id: 2,
      name: "Levi Shoes",
      price: 124.99,
      sale: 74.99,
      img: "images/photo2.png",
      quantity: 1
    }
  ],
  shipping: 19
});

// getters
const getters = {
  total: state => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.quantity * currentValue.sale;
    return state.items.reduce(reducer, 0).toFixed(2);
  }
};

// actions
const actions = {
  increaseItemQuantity({ commit }, item) {
    commit("increaseItemQuantity", item.id);
  },
  decreaseItemQuantity({ commit }, item) {
    if (item.quantity > 1) commit("decreaseItemQuantity", item.id);
  },
  changeFormData({ commit }, data) {
    commit("changeFormData", data);
  }
};

// mutations
const mutations = {
  increaseItemQuantity(state, itemId) {
    state.items.find(item => item.id === itemId).quantity++;
  },
  decreaseItemQuantity(state, itemId) {
    state.items.find(item => item.id === itemId).quantity--;
  },
  changeFormData(state, data) {
    state.formData[data.input] = data.value;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
