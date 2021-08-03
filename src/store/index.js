import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import method from "./modules/method.js";
import titlepage from "./modules/titlepage.js";

const storeData = {
	modules: {
		method,
		titlepage
	},
	state: {
		methodsId: null,
		methodsRecord: null
	},
	mutations: {
		setMethodsRecord(state, record) {
			state.methodsRecord = record;
		}
	}
};

// initialise Vuex
const store = new Vuex.Store(storeData);

export default store;
