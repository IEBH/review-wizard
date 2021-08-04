import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import { DeepstreamClient } from "@deepstream/client";

const getDefaultState = () => ({
	projectId: null,
	client: new DeepstreamClient("localhost:6020"),
	projectRecord: null,
	methodsRecord: null
});

const storeData = {
	state: getDefaultState(),
	mutations: {
		reset(state) {
			Object.assign(state, getDefaultState());
		},
		setProjectId(state, id) {
			state.projectId = id;
		},
		setClient(state, client) {
			state.client = client;
		},
		setProjectRecord(state, record) {
			state.projectRecord = record;
		},
		setMethodsRecord(state, record) {
			state.methodsRecord = record;
		}
	},
	actions: {
		initialize: async function({ commit, state }, projectId) {
			if (projectId) {
				console.log("Loading Project:", `project/${projectId}`);
				// Reset store
				commit("reset");
				// Update store with project ID
				commit("setProjectId", projectId);
				// Login to deepstream
				await state.client.login();
				// Set project record
				commit(
					"setProjectRecord",
					state.client.record.getRecord(`project/${projectId}`)
				);
				// Get the project metadata
				await state.projectRecord.whenReady();
				var projectMetadata = state.projectRecord.get("metadata");
				if (projectMetadata) {
					// Set methods record
					commit(
						"setMethodsRecord",
						state.client.record.getRecord(`methods/${projectMetadata.methods}`)
					);
				} else {
					throw new Error("Invalid project-id");
				}
			} else {
				throw new Error("No project id specified");
			}
		}
	}
};

// initialise Vuex
const store = new Vuex.Store(storeData);

export default store;
