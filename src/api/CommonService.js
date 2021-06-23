/** @format */

import axios from "axios";
import NProgress from "nprogress";
import store from "../store/index.js";

export const namespaced = true;

function snackbarError(text) {
  var snackbar = {};
  snackbar.color = "error";
  snackbar.text = text;
  store.dispatch("utils/setSnackbarVisible", snackbar);
}

const baseUrl = process.env.VUE_APP_API_URL + "/common";

const apiClient = axios.create({
  baseURL: baseUrl,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

apiClient.interceptors.request.use(function(config) {
  let token = localStorage.getItem("token");
  config.headers = {
    Authorization: `Bearer ${token}`,
  };
  return config;
});

export default {
  async getDashboardStats() {
    return apiClient
      .get(`/dashboard-stats`)
      .then((result) => {
        NProgress.done();
        return result;
      })
      .catch((error) => {
        console.log(error.response.status);
        snackbarError(error.response.data.message);
        NProgress.done();
      });
  },
};
