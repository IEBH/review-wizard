<template>
	<router-view></router-view>
</template>

<script>
import { DeepstreamClient } from "@deepstream/client";

export default {
	name: "ProjectEdit",
	created() {
		this.initialize();
	},
	methods: {
		async initialize() {
			var projectId = this.$route.query["project-id"];
			console.log("Loading Project:", `project/${projectId}`);
			if (projectId) {
				var client = new DeepstreamClient("localhost:6020");
				// Login
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
