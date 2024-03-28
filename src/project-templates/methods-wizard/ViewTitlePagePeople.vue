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
import { defaults, initValue } from "./settingdefaults";

export default {
	name: "ViewTitlePagePeople",

	components: {
		InputTextSingleLineMulti
	},
	data() {
		return {
			authors: initValue(
				"author",
				this.$tera.state.author,
				defaults.titlepage.authors
			),
			acknowledgements: initValue(
				"acknowledgements",
				this.$tera.state.acknowledgements,
				defaults.titlepage.acknowledgements
			)
		};
	}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
