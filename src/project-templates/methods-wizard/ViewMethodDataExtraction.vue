<template>
	<div>
		<h1>Data Extraction</h1>

		<InputSelectDropdown
			question="How many studies was the data extraction form piloted on? (for study characteristics and outcome data)"
			v-model="$tera.state.numberOfStudies"
			:options="numberOptions"
		/>

		<InputTextNumber
			question="How many study authors extracted the following data from included studies?"
			v-model="numberOfExtractors"
		/>

		<!--<InputSelectDropdown
			question="How many study authors extracted the following data from included studies?"
			:value="extraction.numberOfExtractors"
			@input="updateField('numberOfExtractors', $event)"
			:options="extractorsOption"
		/>-->

		<InputSelectMultiWithoutOthers
			question="Which author/s performed data extraction?"
			v-model="$tera.state.extractionAuthors"
			:options="
				/*titlepage.authors.map(el => {
					return { label: el };
				})*/
				this.pfDataExtractAuthors
			"
		/>

		<InputSelectYesNo
			question="Do you wish to specify what data will be extracted (optional)"
			v-model="$tera.state.optionalDetail"
		/>

		<!-- New -->
		<Accordion
			v-if="$tera.state.optionalDetail"
			style="margin-top: 50px; border: 1px solid black;"
		>
			<AccordionTab header="Optional Details" :active="false">
				<h3>What data will be extracted:</h3>
				<InputSelectMulti
					question="Methods:"
					:options="options.methods"
					v-model="$tera.state.methods"
				/>
				<InputSelectMulti
					question="Participants:"
					:options="options.participants"
					v-model="$tera.state.participants"
				/>
				<InputSelectMulti
					question="Interventions:"
					:options="options.interventions"
					v-model="$tera.state.interventions"
				/>
				<InputSelectMulti
					question="Comparators:"
					:options="options.comparators"
					v-model="$tera.state.comparators"
				/>
				<InputTable
					question="Outcomes:"
					columnHeader="Outcome"
					:inclusion="true"
					:type="true"
					:description="true"
					:examples="true"
					v-model="$tera.state.outcomes"
					mainPlaceholder="e.g. investigator-assessed change in acne severity"
				/>
				<Message
					v-if="!arrayEquals(picot.outcomes, extraction.outcomes)"
					severity="warn"
					:closable="false"
				>
					<div class="message-inside-text">
						Not the same as PICOST outcomes
					</div>
					<Button
						label="Copy from PICOST section"
						class="p-button-sm btsyleblue"
						@click="updateField('outcomes', picot.outcomes)"
					/>
				</Message>
				<InputSelectMulti
					question="Types:"
					:options="options.types"
					v-model="$tera.state.types"
				/>
				<Message
					v-if="!arrayEquals(picot.types, extraction.types)"
					severity="warn"
					:closable="false"
				>
					<div class="message-inside-text">
						Not the same as PICOST types
					</div>
					<Button
						label="Copy from PICOST section"
						class="p-button-sm btsyleblue"
						@click="updateField('types', picot.types)"
					/>
				</Message>
			</AccordionTab>
		</Accordion>

		<BasePreviewOutput :component="outputComponent" />
	</div>
</template>

<script>
import isEqual from "lodash/isEqual";
import sortBy from "lodash/sortBy";

import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Message from "primevue/message";
import Button from "primevue/button";

import BasePreviewOutput from "@/components/BasePreviewOutput.vue";
import OutputDataExtraction from "./OutputDataExtraction.vue";
import InputSelectDropdown from "@/components/InputSelectDropdown.vue";
import InputSelectMulti from "@/components/InputSelectMulti.vue";
import InputSelectMultiWithoutOthers from "@/components/InputSelectMultiWithoutOther.vue";
import InputTable from "@/components/InputTable.vue";
import InputSelectYesNo from "@/components/InputSelectYesNo.vue";

