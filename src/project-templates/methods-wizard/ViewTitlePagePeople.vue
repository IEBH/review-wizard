<template>
	<div>
		<h1>People</h1>

		<InputTextSingleLineMulti
			v-if="authors"
			question="Who are the authors in the study?"
			v-model="authors"
			placeholder="e.g. Justin Clark"
		/>

		<InputTextSingleLineMulti
			v-if="acknowledgements"
			question="Who else helped with the study? (Acknowledgements)"
			v-model="acknowledgements"
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
	watch: {
		authors: () => {
			console.log("author:" + this.authors);
		},
		acknowledgements: () => {
			console.log("acknowledgements:" + this.acknowledgements);
		}
	},
	async mounted() {
		if (this.$tera.state.author == undefined) {
			this.authors = await this.$tera.setProjectStateDefaults(
				"author",
				defaults.titlepage.authors
			);
		} else {
			this.authors = this.$tera.state.author;
		}

		if (this.$tera.state.acknowledgements == undefined) {
			this.acknowledgements = await this.$tera.setProjectStateDefaults(
				"acknowledgements",
				defaults.titlepage.acknowledgements
			);
		} else {
			this.acknowledgements = this.$tera.state.acknowledgements;
		}
	}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
