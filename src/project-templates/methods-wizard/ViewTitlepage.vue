<template>
	<div>
		<h1>Title Page</h1>
		<InputTextSingleLine
			question="What is the title of the study?"
			v-model="$tera.state.title"
			placeholder="e.g. Blue-light therapy for acne vulgaris: a systematic review and meta-analysis"
		/>
		<InputTextSingleLine
			question="What is the short title for the study?"
			v-mode="$tera.state.titleshort"
			placeholder="e.g. Blue-light"
		/>

		<InputTextNumber
			question="What year will study be published?"
			v-mode="$tera.state.year"
		/>
		<pre>$TERA.state: {{ $tera.state }}</pre>
	</div>
</template>

<script>
import InputTextNumber from "@/components/InputTextNumber.vue";
import InputTextSingleLine from "@/components/InputTextSingleLine.vue";
//import InputTextSingleLineMulti from "@/components/InputTextSingleLineMulti.vue";

//import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodPicot",
	components: {
		InputTextSingleLine,
		InputTextNumber
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
