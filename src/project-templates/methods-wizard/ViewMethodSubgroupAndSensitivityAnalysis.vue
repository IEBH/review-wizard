<template>
	<div>
		<h1>Subgroup and Sensitivity Analysis</h1>

		<InputSelectYesNo
			question="Were subgroup analyses performed?"
			v-model="$tera.state.isSubgroupAnalysis"
		/>

		<InputTextSingleLineMulti
			v-if="$tera.state.isSubgroupAnalysis"
			question="Which subgroup analyses were performed?"
			v-model="$tera.state.subgroupAnalysis"
			placeholder="e.g. children less than 5 years old and children greater than 5 years old"
		/>

		<InputTextMultiLine
			v-else
			question="Why was subgroup analysis not performed?"
			v-model="$tera.state.whyNotSubgroupAnalysis"
		/>

		<InputSelectYesNo
			question="Were sensitivity analyses performed?"
			v-model="$tera.state.isSensitivityAnalysis"
		/>

		<InputTextSingleLineMulti
			v-if="$tera.state.isSensitivityAnalysis"
			question="Which sensitivity analyses were performed?"
			v-model="$tera.state.sensitivityAnalysis"
			placeholder="e.g. children who drank more than 8 litres a day"
		/>

		<InputTextMultiLine
			v-else
			question="Why was sensitivity analysis not performed?"
			v-model="$tera.state.whyNotSensitivityAnalysis"
		/>

		<BasePreviewOutput :component="outputComponent" />
	</div>
</template>

<script>
import OutputSubgroupAndSensitivityAnalysis from "./OutputSubgroupAndSensitivityAnalysis.vue";

export default {
	name: "ViewMethodSubgroupAndSensitivityAnalysis",
	data() {
		return {
			outputComponent: OutputSubgroupAndSensitivityAnalysis
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
