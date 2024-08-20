<template>
	<div class="p-m-5">
		<div v-if="projectId">
			<h1>Welcome to the {{ title }} Wizard!</h1>
			<p>To start making changes, simply select a section from the left hand side and begin filling it in</p>
		</div>
		<div v-else>
			<h1>Loading project...</h1>
		</div>
	</div>
</template>

<script>
export default {
	name: "HomePage",
    props: {
        title: {
            type: String,
            required: true
        }
    },
	computed: {
		projectId() {
			return this.$store.state.projectId;
	    }
	},
	created() {
		return this.$store.dispatch("createProject");
	}
}
</script>
