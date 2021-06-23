/** @format */

import axios from "axios";
import NProgress from "nprogress";
import store from "../store/index.js";

export const namespaced = true;

function snackbarSuccess() {
  var snackbar = {};
  snackbar.color = "success";
  snackbar.text = "Operation was succesfull.";
  store.dispatch("utils/setSnackbarVisible", snackbar);
}

function snackbarError(text) {
  var snackbar = {};
  snackbar.color = "error";
  snackbar.text = text;
  store.dispatch("utils/setSnackbarVisible", snackbar);
}

const baseUrl = process.env.VUE_APP_API_URL + "/auth";

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
  async login(user) {
    return apiClient
      .post(`/login`, user)
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
  async register(user) {
    return apiClient
      .post(`/register`, user)
      .then((result) => {
        NProgress.done();
        snackbarSuccess();
        return result;
      })
      .catch((error) => {
        console.log(error.response.status);
        snackbarError(error.response.data.message);
        NProgress.done();
      });
  },
  async forgotPasswordLink(user) {
    return apiClient
      .post(`/forgotpasswordlink`, user)
      .then((result) => {
        NProgress.done();
        snackbarSuccess();
        return result;
      })
      .catch((error) => {
        console.log(error.response.status);
        snackbarError(error.response.data.message);
        NProgress.done();
      });
  },
  async changePassword(user) {
    return apiClient
      .post(`/changePassword`, user)
      .then((result) => {
        NProgress.done();
        snackbarSuccess();
        return result;
      })
      .catch((error) => {
        console.log(error.response.status);
        snackbarError(error.response.data.message);
        NProgress.done();
      });
  },
};
