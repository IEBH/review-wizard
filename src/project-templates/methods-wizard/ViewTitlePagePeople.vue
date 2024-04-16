<template>
	<div>
		<h1>People</h1>

		<InputTextSingleLineMulti
			v-if="$tera.state.author != undefined"
			question="Who are the authors in the study?"
			v-model="$tera.state.author"
			placeholder="e.g. Justin Clark"
		/>

		<InputTextSingleLineMulti
			v-if="($tera.state.acknowledgements = undefined)"
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
	created() {
		if (this.$tera.state.author == undefined) {
			this.$tera
				.setProjectStateDefaults("author", defaults.titlepage.authors)
				.then(response => {
					console.log("setdefaultsResponse:" + response);
					console.log("this.$tera.state.author:" + this.$tera.state.author);
				});
		}
	},
	computed: {
		/*authors() {
			if (this.$tera.state.author == undefined) {
				let da = this.setAuthorDefaults();
				console.log("author:" + JSON.stringify(da));
				return da;
			}
			return this.$tera.state.author;
		},*/
		acknowledgements() {
			if (this.$tera.state.acknowledgements == undefined) {
				this.$tera.setProjectStateDefaults(
					"acknowledgements",
					defaults.titlepage.acknowledgements
				);
			}
			return this.$tera.state.acknowledgements;
		}
	}
	/*mounted() {
		if (this.$tera.state.author == undefined) {
			this.$tera.setProjectStateDefaults("author", defaults.titlepage.authors);
		}
		if (this.$tera.state.acknowledgements == undefined) {
			this.$tera.setProjectStateDefaults(
				"acknowledgements",
				defaults.titlepage.acknowledgements
			);
		}
	}*/
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
