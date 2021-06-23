/** @format */

import AdminService from "../../api/AdminService.js";
export const namespaced = true;
export const state = () => ({
  zipCodes: [],
  zipCodesLoading: false,
  categoryType: [],
  categoryTypeLoading: false,
  category: [],
  categoryLoading: false,
  professionals: [],
  professionalsLoading: false,
  customers: [],
  customersLoading: false,
  partners: [],
  partnersLoading: false,
  categorySubType: [],
});

export const getters = {
  zipCodes: (state) => {
    return state.zipCodes;
  },
  zipCodesLoading: (state) => {
    return state.zipCodesLoading;
  },
  categoryType: (state) => {
    return state.categoryType;
  },
  categoryTypeLoading: (state) => {
    return state.categoryTypeLoading;
  },
  category: (state) => {
    return state.category;
  },
  categoryLoading: (state) => {
    return state.categoryLoading;
  },
  professionals: (state) => {
    return state.professionals;
  },
  professionalsLoading: (state) => {
    return state.professionalsLoading;
  },
  customers: (state) => {
    return state.customers;
  },
  customersLoading: (state) => {
    return state.customersLoading;
  },
  partners: (state) => {
    return state.partners;
  },
  partnersLoading: (state) => {
    return state.partnersLoading;
  },
  categorySubType: (state) => {
    return state.categorySubType;
  },
};

export const mutations = {
  SET_ZIP_CODES(state, zipCodes) {
    state.zipCodes = zipCodes;
  },
  SET_ZIP_CODES_LOADING(state, value) {
    state.zipCodesLoading = value;
  },
  SET_CATEGORY_TYPE(state, categoryType) {
    state.categoryType = categoryType;
  },
  SET_CATEGORY_SUB_TYPE(state, subType) {
    state.categorySubType = subType;
  },
  SET_CATEGORY_TYPE_LOADING(state, value) {
    state.categoryTypeLoading = value;
  },
  SET_CATEGORY(state, category) {
    state.category = category;
  },
  SET_CATEGORY_LOADING(state, value) {
    state.categoryLoading = value;
  },
  SET_PROFESSIONALS(state, professionals) {
    state.professionals = professionals;
  },
  SET_PROFESSIONALS_LOADING(state, value) {
    state.professionalsLoading = value;
  },
  SET_CUSTOMERS(state, customers) {
    state.customers = customers;
  },
  SET_CUSTOMERS_LOADING(state, value) {
    state.customersLoading = value;
  },
  SET_PARTNERS(state, partners) {
    state.partners = partners;
  },
  SET_PARTNERS_LOADING(state, value) {
    state.partnersLoading = value;
  },
};

