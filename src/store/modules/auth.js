import AuthService from "../../api/AuthService.js";

export const namespaced = true;

export const state = () => ({
  token: localStorage.getItem("token")
});

export const getters = {
  isLoggedIn: state => {
    return !!state.token;
  }
};

export const mutations = {
  LOGIN_USER(state, data) {
    localStorage.setItem("token", data.token);
    state.token = data.token;
  },
  LOGOUT_USER(state) {
    state.token = "";
    state.emailConfirmed = false;
    state.weddingName = false;
    localStorage.clear();
  }
};

export const actions = {
  async login({ commit }, user) {
    try {
      const r = await AuthService.login(user);
      commit("LOGIN_USER", r.data);
      return r;
    } catch (e) {
      let responseStatus = {};
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async register({ commit }, user) {
    try {
      const r = await AuthService.register(user);
      commit("LOGIN_USER", r.data);
      return r;
    } catch (e) {
      let responseStatus = {};
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  logout({ commit }) {
    commit("LOGOUT_USER");
  },
  async forgotPasswordLink({ commit }, user) {
    try {
      const r = await AuthService.forgotPasswordLink(user);
      console.log(commit);
      return r;
    } catch (e) {
      return e;
    }
  },
  async changePassword({ commit }, user) {
    try {
      const r = await AuthService.changePassword(user);
      console.log(commit);
      return r;
    } catch (e) {
      return e;
    }
  }
};
