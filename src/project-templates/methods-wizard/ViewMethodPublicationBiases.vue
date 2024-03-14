<template>
	<div>
		<h1>Assessment of Publication Biases</h1>

		<InputSelectYesNo
			question="Was publication bias measured?"
			:value="$tera.state.isMeasuredPublicationBias"
		/>

		<div v-if="heterogeneityPublicationBiases.isMeasuredPublicationBias">
			<InputSelectDropdown
				question="We measured publication bias / small studies effect using"
				:value="$tera.state.biasMeasurement"
				:options="publicationBiasOptions"
			/>

			<InputTextSingleLine
				v-if="$tera.state.biasMeasurement == 'Other'"
				question="We measured publication bias / small studies effect using:"
				:value="$tera.state.biasMeasurementOther"
			/>
		</div>

		<InputTextMultiLine
			v-else
			question="We did not measure publication bias..."
			:placeholder="placeholder"
			:value="$tera.state.didNotMeasure"
		/>

		<PreviewOutput :component="outputComponent" />
	</div>
</template>

<script>
import OutputPublicationBias from "./OutputPublicationBias.vue";
import PreviewOutput from "@/components/BasePreviewOutput.vue";
import InputSelectDropdown from "@/components/InputSelectDropdown.vue";
import InputSelectYesNo from "@/components/InputSelectYesNo.vue";
import InputTextMultiLine from "@/components/InputTextMultiLine.vue";
import InputTextSingleLine from "@/components/InputTextSingleLine.vue";

//import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodHeterogeneityPublicationBias",

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
			placeholder: "because fewer than 10 studies were included",
			outputComponent: OutputPublicationBias
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