export const actions = {
  async getAllZipCodes({ commit }) {
    try {
      zipCodeLoading(commit, true);
      const r = await AdminService.getAllZipCodes();
      commit("SET_ZIP_CODES", r.data);
      zipCodeLoading(commit, false);
      return r;
    } catch (e) {
      let responseStatus = {};
      zipCodeLoading(commit, false);
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async deleteZipCode({ commit }, id) {
    try {
      zipCodeLoading(commit, true);
      const r = await AdminService.deleteZipCode(id);
      commit("SET_ZIP_CODES", r.data);
      zipCodeLoading(commit, false);
      return r;
    } catch (e) {
      let responseStatus = {};
      zipCodeLoading(commit, false);
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async addOrUpdate({ commit }, postal) {
    try {
      zipCodeLoading(commit, true);
      const r = await AdminService.addOrUpdate(postal);
      commit("SET_ZIP_CODES", r.data);
      zipCodeLoading(commit, false);
      return r;
    } catch (e) {
      let responseStatus = {};
      zipCodeLoading(commit, false);
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async downloadZipCodeAsExcel(){
    var ShowLabel = true;
    var data = await AdminService.getAllZipCodes();
    var JSONData = data.data;
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    
    var CSV = '';
    if (ShowLabel) {
        var row = "";
        for (var index in arrData[0]) {
            row += index + ',';
        }

        row = row.slice(0, -1);
        CSV += row + '\r\n';
    }
    
    for (var i = 0; i < arrData.length; i++) {
        row = "";
        
        for (index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);
        CSV += row + '\r\n';
    }

    if (CSV == '') {        
        alert("Invalid data");
        return;
    } 
    var fileName = "ZipCodes";
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    var link = document.createElement("a");    
    link.href = uri;
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },
  // category type
  async getAllCategoryType({ commit }) {
    try {
      categoryTypeLoading(commit, true);
      const r = await AdminService.getAllCategoryType();
      commit("SET_CATEGORY_TYPE", r.data);
      categoryTypeLoading(commit, false);
      return r;
    } catch (e) {
      let responseStatus = {};
      categoryTypeLoading(commit, false);
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async getAllCategorySubType({ commit }) {
    try {
      const r = await AdminService.getAllCategorySubType();
      commit("SET_CATEGORY_SUB_TYPE", r.data);
      return r;
    } catch (e) {
      let responseStatus = {};
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async deleteCategoryType({ commit }, id) {
    try {
      categoryTypeLoading(commit, true);
      const r = await AdminService.deleteCategoryType(id);
      commit("SET_CATEGORY_TYPE", r.data);
      categoryTypeLoading(commit, false);
      return r;
    } catch (e) {
      let responseStatus = {};
      categoryTypeLoading(commit, false);
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async downloadCategoriesAsExcel(){
    var ShowLabel = true;
    var data = await AdminService.getAllCategoryType();
    var JSONData = data.data;
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    
    var CSV = '';
    if (ShowLabel) {
        var row = "";
        for (var index in arrData[0]) {
            row += index + ',';
        }

        row = row.slice(0, -1);
        CSV += row + '\r\n';
    }
    
    for (var i = 0; i < arrData.length; i++) {
        row = "";
        
        for (index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);
        CSV += row + '\r\n';
    }

    if (CSV == '') {        
        alert("Invalid data");
        return;
    } 
    var fileName = "Categories";
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    var link = document.createElement("a");    
    link.href = uri;
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },
  async downloadSubCategoriesAsExcel(){
    var ShowLabel = true;
    var data = await AdminService.getAllCategorySubType();
    var JSONData = data.data;
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    
    var CSV = '';
    if (ShowLabel) {
        var row = "";
        for (var index in arrData[0]) {
            row += index + ',';
        }

        row = row.slice(0, -1);
        CSV += row + '\r\n';
    }
    
    for (var i = 0; i < arrData.length; i++) {
        row = "";
        
        for (index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);
        CSV += row + '\r\n';
    }

    if (CSV == '') {        
        alert("Invalid data");
        return;
    } 
    var fileName = "SubCategories";
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    var link = document.createElement("a");    
    link.href = uri;
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },
  async deleteCategorySubType({ commit }, id) {
    try {
      const r = await AdminService.deleteCategorySubType(id);
      commit("SET_CATEGORY_SUB_TYPE", r.data);
      return r;
    } catch (e) {
      let responseStatus = {};
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async categoryTypeAddOrUpdate({ commit }, type) {
    try {
      categoryTypeLoading(commit, true);
      console.log(type);
      const r = await AdminService.categoryTypeAddOrUpdate(type);
      commit("SET_CATEGORY_TYPE", r.data);
      categoryTypeLoading(commit, false);
      return r;
    } catch (e) {
      let responseStatus = {};
      categoryTypeLoading(commit, false);
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async categorySubTypeAddOrUpdate({ commit }, type) {
    try {
      const r = await AdminService.categorySubTypeAddOrUpdate(type);
      commit("SET_CATEGORY_SUB_TYPE", r.data);
      return r;
    } catch (e) {
      let responseStatus = {};
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  //category
  async getAllCategory({ commit, dispatch }) {
    try {
      categoryLoading(commit, true);
      const r = await AdminService.getAllCategory();
      commit("SET_CATEGORY", r.data);
      categoryLoading(commit, false);
      var response2 = await dispatch("getAllCategoryType");
      commit("SET_CATEGORY_TYPE", response2.data);
      return r;
    } catch (e) {
      let responseStatus = {};
      categoryLoading(commit, false);
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async deleteCategory({ commit }, id) {
    try {
      categoryLoading(commit, true);
      const r = await AdminService.deleteCategory(id);
      commit("SET_CATEGORY", r.data);
      categoryLoading(commit, false);
      return r;
    } catch (e) {
      let responseStatus = {};
      categoryLoading(commit, false);
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async categoryAddOrUpdate({ commit }, cat) {
    try {
      categoryLoading(commit, true);
      const r = await AdminService.categoryAddOrUpdate(cat);
      commit("SET_CATEGORY", r.data);
      categoryLoading(commit, false);
      return r;
    } catch (e) {
      let responseStatus = {};
      categoryLoading(commit, false);
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async getAllProfessionals({ commit }) {
    try {
      professionalsLoading(commit, true);
      const r = await AdminService.getAllProfessionals();
      console.log(r.data);
      commit("SET_PROFESSIONALS", r.data);
      professionalsLoading(commit, false);
      return r;
    } catch (e) {
      let responseStatus = {};
      professionalsLoading(commit, false);
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async downloadProfessionalsAsExcel(){
    var ShowLabel = true;
    var data = await AdminService.getAllProfessionals();
    var JSONData = data.data;
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    
    var CSV = '';
    if (ShowLabel) {
        var row = "";
        for (var index in arrData[0]) {
            row += index + ',';
        }

        row = row.slice(0, -1);
        CSV += row + '\r\n';
    }
    
    for (var i = 0; i < arrData.length; i++) {
        row = "";
        
        for (index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);
        CSV += row + '\r\n';
    }

    if (CSV == '') {        
        alert("Invalid data");
        return;
    } 
    var fileName = "Professionals";
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    var link = document.createElement("a");    
    link.href = uri;
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },
  async activateProfessionalAccount({ commit }, id){
    try {
      console.log(id);
      professionalsLoading(commit, true);
      const r = await AdminService.ActiveProfessional(id);
      commit("SET_PROFESSIONALS", r.data);
      professionalsLoading(commit, false);
      return r;
    } catch (e) {
      let responseStatus = {};
      professionalsLoading(commit, false);
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async deactivateProfessionalAccount({ commit }, id){
    try {
      console.log(id);
      professionalsLoading(commit, true);
      const r = await AdminService.DectiveProfessional(id);
      commit("SET_PROFESSIONALS", r.data);
      professionalsLoading(commit, false);
      return r;
    } catch (e) {
      let responseStatus = {};
      professionalsLoading(commit, false);
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async deleteProfessional({ commit }, id) {
    try {
      professionalsLoading(commit, true);
      const r = await AdminService.deleteProfessional(id);
      commit("SET_PROFESSIONALS", r.data);
      professionalsLoading(commit, false);
      return r;
    } catch (e) {
      let responseStatus = {};
      professionalsLoading(commit, false);
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async getAllCustomers({ commit }) {
    try {
      customersLoading(commit, true);
      const r = await AdminService.getAllCustomers();
      commit("SET_CUSTOMERS", r.data);
      customersLoading(commit, false);
      return r;
    } catch (e) {
      let responseStatus = {};
      customersLoading(commit, false);
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async downloadUsersAsExcel(){
    var ShowLabel = true;
    var data = await AdminService.getAllCustomers();
    var JSONData = data.data;
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    
    var CSV = '';
    if (ShowLabel) {
        var row = "";
        for (var index in arrData[0]) {
            row += index + ',';
        }

        row = row.slice(0, -1);
        CSV += row + '\r\n';
    }
    
    for (var i = 0; i < arrData.length; i++) {
        row = "";
        
        for (index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);
        CSV += row + '\r\n';
    }

    if (CSV == '') {        
        alert("Invalid data");
        return;
    } 
    var fileName = "Users";
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    var link = document.createElement("a");    
    link.href = uri;
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },
  async deleteCustomer({commit}, id){
    try {
      customersLoading(commit, true);
      const r = await AdminService.deleteCustomer(id);
      commit("SET_CUSTOMERS", r.data);
      customersLoading(commit, false);
      return r;
    } catch (e) {
      let responseStatus = {};
      customersLoading(commit, false);
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async activateCustomerAccount({ commit }, id){
    try {
      customersLoading(commit, true);
      const r = await AdminService.ActiveCustomer(id);
      commit("SET_CUSTOMERS", r.data);
      customersLoading(commit, false);
      return r;
    } catch (e) {
      let responseStatus = {};
      customersLoading(commit, false);
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async deactivateCustomerAccount({ commit }, id){
    try {
      customersLoading(commit, true);
      const r = await AdminService.DectiveCustomer(id);
      commit("SET_CUSTOMERS", r.data);
      customersLoading(commit, false);
      return r;
    } catch (e) {
      let responseStatus = {};
      customersLoading(commit, false);
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async getAllPartners({ commit }) {
    try {
      partnersLoading(commit, true);
      const r = await AdminService.getAllPartners();
      commit("SET_PARTNERS", r.data);
      partnersLoading(commit, false);
      return r;
    } catch (e) {
      let responseStatus = {};
      partnersLoading(commit, false);
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async deletePartner({commit}, id){
    try {
      partnersLoading(commit, true);
      const r = await AdminService.deletePartner(id);
      commit("SET_CUSTOMERS", r.data);
      partnersLoading(commit, false);
      return r;
    } catch (e) {
      let responseStatus = {};
      partnersLoading(commit, false);
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async activatePartnerAccount({ commit }, id){
    try {
      console.log(id);
      partnersLoading(commit, true);
      const r = await AdminService.ActivePartner(id);
      commit("SET_PROFESSIONALS", r.data);
      partnersLoading(commit, false);
      return r;
    } catch (e) {
      let responseStatus = {};
      partnersLoading(commit, false);
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async deactivatePartnerAccount({ commit }, id){
    try {
      console.log(id);
      partnersLoading(commit, true);
      const r = await AdminService.DectivePartner(id);
      commit("SET_PROFESSIONALS", r.data);
      partnersLoading(commit, false);
      return r;
    } catch (e) {
      let responseStatus = {};
      partnersLoading(commit, false);
      responseStatus.status = 401;
      return responseStatus;
    }
  },
  async downloadPartnersAsExcel(){
    var ShowLabel = true;
    var data = await AdminService.getAllPartners();
    var JSONData = data.data;
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    
    var CSV = '';
    if (ShowLabel) {
        var row = "";
        for (var index in arrData[0]) {
            row += index + ',';
        }

        row = row.slice(0, -1);
        CSV += row + '\r\n';
    }
    
    for (var i = 0; i < arrData.length; i++) {
        row = "";
        
        for (index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);
        CSV += row + '\r\n';
    }

    if (CSV == '') {        
        alert("Invalid data");
        return;
    } 
    var fileName = "Partners";
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    var link = document.createElement("a");    
    link.href = uri;
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },
};

function zipCodeLoading(commit, value) {
  commit("SET_ZIP_CODES_LOADING", value);
}

function categoryTypeLoading(commit, value) {
  commit("SET_CATEGORY_TYPE_LOADING", value);
}

function categoryLoading(commit, value) {
  commit("SET_CATEGORY_LOADING", value);
}

function professionalsLoading(commit, value) {
  commit("SET_PROFESSIONALS_LOADING", value);
}

function customersLoading(commit, value) {
  commit("SET_CUSTOMERS_LOADING", value);
}

function partnersLoading(commit, value) {
  commit("SET_PARTNERS_LOADING", value);
}
