<template>
	<router-view></router-view>
</template>

<script>
import { DeepstreamClient } from "@deepstream/client";

export default {
	name: "ProjectEdit",
	created() {
		this.refresh();
	},
	computed: {
		prevId() {
			return this.$store.state.projectId;
		}
	},
	watch: {
		"$route.params.projectId"() {
			this.refresh();
		}
	},
	methods: {
		async refresh() {
			var projectId =
				this.$route.query["project-id"] || this.$route.params.projectId;
			if (this.prevId !== projectId) {
				console.log("Loading Project:", `project/${projectId}`);
				if (projectId) {
					// Update store with project ID
					this.$store.commit("setProjectId", projectId);
					// Inizialize deepstream client
					var client = new DeepstreamClient("localhost:6020");
					// Login to deepstream
					client.login();
					// Add project record
					var projectRecord = client.record.getRecord(`project/${projectId}`);
					// Subscribe to project metadata
					var projectMetadata = await new Promise(resolve => {
						projectRecord.subscribe("metadata", metadata => {
							resolve(metadata);
						});
					});
					if (projectMetadata) {
						// Add methods record
						var methodsRecord = client.record.getRecord(
							`methods/${projectMetadata.methods}`
						);
						// Set methods record to store
						this.$store.commit("setMethodsRecord", methodsRecord);
					} else {
						console.error("Invalid project-id");
					}
				} else {
					console.error("No project id specified");
				}
			}
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
