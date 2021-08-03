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

		<PreviewOutput :component="outputComponent" :data="riskOfBias" />
	</div>
</template>

<script>
import { mapState } from "vuex";
import OutputAssesmentOfTheRiskOfBias from "./OutputAssessmentOfTheRiskOfBias";

import PreviewOutput from "./PreviewOutput.vue";

import InputSelectDropdown from "./InputSelectDropdown.vue";
import InputSelectYesNo from "./InputSelectYesNo.vue";
import InputSelectMulti from "./InputSelectMulti.vue";

export default {
	name: "ViewMethodAssessmentOfTheRiskOfBias",
	components: {
		InputSelectDropdown,
		InputSelectYesNo,
		InputSelectMulti,
		PreviewOutput
	},
	computed: mapState({
		riskOfBias: state => state.method.doc.riskOfBias
	}),
	methods: {
		updateField(field, value) {
			this.$store.dispatch("method/set", {
				riskOfBias: { [field]: value }
			});
		}
	},
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