//import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodDataExtraction",
	components: {
		Accordion,
		AccordionTab,
		Message,
		Button,
		InputSelectDropdown,
		InputSelectMulti,
		InputSelectMultiWithoutOthers,
		InputTable,
		BasePreviewOutput,
		InputSelectYesNo
	},
	computed: {
		/*extractorsOption() {
			let option = [];
			let authorsLength = this.extraction.extractionAuthors?.length;
			if (authorsLength != 0) {
				for (var i = 1; i <= authorsLength; i++) {
					option.push(i);
				}
			} else {
				authorsLength = this.titlepage.authors?.length;
				for (i = 1; i <= authorsLength; i++) {
					option.push(i);
				}
			}
			return option;
		},*/
		numberOfExtractors() {
			return this.$tera.state.extractionAuthors?.length;
		},
		pfDataExtractAuthors() {
			let da = this.$tera.state.author?.map(el => {
				return { label: el };
			});
			this.$tera.state.planTable?.rows.forEach(el => {
				if (el.tasks == "Extract data" && el.peopleInvolved != "") {
					da = el.peopleInvolved;
				}
			});
			return da;
		}
	},
	methods: {
		compareLabel(a, b) {
			if (a.label < b.label) {
				return -1;
			} else if (a.label > b.label) {
				return 1;
			} else {
				return 0;
			}
		},
		compareMain(a, b) {
			if (a.main < b.main) {
				return -1;
			} else if (a.main > b.main) {
				return 1;
			} else {
				return 0;
			}
		},
		arrayEquals(arr1, arr2) {
			let sorted1;
			let sorted2;
			if (arr1 && arr2) {
				if (arr1[0]?.label && arr2[0]?.label) {
					sorted1 = sortBy(arr1, "label");
					sorted2 = sortBy(arr2, "label");
				} else if (arr1[0]?.main && arr2[0]?.main) {
					sorted1 = sortBy(arr1, "main");
					sorted2 = sortBy(arr2, "main");
				} else {
					sorted1 = arr1;
					sorted2 = arr2;
				}
			} else {
				return false;
			}
			return isEqual(sorted1, sorted2);
		}
	},
	mounted() {
		if (
			!this.$tera.state.outcomes ||
			JSON.stringify(this.$tera.state.outcomes) ==
				'[{"inclusion":true,"type":true}]'
		) {
			// console.log("this.extraction.types",...this.picot.types);
			if (this.$tera.state.outcomes) {
				// console.log("this.picot.outcomes", this.picot.outcomes, this.extraction.outcomes)
				// Deep copy
				this.$tera.state.outcomes = JSON.parse(
					JSON.stringify(this.$tera.state.outcomes)
				);
			}
		}

		if (this.$tera.state.types && this.$tera.state.types.length === 0) {
			// Shallow copy
			this.$tera.state.types = [...this.$tera.state.types];
		}
	},
	data() {
		return {
			//pfDataExtractAuthors: [], //--perform data extraction authors
			numberOptions: ["1", "2", "3", "4", "5", "6"],
			outputComponent: OutputDataExtraction,
			options: {
				methods: [
					{ label: "Study authors" },
					{ label: "Year" },
					{ label: "Country" },
					{ label: "Study design" },
					{ label: "Duration of follow-up" },
					{ label: "Setting" }
				],
				participants: [
					{ label: "Number of participants" },
					{ label: "Age" },
					{ label: "Gender" },
					{ label: "Whether currently pregnant" },
					{ label: "Smoker" },
					{ label: "Any co-comorbidity" },
					{ label: "Education level" }
				],
				interventions: [
					{ label: "Type of intervention" },
					{ label: "Dose" },
					{ label: "Frequency" },
					{ label: "Method of delivery" },
					{ label: "Who provided the intervention" },
					{ label: "How the intervention was provided" }
				],
				comparators: [
					{ label: "Placebo" },
					{ label: "Usual care" },
					{ label: "Sham device" },
					{ label: "No treatment" },
					{ label: "Dose" },
					{ label: "Frequency" },
					{ label: "Method of delivery" },
					{ label: "Who provided the intervention" },
					{ label: "How the intervention was provided" }
				],
				types: [
					{ label: "Systematic Reviews" },
					{ label: "Observational Studies" },
					{ label: "Randomized Controlled Trials" },
					{ label: "Cohort Studies" },
					{ label: "Longitudinal studies" },
					{ label: "Before after studies" },
					{ label: "Surveys" },
					{ label: "Letters" },
					{ label: "Editorials" }
				]
			}
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.p-message-text {
	display: inline-flex;
	width: 100%;
}

.message-inside-text {
	/* Align text horizontal center with right float button */
	margin: auto auto auto 0px;
}

.btsyleblue {
	margin: 10px;
	/* width: 100px; */
	background-color: #83bfed;
	border-radius: 20px;
	/* box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset, rgba(44, 187, 99, .15) 0 1px 2px, rgba(44, 187, 99, .15) 0 2px 4px, rgba(44, 187, 99, .15) 0 4px 8px, rgba(44, 187, 99, .15) 0 8px 16px, rgba(44, 187, 99, .15) 0 16px 32px; */
	color: #05305f;
	cursor: pointer;
	display: inline-block;
	font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
	padding: 7px 20px;
	text-align: center;
	text-decoration: none;
	/* transition: all 250ms; */
	border: 0;
	font-size: 16px;

	&:hover {
		/* box-shadow: 0 0 10px 0 #28a745 inset, 0 0 10px 4px #28a745; */
		/* background-color: #0069d9 !important; */
		background-color: #437fbe !important;

		border: 2px solid #5679a2 !important;
	}
}
</style>
