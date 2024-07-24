<template>
	<div class="p-m-5">
		<div v-if="projectId">
			<h1>Welcome to the Review Wizard!</h1>
			<p>To start making changes, simply select a section from the left hand side and begin filling it in</p>
		</div>
		<div v-else>
			<h1>Loading project...</h1>
		</div>
	</div>
</template>

<script>
export default {
	name: "ViewHome",
	computed: {
		projectId() {
			return this.$store.state.projectId;
	    }
	},
	created() {
		// FIXME: We can bypass needing to handle new projects as TERA-fy does this all for us now
		return this.$store.dispatch("createProject");
	}
}
</script>
