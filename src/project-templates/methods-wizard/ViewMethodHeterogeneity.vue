<template>
	<div>
		<h1>Assessment of Heterogeneity</h1>

		<InputSelectDropdown
			question="What was used to measure heterogeneity?"
			:value="heterogeneityPublicationBiases.heterogeneityMeasurement"
			@input="updateField('heterogeneityMeasurement', $event)"
			:options="heterogeneityMeasurementOptions"
		/>

		<InputTextSingleLine
			v-if="heterogeneityPublicationBiases.heterogeneityMeasurement == 'Other'"
			question="Type heterogeneity measurement below..."
			:value="heterogeneityPublicationBiases.heterogeneityMeasurementOther"
			@input="updateField('heterogeneityMeasurementOther', $event)"
		/>

		<PreviewOutput
			:component="outputComponent"
			:data="heterogeneityPublicationBiases"
		/>
	</div>
</template>

<script>
import OutputHeterogeneity from "./OutputHeterogeneity.vue";
import PreviewOutput from "@/components/BasePreviewOutput.vue";
import InputSelectDropdown from "@/components/InputSelectDropdown.vue";
//import InputSelectYesNo from "./InputSelectYesNo.vue";
//import InputTextMultiLine from "./InputTextMultiLine.vue";
import InputTextSingleLine from "@/components/InputTextSingleLine.vue";

import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodHeterogeneity",
	mixins: [deepstreamMixin("heterogeneityPublicationBiases")],
	components: {
		InputSelectDropdown,
		PreviewOutput,
		InputTextSingleLine
	},
	data() {
		return {
			heterogeneityMeasurementOptions: [
				"I squared statistic",
				"H squared statistic",
				"R squared statistic",
				"Tau squared statistic",
				"HM2 statistic",
				"Q statistic",
				"Other"
			],
			//publicationBiasOptions: ["Funnel plot", "Egger's test", "Other"],
			outputComponent: OutputHeterogeneity
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
