<template>
	<div>
		<h1>Measurement of Effect</h1>

		<InputTextSingleLine
			question="What software was used to conduct the meta-analysis?"
			:value="measurementOfEffect.toolUsed"
			@input="updateField('toolUsed', $event)"
			placeholder="e.g. RevMan 5"
		/>

		<InputSelectMulti
			question="What measure was used to calculate the treatment effect for dichotomous outcomes?"
			:value="measurementOfEffect.dichotomousOutcomes"
			@input="updateField('dichotomousOutcomes', $event)"
			:options="dichotomousOutcomesOptions"
		/>

		<InputSelectMulti
			question="What measure was used to calculate the treatment effect for continuous outcomes?"
			:value="measurementOfEffect.continuousOutcomes"
			@input="updateField('continuousOutcomes', $event)"
			:options="continuousOutcomesOptions"
		/>

		<InputSelectMulti
			question="What measure was used to calculate the treatment effect for other outcomes?"
			:value="measurementOfEffect.otherOutcomes"
			@input="updateField('otherOutcomes', $event)"
			:options="otherOutcomesOptions"
		/>

		<InputTextNumber
			question="How many studies reporting the same outcome triggered a meta-analysis"
			:value="measurementOfEffect.metaAnalysisThreshold"
			@input="updateField('metaAnalysisThreshold', $event)"
			placeholder="e.g. 3"
		/>

		<InputSelectDropdown
			question="What model was used in meta-analysis?"
			:value="measurementOfEffect.metaAnalysisModelUsed"
			@input="updateField('metaAnalysisModelUsed', $event)"
			:options="metaAnalysisModelOptions"
		/>

		<PreviewOutput :component="outputComponent" :data="measurementOfEffect" />
	</div>
</template>

<script>
import { mapState } from "vuex";
import OutputMeasurementOfEffect from "./OutputMeasurementOfEffect";

import PreviewOutput from "./PreviewOutput.vue";

import InputSelectDropdown from "./InputSelectDropdown.vue";
import InputSelectMulti from "./InputSelectMulti.vue";
import InputTextSingleLine from "./InputTextSingleLine.vue";
import InputTextNumber from "./InputTextNumber.vue";

export default {
	name: "ViewMethodMeasuementOfEffect",
	components: {
		InputSelectDropdown,
		InputSelectMulti,
		InputTextSingleLine,
		InputTextNumber,
		PreviewOutput
	},
	computed: mapState({
		measurementOfEffect: state => state.method.doc.measurementOfEffect
	}),
	methods: {
		updateField(field, value) {
			this.$store.dispatch("method/set", {
				measurementOfEffect: { [field]: value }
			});
		}
	},
	data() {
		return {
			numberOptions: ["1", "2", "3", "4", "5", "6"],
			dichotomousOutcomesOptions: [
				{ label: "Odds ratios" },
				{ label: "Risk ratios" }
			],
			continuousOutcomesOptions: [
				{ label: "Mean difference" },
				{ label: "Standardised mean difference" }
			],
			otherOutcomesOptions: [
				{ label: "Rate ratios" },
				{ label: "Hazard ratio" }
			],
			metaAnalysisModelOptions: ["Random effects", "Fixed effects"],
			outputComponent: OutputMeasurementOfEffect
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
