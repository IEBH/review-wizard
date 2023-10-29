<template>
	<div>
		<h1>Measurement of Effect</h1>

		<InputSelectYesNo
			question="Were any meta-analysis performed?"
			:value="measurementOfEffect.isMetaAnalysis"
			@input="updateField('isMetaAnalysis', $event)"
		/>

		<InputSelectMulti
			v-if="measurementOfEffect.isMetaAnalysis"
			question="What software was used to conduct the meta-analysis?"
			:value="measurementOfEffect.toolUsed"
			@input="updateField('toolUsed', $event)"
			:options="toolUsedOptions"
		/>

		<InputSelectMulti
			v-if="measurementOfEffect.isMetaAnalysis"
			question="What measure was used to calculate the treatment effect for dichotomous outcomes?"
			:value="measurementOfEffect.dichotomousOutcomes"
			@input="updateField('dichotomousOutcomes', $event)"
			:options="dichotomousOutcomesOptions"
		/>

		<InputSelectMulti
			v-if="measurementOfEffect.isMetaAnalysis"
			question="What measure was used to calculate the treatment effect for continuous outcomes?"
			:value="measurementOfEffect.continuousOutcomes"
			@input="updateField('continuousOutcomes', $event)"
			:options="continuousOutcomesOptions"
		/>

		<InputSelectMulti
			v-if="measurementOfEffect.isMetaAnalysis"
			question="What measure was used to calculate the treatment effect for other outcomes?"
			:value="measurementOfEffect.otherOutcomes"
			@input="updateField('otherOutcomes', $event)"
			:options="otherOutcomesOptions"
		/>

		<InputTextNumber
			v-if="measurementOfEffect.isMetaAnalysis"
			question="How many studies reporting the same outcome triggered a meta-analysis"
			:value="measurementOfEffect.metaAnalysisThreshold"
			@input="updateField('metaAnalysisThreshold', $event)"
			placeholder="e.g. 3"
		/>

		<InputSelectDropdown
			v-if="measurementOfEffect.isMetaAnalysis"
			question="What model was used in meta-analysis?"
			:value="measurementOfEffect.metaAnalysisModelUsed"
			@input="updateField('metaAnalysisModelUsed', $event)"
			:options="metaAnalysisModelOptions"
		/>

		<BasePreviewOutput
			:component="outputComponent"
			:data="measurementOfEffect"
		/>
	</div>
</template>

<script>
import OutputMeasurementOfEffect from "./OutputMeasurementOfEffect.vue";

import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodMeasuementOfEffect",
	mixins: [deepstreamMixin("measurementOfEffect")],
	data() {
		return {
			numberOptions: ["1", "2", "3", "4", "5", "6"],
			toolUsedOptions: [
				{ label: "RevMan 5" },
				{ label: "Metan (Sata add-on)" },
				{ label: "Meta (R package)" },
				{ label: "Metafor (R package)" },
				{ label: "MetaXL (Excel add-on)" },
				{ label: "CMA (Comprehensive Meta-Analysis)" },
				{ label: "JBI SUMARI" },
				{ label: "SPSS" }
			],
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
