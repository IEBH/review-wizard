<template>
	<div>
		<h1>Assessment of the Risk of Bias</h1>

		<InputTextNumber
			question="The number of authors reviewed the risk of bias?"
			v-model="numberOfRiskOfBiasAuthors"
		/>

		<InputSelectMultiWithoutOthers
			question="Which authors assessed the risk of bias?"
			v-model="assessedRobAuthors"
			:options="this.asRobAuthors"
		/>

		<InputSelectYesNo
			question="Did each author independently review the risk of bias?"
			v-model="isIndependent"
		/>

		<InputSelectMulti
			question="Risk of bias was determined using the:"
			:options="options.tools"
			v-model="riskOfBiasToolUsed"
		/>

		<BasePreviewOutput :component="outputComponent" />
	</div>
</template>

<script>
import OutputAssesmentOfTheRiskOfBias from "./OutputAssessmentOfTheRiskOfBias";
import BasePreviewOutput from "@/components/BasePreviewOutput.vue";
import InputSelectYesNo from "@/components/InputSelectYesNo.vue";
import InputSelectMulti from "@/components/InputSelectMulti.vue";
import InputSelectMultiWithoutOthers from "@/components/InputSelectMultiWithoutOther.vue";

import DefaultValue from "./DefaultValue";
//import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodAssessmentOfTheRiskOfBias",

	components: {
		InputSelectYesNo,
		InputSelectMulti,
		InputSelectMultiWithoutOthers,
		BasePreviewOutput
	},
	computed: {
		assessedRobAuthors() {
			this.$tera.setProjectStateDefaults(
				"assessedRobAuthors",
				DefaultValue.riskOfBias.assessedRobAuthors
			);
			return this.$tera.state.assessedRobAuthors;
		},
		isIndependent() {
			this.$tera.setProjectStateDefaults(
				"isIndependent",
				DefaultValue.riskOfBias.isIndependent
			);
			return this.$tera.state.isIndependent;
		},
		riskOfBiasToolUsed() {
			this.$tera.setProjectStateDefaults(
				"riskOfBiasToolUsed",
				DefaultValue.riskOfBias.toolUsed
			);
			return this.$tera.state.riskOfBiasToolUsed;
		},
		asRobAuthors() {
			let da = this.$tera.state.author?.map(el => {
				return { label: el };
			});
			this.$tera.state.planTable?.rows.forEach(el => {
				if (el.tasks == "Risk of Bias assessment" && el.peopleInvolved != "") {
					da = el.peopleInvolved;
				}
			});
			return da;
		},
		numberOfRiskOfBiasAuthors() {
			return this.$tera.state.assessedRobAuthors?.length;
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
