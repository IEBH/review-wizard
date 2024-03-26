<template>
	<div>
		<h1>People</h1>

		<InputTextSingleLineMulti
			question="Who are the authors in the study?"
			v-model="$tera.state.author"
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
import DefaultValue from "./DefaultValue";
//import deepstreamMixin from "@/mixins/DeepstreamMixin";
export default {
	name: "ViewTitlePagePeople",
	//mixins: [deepstreamMixin("titlepage")],
	components: {
		InputTextSingleLineMulti
	},
	created() {
		this.$tera.setProjectStateDefaults(
			`author`,
			DefaultValue.titlepage.authors
		);
		this.$tera.setProjectStateDefaults(
			`acknowledgements`,
			DefaultValue.titlepage.acknowledgements
		);
	}
	/*computed: {
		authors() {
			this.$tera.setProjectStateDefaults(
				`author`,
				DefaultValue.titlepage.authors
			);
			return this.$tera.state.author;
		},
		acknowledgements() {
			this.$tera.setProjectStateDefaults(
				`acknowledgements`,
				DefaultValue.titlepage.acknowledgements
			);
			return this.$tera.state.acknowledgements;
		}
	}*/
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
