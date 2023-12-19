<template>
	<div>
		<h1>Assessment of the Risk of Bias</h1>

		<InputTextNumber
			question="The number of authors reviewed the risk of bias?"
			:value="numberOfRiskOfBiasAuthors"
		/>

		<InputSelectMultiWithoutOthers
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

		<BasePreviewOutput :component="outputComponent" :data="riskOfBias" />
	</div>
</template>

<script>
import OutputAssesmentOfTheRiskOfBias from "./OutputAssessmentOfTheRiskOfBias";
import BasePreviewOutput from "@/components/BasePreviewOutput.vue";
import InputSelectYesNo from "@/components/InputSelectYesNo.vue";
import InputSelectMulti from "@/components/InputSelectMulti.vue";
import InputSelectMultiWithoutOthers from "@/components/InputSelectMultiWithoutOther.vue";
import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodAssessmentOfTheRiskOfBias",
	mixins: [
		deepstreamMixin("researchplan"),
		deepstreamMixin("titlepage"),
		deepstreamMixin("riskOfBias")
	],
	components: {
		InputSelectYesNo,
		InputSelectMulti,
		InputSelectMultiWithoutOthers,
		BasePreviewOutput
	},
	computed: {
		asRobAuthors() {
			let da = this.titlepage.authors?.map(el => {
				return { label: el };
			});
			this.researchplan.planTable?.rows.forEach(el => {
				if (el.tasks == "Risk of Bias assessment" && el.peopleInvolved != "") {
					da = el.peopleInvolved;
				}
			});
			return da;
		},
		numberOfRiskOfBiasAuthors() {
			return this.riskOfBias.assessedRobAuthors?.length;
		}
	},
	data() {
		return {
			numberOptions: ["1", "2", "3", "4", "5", "6"],
			//asRobAuthors: [], //--assessed the RoB
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
