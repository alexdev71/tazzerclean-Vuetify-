import CommonService from "../../api/CommonService.js";

export const namespaced = true;

export const state = () => ({
  dashboardStats: []
});

export const getters = {
  dashboardStats: state => {
    return state.dashboardStats;
  }
};

export const mutations = {
  SET_DASHBOARD_STATS(state, dashboardStats) {
    state.dashboardStats = dashboardStats;
  }
};

export const actions = {
  async getDashboardStats({ commit }) {
    try {
      const r = await CommonService.getDashboardStats();
      commit("SET_DASHBOARD_STATS", r.data);
      return r;
    } catch (e) {
      let responseStatus = {};
      responseStatus.status = 401;
      return responseStatus;
    }
  }
};
