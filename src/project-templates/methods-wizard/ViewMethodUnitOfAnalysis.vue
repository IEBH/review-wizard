<template>
	<div>
		<h1>Unit of Analysis</h1>
		<!-- INDIVIDUAL -->
		<InputSelectDropdown
			question="What was the unit of analysis?"
			v-model="type"
			:options="unitOfAnalysisOptions"
		/>

		<!-- INDIVIDUAL AND OTHER -->
		<InputTextSingleLine
			v-if="unitOfAnalysis.type === 'Individual and other'"
			question="Where data on the number of individuals with primary and secondary outcomes of interest was not available, we extracted the information as it was presented (e.g. we..."
			v-model="$tera.state.example"
			placeholder="e.g. extracted the reported effect measure and its 95% confidence interval"
		/>
		<InputTextSingleLine
			v-if="unitOfAnalysis.type === 'Individual and other'"
			question="Where the unit of randomisation was not at individual level we..."
			v-model="$tera.state.example2"
			placeholder="e.g. compared individuals after adjusting for clustering"
		/>

		<!-- OTHER -->
		<InputTextSingleLine
			v-if="unitOfAnalysis.type === 'Other'"
			question="The unit of analysis was..."
			v-model="$tera.state.otherType"
			placeholder="e.g. repeated measures within individuals"
		/>

		<BasePreviewOutput :component="outputComponent" />
	</div>
</template>

<script>
import OutputUnitOfAnalysis from "./OutputUnitOfAnalysis.vue";
import DefaultValue from "./DefaultValue";
//import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodUnitOfAnalysis",
	computed: {
		type() {
			this.$tera.setProjectStateDefaults(
				"type",
				DefaultValue.unitOfAnalysis.type
			);
			return this.$tera.state.type;
		}
	},
	data() {
		return {
			unitOfAnalysisOptions: ["Individual", "Individual and other", "Other"],
			outputComponent: OutputUnitOfAnalysis
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
