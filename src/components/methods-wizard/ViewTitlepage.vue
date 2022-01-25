<template>
	<div>
		<h1>Title Page</h1>
		<InputTextSingleLine
			question="What is the title of the study?"
			:value="titlepage.title"
			@input="updateField('title', $event)"
			placeholder="e.g. Blue-light therapy for acne vulgaris: a systematic review and meta-analysis"
		/>
		<InputTextSingleLineMulti
			question="Who are the authors in the study?"
			:value="titlepage.authors"
			@input="updateField('authors', $event)"
			placeholder="e.g. Justin Clark"
		/>
		<InputTextNumber
			question="What year will study be published?"
			:value="titlepage.year"
			@input="updateField('year', $event)"
		/>
	</div>
</template>

<script>
import InputTextNumber from "../InputTextNumber.vue";
import InputTextSingleLine from "../InputTextSingleLine.vue";
import InputTextSingleLineMulti from "../InputTextSingleLineMulti.vue";

import deepstreamMixin from "../../mixins/DeepstreamMixin";

export default {
	name: "ViewMethodPicot",
	mixins: [deepstreamMixin("titlepage")],
	components: {
		InputTextSingleLine,
		InputTextSingleLineMulti,
		InputTextNumber
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
