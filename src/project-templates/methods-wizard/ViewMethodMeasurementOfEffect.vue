<template>
	<div>
		<h1>Measurement of Effect</h1>

		<InputSelectYesNo
			question="Were any meta-analysis performed?"
			:vlue="$tera.state.isMetaAnalysis"
		/>

		<InputSelectMulti
			v-if="$tera.state.isMetaAnalysis"
			question="What software was used to conduct the meta-analysis?"
			:value="$tera.state.toolUsed"
			:options="toolUsedOptions"
		/>

		<InputSelectMulti
			v-if="$tera.state.isMetaAnalysis"
			question="What measure was used to calculate the treatment effect for dichotomous outcomes?"
			:value="$tera.state.dichotomousOutcomes"
			:options="dichotomousOutcomesOptions"
		/>

		<InputSelectMulti
			v-if="$tera.state.isMetaAnalysis"
			question="What measure was used to calculate the treatment effect for continuous outcomes?"
			:value="$tera.state.continuousOutcomes"
			:options="continuousOutcomesOptions"
		/>

		<InputSelectMulti
			v-if="$tera.state.isMetaAnalysis"
			question="What measure was used to calculate the treatment effect for other outcomes?"
			:value="$tera.state.otherOutcomes"
			:options="otherOutcomesOptions"
		/>

		<InputTextNumber
			v-if="$tera.state.isMetaAnalysis"
			question="How many studies reporting the same outcome triggered a meta-analysis"
			:value="$tera.state.metaAnalysisThreshold"
			placeholder="e.g. 3"
		/>

		<InputSelectDropdown
			v-if="$tera.state.isMetaAnalysis"
			question="What model was used in meta-analysis?"
			:value="$tera.state.metaAnalysisModelUsed"
			:options="metaAnalysisModelOptions"
		/>

		<BasePreviewOutput :component="outputComponent" />
	</div>
</template>

<script>
import OutputMeasurementOfEffect from "./OutputMeasurementOfEffect";

//import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodMeasuementOfEffect",
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
