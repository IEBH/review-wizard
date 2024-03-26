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
			console.log("authors:" + this.$tera.state.author);
			if (this.$tera.state.author == undefined) {
				this.$tera.setProjectStateDefaults(
					`author`,
					DefaultValue.titlepage.authors
				);
				console.log("authors undefind:" + this.$tera.state.author);
			}
			return this.$tera.state.author;
		}
	},
	mounted() {
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
