<template>
	<div>
		<h1>Title Page</h1>
		<InputTextSingleLine
			question="What is the title of the study?"
			:value="$tera.state.name"
			@input="$tera.state.name = $event"
			placeholder="e.g. Blue-light therapy for acne vulgaris: a systematic review and meta-analysis"
		/>
		<InputTextSingleLine
			question="What is the short title for the study?"
			v-model="$tera.state.nameShort"
			placeholder="e.g. Blue-light"
		/>
		<InputTextNumber
			question="What year will study be published?"
			v-model="$tera.state.year"
		/>
	</div>
</template>

<script>
import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodPicot",
	mixins: [deepstreamMixin("titlepage")]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
