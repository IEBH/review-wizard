<template>
	<div>
		<h1>Title Page</h1>
		<InputTextSingleLine
			question="What is the title of the study?"
			:value="titlepage.title"
			@input="updateField('title', $event)"
			placeholder="e.g. Blue-light therapy for acne vulgaris: a systematic review and meta-analysis"
		/>
		<InputTextSingleLine
			question="What is the short title for the study?"
			:value="titlepage.titleshort"
			@input="updateField('titleshort', $event)"
			placeholder="e.g. Blue-light"
		/>

		<InputTextNumber
			question="What year will study be published?"
			:value="titlepage.year"
			@input="updateField('year', $event)"
		/>
	</div>
</template>

<script>
import InputTextNumber from "@/components/InputTextNumber.vue";
import InputTextSingleLine from "@/components/InputTextSingleLine.vue";
//import InputTextSingleLineMulti from "@/components/InputTextSingleLineMulti.vue";

import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodPicot",
	mixins: [deepstreamMixin("titlepage")],
	components: {
		InputTextSingleLine,
		InputTextNumber
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
