<template>
	<div>
		<h1>Assessment of Heterogeneity and Publication Biases</h1>

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

		<InputSelectYesNo
			question="Was publication bias measured?"
			:value="heterogeneityPublicationBiases.isMeasuredPublicationBias"
			@input="updateField('isMeasuredPublicationBias', $event)"
		/>

		<div v-if="heterogeneityPublicationBiases.isMeasuredPublicationBias">
			<InputSelectDropdown
				question="We measured publication bias / small studies effect using"
				:value="heterogeneityPublicationBiases.biasMeasurement"
				@input="updateField('biasMeasurement', $event)"
				:options="publicationBiasOptions"
			/>

			<InputTextSingleLine
				v-if="heterogeneityPublicationBiases.biasMeasurement == 'Other'"
				question="We measured publication bias / small studies effect using:"
				:value="heterogeneityPublicationBiases.biasMeasurementOther"
				@input="updateField('biasMeasurementOther', $event)"
			/>
		</div>

		<InputTextMultiLine
			v-else
			question="We did not measure publication bias..."
			:value="heterogeneityPublicationBiases.didNotMeasure"
			@input="updateField('didNotMeasure', $event)"
		/>

		<BasePreviewOutput
			:component="outputComponent"
			:data="heterogeneityPublicationBiases"
		/>
	</div>
</template>

<script>
import OutputHeterogeneityPublicationBias from "./OutputHeterogeneityPublicationBias.vue";

import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodHeterogeneityPublicationBias",
	mixins: [deepstreamMixin("heterogeneityPublicationBiases")],
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
			publicationBiasOptions: ["Funnel plot", "Egger's test", "Other"],
			outputComponent: OutputHeterogeneityPublicationBias
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
