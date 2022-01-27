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

const getDeepstreamPath = async () => {
	const { deepstreamPath } = await import(
		"../components/" + process.env.VUE_APP_PROJECT + "/index.js"
	);
	return deepstreamPath;
};

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
			const methodsId = state.client.getUid();
			// Deepstream path (varies based on project)
			const deepstreamPath = await getDeepstreamPath();
			// Local metadata
			var projectMetadata = {
				name,
				owner,
				dateCreated,
				dateModified: dateCreated,
				[deepstreamPath]: methodsId
			};
			// Add new project to records and set metadata remotely
			commit(
				"setProjectRecord",
				state.client.record.getRecord(`project/${id}`)
			);
			await state.projectRecord.whenReady();
			state.projectRecord.set("metadata", projectMetadata);
			// Initialize the methods section
			if (projectMetadata && projectMetadata[deepstreamPath]) {
				// Update store with project ID
				commit("setProjectId", id);
				// Set methods record
				commit(
					"setMethodsRecord",
					state.client.record.getRecord(
						`${deepstreamPath}/${projectMetadata[deepstreamPath]}`
					)
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
				// Deepstream path (varies based on project)
				const deepstreamPath = await getDeepstreamPath();
				// Fetch methods project based on id
				if (projectMetadata && projectMetadata[deepstreamPath]) {
					// Update store with project ID
					commit("setProjectId", projectId);
					// Set methods record
					commit(
						"setMethodsRecord",
						state.client.record.getRecord(
							`${deepstreamPath}/${projectMetadata[deepstreamPath]}`
						)
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
