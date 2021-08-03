import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import { DeepstreamClient } from "@deepstream/client";

const storeData = {
	state: {
		projectId: null,
		client: new DeepstreamClient("localhost:6020"),
		projectRecord: null,
		methodsRecord: null
	},
	mutations: {
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
			console.log("Loading Project:", `project/${projectId}`);
			if (projectId) {
				// Update store with project ID
				commit("setProjectId", projectId);
				// Login to deepstream
				state.client.login();
				// Set project record
				commit(
					"setProjectRecord",
					state.client.record.getRecord(`project/${projectId}`)
				);
				// Subscribe to project metadata
				var projectMetadata = await new Promise(resolve => {
					state.projectRecord.subscribe("metadata", metadata => {
						resolve(metadata);
					});
				});
				if (projectMetadata) {
					// Set methods record
					commit(
						"setMethodsRecord",
						state.client.record.getRecord(`methods/${projectMetadata.methods}`)
					);
				} else {
					console.error("Invalid project-id");
				}
			} else {
				console.error("No project id specified");
			}
		}
	}
};

// initialise Vuex
const store = new Vuex.Store(storeData);

export default store;
