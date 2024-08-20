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


		<BasePreviewOutput :component="outputComponent" />
	</div>
</template>

<script>
import OutputSubgroupAndSensitivityAnalysis from "./OutputSubgroupAndSensitivityAnalysis.vue";
import InputSelectYesNo from "@/components/InputSelectYesNo.vue";
import InputTextSingleLineMulti from "@/components/InputTextSingleLineMulti.vue";

export default {
	name: "ViewScopingSubgroupAndSensitivityAnalysis",
    components: {
        InputSelectYesNo,
        InputTextSingleLineMulti
    },
	data() {
		return {
			outputComponent: OutputSubgroupAndSensitivityAnalysis
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
