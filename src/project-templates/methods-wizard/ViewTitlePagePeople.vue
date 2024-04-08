<template>
	<div>
		<h1>People</h1>

		<InputTextSingleLineMulti
			question="Who are the authors in the study?"
			v-model="authors"
			placeholder="e.g. Justin Clark"
		/>

		<InputTextSingleLineMulti
			question="Who else helped with the study? (Acknowledgements)"
			v-model="$tera.state.acknowledgements"
			placeholder="e.g. Justin Clark"
		/>
	</div>
</template>
<script>
import InputTextSingleLineMulti from "@/components/InputTextSingleLineMulti.vue";
import { defaults } from "./settingdefaults";

export default {
	name: "ViewTitlePagePeople",

	components: {
		InputTextSingleLineMulti
	},
	computed: {
		authors() {
			if (this.$tera.state.author == undefined) {
				return this.$tera.setProjectStateDefaults(
					"author",
					defaults.titlepage.authors
				);
			} else return this.$tera.state.author;
		}
	},
	mounted() {
		/*if (this.$tera.state.author == undefined) {
			this.$tera.setProjectStateDefaults("author", defaults.titlepage.authors);
		}*/
		if (this.$tera.state.acknowledgements == undefined) {
			this.$tera.setProjectStateDefaults(
				"acknowledgements",
				defaults.titlepage.acknowledgements
			);
		}
	}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
