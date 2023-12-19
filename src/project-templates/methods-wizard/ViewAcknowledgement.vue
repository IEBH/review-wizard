<template>
	<div>
		<h1>Acknowledgement</h1>

		<InputSelectMultiWithoutOthers question="Was help provided to design the search?" :value="acknowledgement.designhelp"
			@input="updateField('designhelp', $event)" :options="this.dsAcknowledgementAuthors" />

		<InputSelectMultiWithoutOthers question="Was help provided with the statistical analysis?" :value="acknowledgement.statistical"
			@input="updateField('statistical', $event)" :options="this.dsAcknowledgementAuthors" />

		<InputSelectMultiWithoutOthers question="Was feedback provided on a draft of the manuscript?" :value="acknowledgement.manuscript"
			@input="updateField('manuscript', $event)" :options="this.dsAcknowledgementAuthors" />

		<PreviewOutput :component="outputComponent" :data="acknowledgement" />
	</div>
</template>

<script>

import InputSelectMultiWithoutOthers from "@/components/InputSelectMultiWithoutOther.vue";
import deepstreamMixin from "@/mixins/DeepstreamMixin";
import PreviewOutput from "@/components/BasePreviewOutput.vue";
import OutputAcknowledgement from "./OutputAcknowledgement.vue";

export default {
	name: "ViewAcknowledgement",
	mixins: [
		deepstreamMixin("titlepage"),
		deepstreamMixin("researchplan"),
		deepstreamMixin("search"),
		deepstreamMixin("acknowledgement"),
	],
	components: {
		InputSelectMultiWithoutOthers,
		PreviewOutput
	},
	computed: {
		dsAcknowledgementAuthors() {
			let da = this.titlepage.acknowledgements?.map(el => {
				return { label: el };
			});
			return da;
		},
	},
	methods: {
		
	},
	data() {
		return {
			outputComponent: OutputAcknowledgement
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>

