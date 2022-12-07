<template>
	<div>
		<h1>Assessment of the Risk of Bias</h1>

		<InputSelectDropdown
			question="How many review authors reviewed the risk of bias?"
			:value="riskOfBias.numberOfAuthors"
			@input="updateField('numberOfAuthors', $event)"
			:options="numberOptions"
		/>

		<InputSelectMulti
			question="Which authors assessed the risk of bias?"
			:value="riskOfBias.assessedRobAuthors"
			@input="updateField('assessedRobAuthors', $event)"
			:options="this.asRobAuthors"
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

		<PreviewOutput :component="outputComponent" :data="riskOfBias" />
	</div>
</template>

<script>
import OutputAssesmentOfTheRiskOfBias from "./OutputAssessmentOfTheRiskOfBias";
import PreviewOutput from "./PreviewOutput.vue";
import InputSelectDropdown from "./InputSelectDropdown.vue";
import InputSelectYesNo from "./InputSelectYesNo.vue";
import InputSelectMulti from "./InputSelectMulti.vue";

import deepstreamMixin from "../mixins/DeepstreamMixin";

export default {
	name: "ViewMethodAssessmentOfTheRiskOfBias",
	mixins: [
		deepstreamMixin("researchplan"),
		deepstreamMixin("titlepage"),
		deepstreamMixin("riskOfBias")
	],
	components: {
		InputSelectDropdown,
		InputSelectYesNo,
		InputSelectMulti,
		PreviewOutput
	},
	data() {
		return {
			numberOptions: ["1", "2", "3", "4", "5", "6"],
			asRobAuthors: [], //--assessed the RoB
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
	},
	mounted() {
		this.asRobAuthors = this.titlepage.authors.map(el => {
			return { label: el };
		});
		this.researchplan.planTable.rows.forEach(el => {
			if (
				el.tasks == "16. Risk of Bias assessment" &&
				el.peopleInvolved != ""
			) {
				this.asRobAuthors = el.peopleInvolved;
			}
		});
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
