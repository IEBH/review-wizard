<template>
	<div>
		<h1>Acknowledgement</h1>

		<InputSelectMultiWithoutOthers
			question="Was help provided to design the search?"
			:value="$tera.state.designhelp"
			:options="this.dsAcknowledgementAuthors"
		/>

		<InputSelectMultiWithoutOthers
			question="Was help provided with the statistical analysis?"
			:value="$tera.state.statistical"
			:options="this.dsAcknowledgementAuthors"
		/>

		<InputSelectMultiWithoutOthers
			question="Was feedback provided on a draft of the manuscript?"
			:value="$tera.state.manuscript"
			:options="this.dsAcknowledgementAuthors"
		/>

		<PreviewOutput :component="outputComponent" />
	</div>
</template>

<script>
import InputSelectMultiWithoutOthers from "@/components/InputSelectMultiWithoutOther.vue";
//import deepstreamMixin from "@/mixins/DeepstreamMixin";
import PreviewOutput from "@/components/BasePreviewOutput.vue";
import OutputAcknowledgement from "./OutputAcknowledgement.vue";

export default {
	name: "ViewAcknowledgement",

	components: {
		InputSelectMultiWithoutOthers,
		PreviewOutput
	},
	computed: {
		dsAcknowledgementAuthors() {
			let da = this.$tera.state.acknowledgements?.map(el => {
				return { label: el };
			});
			return da;
		},
		acknowledgements() {
			return {
				designhelp: this.$tera.state.designhelp,
				statistical: this.$tera.state.statistical,
				manuscript: this.$tera.state.manuscript
			};
		}
	},
	methods: {},
	data() {
		return {
			outputComponent: OutputAcknowledgement
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
