<template>
	<div>
		<h1>Introduction</h1>
		<InputEditorMultiline
			question="What is the Introduction?"
			:value="introduction.intro"
			@input="updateField('intro', $event)"
		/>
	</div>
</template>
<script>
import deepstreamMixin from "@/mixins/DeepstreamMixin";
import OutputIntroduction from "./OutputIntroduction.vue";
import InputEditorMultiline from "@/components/InputEditorMultiline.vue";

export default {
	mixins: [deepstreamMixin("introduction")],
	components: {
		InputEditorMultiline
	},
	data() {
		return {
			outputComponent: OutputIntroduction
		};
	}
};
</script>
