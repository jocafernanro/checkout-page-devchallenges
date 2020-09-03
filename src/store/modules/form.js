const state = () => ({
  formData: {
    email: "",
    phone: undefined,
    name: "",
    address: "",
    city: "",
    country: "",
    postalCode: undefined,
    errors: {}
  }
});

// getters
const getters = {
  hasErrors: state => {
    console.log(state.formData.errors);
    return Object.entries(state.formData.errors).length > 0;
  }
};

// actions
const actions = {
  changeFormData({ commit }, data) {
    commit("changeFormData", data);
  },
  setError({ commit }, errors) {
    commit("setError", errors);
  }
};

// mutations
const mutations = {
  changeFormData(state, data) {
    state.formData[data.input] = data.value;
  },
  setError(state, errors) {
    state.formData.errors = errors;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
