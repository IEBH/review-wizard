<template>
	<div>
		<h1>People</h1>

		<InputTextSingleLineMulti
			question="Who are the authors in the study?"
			:value="titlepage.authors"
			@input="updateField('authors', $event)"
			placeholder="e.g. Justin Clark"
		/>

		<InputTextSingleLineMulti
			question="Who else helped with the study? (Acknowledgements)"
			:value="titlepage.acknowledgements"
			@input="updateField('acknowledgements', $event)"
			placeholder="e.g. Justin Clark"
		/>
	</div>
</template>
<script>
import InputTextSingleLineMulti from "./InputTextSingleLineMulti.vue";

import deepstreamMixin from "../mixins/DeepstreamMixin";
export default {
	name: "ViewTitlePagePeople",
	mixins: [deepstreamMixin("titlepage")],
	components: {
		InputTextSingleLineMulti
	}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
