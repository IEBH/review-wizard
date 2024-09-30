<template>
	<div>
		<h1>Assessment of the Risk of Bias</h1>

        <InputSelectYesNo
			question="As quality/risk of bias assessment is optional, are you still planning on assessing quality/risk of bias (optional)"
			v-model="$tera.state.riskOfBiasOptional"
		/>

        <Accordion
			v-if="$tera.state.riskOfBiasOptional"
			style="margin-top: 50px; border: 1px solid black;"
		>
                <AccordionTab header="Risk of bias/quality" :active="false">

                    <InputTextNumber
			            question="The number of authors reviewed the risk of bias?"
			            v-model="$tera.state.numberOfRiskOfBiasAuthors"
		            />

                    <InputSelectMultiWithoutOthers
			            question="Which authors assessed the risk of bias?"
			            v-model="$tera.state.assessedRobAuthors"
			            :options="this.asRobAuthors"
		            />

                    <InputSelectYesNo
			            question="Did each author independently review the risk of bias?"
			            v-model="$tera.state.isIndependent"
		            />

                    <InputSelectMulti
			            question="Risk of bias was determined using the:"
			            :options="options.tools"
			            v-model="$tera.state.riskOfBiasToolUsed"
		            />
                </AccordionTab>
        </Accordion>

        <BasePreviewOutput :component="outputComponent" />
	</div>
</template>

<script>
import OutputAssesmentOfTheRiskOfBias from "./OutputAssessmentOfTheRiskOfBias";
import BasePreviewOutput from "@/components/BasePreviewOutput.vue";
import InputSelectYesNo from "@/components/InputSelectYesNo.vue";
import InputSelectMulti from "@/components/InputSelectMulti.vue";
import InputSelectMultiWithoutOthers from "@/components/InputSelectMultiWithoutOther.vue";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

export default {
	name: "ViewScopingAssessmentOfTheRiskOfBias",

	components: {
        Accordion,
        AccordionTab,
		InputSelectYesNo,
		InputSelectMulti,
		InputSelectMultiWithoutOthers,
		BasePreviewOutput
	},
	computed: {
		asRobAuthors() {
			let da = this.$tera.state.author?.map(el => {
				return { label: el };
			});
			this.$tera.state.planTable?.rows.forEach(el => {
				if (el.tasks == "Risk of Bias assessment" && el.peopleInvolved != "") {
					//da = el.peopleInvolved;
					da = [...el.peopleInvolved, ...da];
					this.checkUnion(da);
				}
			});
			return da;
		},
		numberOfRiskOfBiasAuthors() {
			return this.$tera.state.assessedRobAuthors?.length;
		}
	},
	methods: {
		checkUnion(U) {
			for (var i = 0; i < U.length; i++) {
				for (var j = i + 1; j < U.length; j++) {
					if (U[i].label == U[j].label) {
						U.splice(j, 1);
						j--;
					}
				}
			}
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
