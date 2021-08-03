import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const storeData = {
	state: {
		projectId: null,
		methodsRecord: null
	},
	mutations: {
		setProjectId(state, id) {
			state.projectId = id;
		},
		setMethodsRecord(state, record) {
			state.methodsRecord = record;
		}
	}
};

// initialise Vuex
const store = new Vuex.Store(storeData);

export default store;
