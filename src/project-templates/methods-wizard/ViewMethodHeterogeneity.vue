<template>
	<div>
		<h1>Assessment of Heterogeneity</h1>

		<InputSelectDropdown
			question="What was used to measure heterogeneity?"
			v-model="$tera.state.heterogeneityMeasurement"
			:options="heterogeneityMeasurementOptions"
		/>

		<InputTextSingleLine
			v-if="$tera.state.heterogeneityMeasurement == 'Other'"
			question="Type heterogeneity measurement below..."
			v-model="$tera.state.heterogeneityMeasurementOther"
		/>

		<PreviewOutput :component="outputComponent" />
	</div>
</template>

<script>
import OutputHeterogeneity from "./OutputHeterogeneity.vue";
import PreviewOutput from "@/components/BasePreviewOutput.vue";
import InputSelectDropdown from "@/components/InputSelectDropdown.vue";
//import InputSelectYesNo from "./InputSelectYesNo.vue";
//import InputTextMultiLine from "./InputTextMultiLine.vue";
import InputTextSingleLine from "@/components/InputTextSingleLine.vue";

//import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodHeterogeneity",

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
