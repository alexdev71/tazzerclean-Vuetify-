import Vue from "vue";
import Vuex from "vuex";
import * as auth from "@/store/modules/auth.js";
import * as utils from "@/store/modules/utils.js";
import * as common from "@/store/modules/common.js";
import * as admin from "@/store/modules/admin.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    utils,
    common,
    admin
  },
});
