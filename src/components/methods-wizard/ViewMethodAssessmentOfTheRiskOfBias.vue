<template>
	<div>
		<h1>Assessment of the Risk of Bias</h1>

		<InputSelectDropdown
			question="How many review authors reviewed the risk of bias?"
			:value="riskOfBias.numberOfAuthors"
			@input="updateField('numberOfAuthors', $event)"
			:options="numberOptions"
		/>

		<InputSelectYesNo
			question="Did each author independently review the risk of bias?"
			:value="riskOfBias.isIndependent"
			@input="updateField('isIndependent', $event)"
		/>

		<InputSelectMulti
			question="Risk of bias was determined using the:"
			:value="riskOfBias.toolUsed"
			:options="options.tools"
			@input="updateField('toolUsed', $event)"
		/>

		<BasePreviewOutput :component="outputComponent" :data="riskOfBias" />
	</div>
</template>

<script>
import OutputAssesmentOfTheRiskOfBias from "./OutputAssessmentOfTheRiskOfBias";

import deepstreamMixin from "../../mixins/DeepstreamMixin";

export default {
	name: "ViewMethodAssessmentOfTheRiskOfBias",
	mixins: [deepstreamMixin("riskOfBias")],
	data() {
		return {
			numberOptions: ["1", "2", "3", "4", "5", "6"],
			outputComponent: OutputAssesmentOfTheRiskOfBias,
			options: {
				tools: [
					{ label: "Cochrane Risk of Bias tool" },
					{ label: "Cochrane Risk of Bias 2 tool" },
					{ label: "Jadad Scale" },
					{ label: "Newcastle-Ottawa Scale" },
					{ label: "MASTER scale" },
					{ label: "QUADAS-1" },
					{ label: "QUADAS-2" },
					{ label: "ROBINS-I" },
					{ label: "ROBINS-II" },
					{ label: "AMSTAR 1" },
					{ label: "AMSTAR 2" }
				]
			}
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
