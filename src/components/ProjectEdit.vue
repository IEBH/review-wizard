<template>
	<router-view></router-view>
</template>

<script>
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
			if (this.prevId != projectId) {
				console.log("Initializing deepstream");
				// Initialize deepstream
				this.$store.dispatch("initialize", projectId);
			}
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
