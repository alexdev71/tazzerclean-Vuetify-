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

const baseUrl = process.env.VUE_APP_API_URL + "/admin";

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
  async getAllZipCodes() {
    return apiClient
      .post(`/zipcodesall`)
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
  async deleteZipCode(id) {
    return apiClient
      .delete(`/deleteZipCode?id=${id}`)
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
  async addOrUpdate(postal) {
    return apiClient
      .post(`/addOrUpdateZipCode`, postal)
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
  //category type
  async getAllCategoryType() {
    return apiClient
      .post(`/typegetall`)
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
  async deleteCategoryType(id) {
    return apiClient
      .delete(`/deleteCategoryType?id=${id}`)
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
  async categoryTypeAddOrUpdate(type) {
    return apiClient
      .post(`/addOrUpdateCategoryType`, type)
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
  //category
  async getAllCategory() {
    return apiClient
      .post(`/categoryGetAll`)
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
  async deleteCategory(id) {
    return apiClient
      .delete(`/deleteCategory?id=${id}`)
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
  async categoryAddOrUpdate(type) {
    return apiClient
      .post(`/addOrUpdateCategory`, type)
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
  async getAllProfessionals() {
    return apiClient
      .post(`/professionals`)
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
  async deleteProfessional(id) {
    return apiClient
      .delete(`/deleteProfessional?id=${id}`)
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
  async ActiveProfessional(id) {
    return apiClient
      .get(`/activeProfessional?id=${id}`)
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
  async DectiveProfessional(id) {
    return apiClient
      .get(`/deactiveProfessional?id=${id}`)
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
  async getAllCustomers() {
    return apiClient
      .post(`/customersGetAll`)
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
  async deleteCustomer(id) {
    return apiClient
      .delete(`/deleteCustomer?id=${id}`)
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
  async ActiveCustomer(id) {
    return apiClient
      .get(`/activeCustomer?id=${id}`)
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
  async DectiveCustomer(id) {
    return apiClient
      .get(`/deactiveCustomer?id=${id}`)
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
  async getAllPartners() {
    return apiClient
      .post(`/partners`)
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
  async deletePartner(id) {
    return apiClient
      .delete(`/deletePartner?id=${id}`)
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
  async ActivePartner(id) {
    return apiClient
      .get(`/activePartner?id=${id}`)
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
  async DectivePartner(id) {
    return apiClient
      .get(`/deactivePartner?id=${id}`)
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
  //category type
  async getAllCategorySubType() {
    return apiClient
      .post(`/subtypegetall`)
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
  async deleteCategorySubType(id) {
    return apiClient
      .delete(`/deleteCategorySubType?id=${id}`)
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
  async categorySubTypeAddOrUpdate(type) {
    return apiClient
      .post(`/addOrUpdateCategorySubType`, type)
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
  //category
};

