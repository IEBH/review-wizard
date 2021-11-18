import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import { DeepstreamClient } from "@deepstream/client";

const getDefaultState = () => ({
	projectId: null,
	methodId: null,
	client: new DeepstreamClient("wss://data.sr-accelerator.com:6020"),
	projectRecord: null,
	methodsRecord: null
});

const storeData = {
	state: getDefaultState(),
	mutations: {
		reset(state) {
			Object.assign(state, getDefaultState());
			localStorage.clear();
		},
		setProjectId(state, id) {
			state.projectId = id;
			// Set local storage
			localStorage.setItem("projectId", id);
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
		createProject: async function(
			{ commit, state },
			{ name, owner, dateCreated }
		) {
			console.log("Adding project:", name);
			// Reset store
			commit("reset");
			// Login to deepstream
			await state.client.login();
			// ID for new project
			const id = state.client.getUid();
			// ID for methods section (in metadata)
			const methods = state.client.getUid();
			// Local metadata
			var projectMetadata = {
				name,
				owner,
				dateCreated,
				dateModified: dateCreated,
				methods
			};
			// Add new project to records and set metadata remotely
			commit(
				"setProjectRecord",
				state.client.record.getRecord(`project/${id}`)
			);
			await state.projectRecord.whenReady();
			state.projectRecord.set("metadata", projectMetadata);
			// Initialize the methods section
			if (projectMetadata && projectMetadata.methods) {
				// Update store with project ID
				commit("setProjectId", id);
				// Set methods record
				commit(
					"setMethodsRecord",
					state.client.record.getRecord(`methods/${projectMetadata.methods}`)
				);
			} else {
				throw new Error("Invalid project-id");
			}
		},
		initializeFromProjectId: async function({ commit, state }, projectId) {
			if (projectId) {
				console.log("Loading Project:", `project/${projectId}`);
				// Reset store
				commit("reset");
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
				if (projectMetadata && projectMetadata.methods) {
					// Update store with project ID
					commit("setProjectId", projectId);
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
