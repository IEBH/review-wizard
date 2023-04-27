<template>
	<div>
		<h1>Assessment of Publication Biases</h1>

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
			v-bind:value="heterogeneityPublicationBiases.didNotMeasure"
			@input="updateField('didNotMeasure', $event)"
		/>

		<PreviewOutput
			:component="outputComponent"
			:data="heterogeneityPublicationBiases"
		/>
	</div>
</template>

<script>
import OutputPublicationBias from "./OutputPublicationBias.vue";
import PreviewOutput from "@/components/BasePreviewOutput.vue";
import InputSelectDropdown from "@/components/InputSelectDropdown.vue";
import InputSelectYesNo from "@/components/InputSelectYesNo.vue";
import InputTextMultiLine from "@/components/InputTextMultiLine.vue";
import InputTextSingleLine from "@/components/InputTextSingleLine.vue";

import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodHeterogeneityPublicationBias",
	mixins: [deepstreamMixin("heterogeneityPublicationBiases")],
	components: {
		InputSelectDropdown,
		InputSelectYesNo,
		InputTextMultiLine,
		PreviewOutput,
		InputTextSingleLine
	},
	data() {
		return {
			publicationBiasOptions: ["Funnel plot", "Egger's test", "Other"],
			outputComponent: OutputPublicationBias
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
