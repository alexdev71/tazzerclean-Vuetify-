export const namespaced = true;

export const state = () => ({
  snackbarColor: "",
  snackbarText: "",
});

export const getters = {
  snackbarText: state => {
    return state.snackbarText;
  },
  snackbarColor: state => {
    return state.snackbarColor;
  }
};

export const mutations = {
  SET_SNACKBAR_COLOR(state, color) {
    state.snackbarColor = color;
  },
  SET_SNACKBAR_TEXT(state, text) {
    state.snackbarText = text;
  }
};

export const actions = {
  setSnackbarVisible({ commit }, snackbar) {
    commit("SET_SNACKBAR_COLOR", snackbar.color);
    commit("SET_SNACKBAR_TEXT", snackbar.text);
  },
  closeSnackbar({ commit }) {
    commit("SET_SNACKBAR_COLOR", "");
    commit("SET_SNACKBAR_TEXT", "");
  }
};
