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
			v-model="acknowledgements"
			placeholder="e.g. Justin Clark"
		/>
	</div>
</template>
<script>
import InputTextSingleLineMulti from "@/components/InputTextSingleLineMulti.vue";
import DefaultValue from "./DefaultValue";
//import deepstreamMixin from "@/mixins/DeepstreamMixin";
export default {
	name: "ViewTitlePagePeople",
	//mixins: [deepstreamMixin("titlepage")],
	components: {
		InputTextSingleLineMulti
	},
	computed: {
		authors() {
			if (this.$tera.state.author === undefined) {
				this.$tera.setProjectStateDefaults(
					`author`,
					DefaultValue.titlepage.authors,
					this.$tera.setProjectState({ sync: false, save: true })
				);
				console.log("authors:" + this.$tera.state.author);
			}
			return this.$tera.state.author;
		},
		acknowledgements() {
			if (this.$tera.state.acknowledgements === undefined) {
				this.$tera.setProjectStateDefaults(
					`acknowledgements`,
					DefaultValue.titlepage.acknowledgements,
					this.$tera.setProjectState({ sync: false, save: true })
				);
			}
			return this.$tera.state.acknowledgements;
		}
	}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
