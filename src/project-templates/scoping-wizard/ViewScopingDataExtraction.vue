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
			v-model="$tera.state.numberOfExtractors"
		/>

		<InputSelectMultiWithoutOthers
			question="Which author/s performed data extraction?"
			v-model="$tera.state.extractionAuthors"
			:options="
				this.pfDataExtractAuthors
			"
		/>

        <h3>What data will be extracted:</h3>
        <InputSelectMulti
			question="Methods:"
			:options="options.methods"
			v-model="$tera.state.methods"
		/>

        <InputSelectMulti
			question="Participants/population/problem:"
			:options="options.participants"
			v-model="$tera.state.participants"
		/>

        <InputSelectMulti
			question="Concept:"
			:options="options.concepts"
			v-model="$tera.state.concepts"
		/>

        <InputSelectMulti
			question="Context:"
			:options="options.contexts"
			v-model="$tera.state.contexts"
		/>

        <InputTable
			question="Themes:"
			v-model="$tera.state.extractionThemes"
			columnHeader="Theme"
			:isSelectButton="false"
			:inclusion="true"
			:type="true"
			:description="true"
			:examples="true"
			mainPlaceholder="e.g. Drivers of overuse"
		/>

        <Message
			v-if="!arrayEquals($tera.state.theme, $tera.state.extractionThemes)"
			severity="warn"
			:closable="false"
		>
			<div class="message-inside-text">
				Not the same as PCCTT outcomes
			</div>
			<Button
				label="Copy from PCCTT section"
				class="p-button-sm btsyleblue"
				@click="$tera.state.extractionThemes = $tera.state.theme"
			/>
		</Message>

        <InputSelectMulti
			question="Types:"
			:options="options.types"
			v-model="$tera.state.extractionTypes"
		/>

        <Message
			v-if="!arrayEquals($tera.state.types, $tera.state.extractionTypes)"
			severity="warn"
			:closable="false"
		>
			<div class="message-inside-text">
				Not the same as PCCTT types
			</div>
			<Button
				label="Copy from PCCTT section"
				class="p-button-sm btsyleblue"
				@click="$tera.state.extractionTypes = $tera.state.types"
			/>
		</Message>

        <InputSelectMulti
			question="Grey literature:"
			:options="options.greyLiteratureTypes"
			v-model="$tera.state.extractionGreyLitTypes"
		/>
        <Message
			v-if="!arrayEquals($tera.state.greyLiteraturesSelected, $tera.state.extractionGreyLitTypes)"
			severity="warn"
			:closable="false"
		>
			<div class="message-inside-text">
				Not the same as PCCTT types
			</div>
			<Button
				label="Copy from PCCTT section"
				class="p-button-sm btsyleblue"
				@click="$tera.state.extractionGreyLitTypes = $tera.state.greyLiteraturesSelected"
			/>
		</Message>

        <BasePreviewOutput :component="outputComponent" />
	</div>
</template>

<script>
import isEqual from "lodash/isEqual";
import sortBy from "lodash/sortBy";
import Message from "primevue/message";
import Button from "primevue/button";
import BasePreviewOutput from "@/components/BasePreviewOutput.vue";
import OutputDataExtraction from "./OutputDataExtraction.vue";
import InputSelectDropdown from "@/components/InputSelectDropdown.vue";
import InputSelectMulti from "@/components/InputSelectMulti.vue";
import InputSelectMultiWithoutOthers from "@/components/InputSelectMultiWithoutOther.vue";
import InputTable from "@/components/InputTable.vue";


export default {
	name: "ViewScopingDataExtraction",
	components: {
		Message,
		Button,
		InputSelectDropdown,
		InputSelectMulti,
		InputSelectMultiWithoutOthers,
		InputTable,
		BasePreviewOutput
	},
	 computed: {
		pfDataExtractAuthors() {
			let da = this.$tera.state.author?.map(el => {
				return { label: el };
			});
			this.$tera.state.planTable?.rows.forEach(el => {
				if (el.tasks == "Extract data" && el.peopleInvolved != "") {
					da = [...el.peopleInvolved, ...da];
					this.checkUnion(da);
				}
			});
			return da;
		}},
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
		if (!this.$tera.state.extractionThemes ||
			JSON.stringify(this.$tera.state.extractionThemes) ==
				'[{"inclusion":true,"type":true}]'
		) {
			if (this.$tera.state.theme) {
				this.$tera.state.extractionOutcomes = JSON.parse(
					JSON.stringify(this.$tera.state.theme)
				);
			}
		}
		if (this.$tera.state.extractionTypes &&
			this.$tera.state.extractionTypes.length === 0
		) {
			this.$tera.state.extractionTypes = [...this.$tera.state.types];
		}
	},
	data() {
		return {
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
				concepts: [
					{ label: "Type of intervention" },
					{ label: "Dose" },
					{ label: "Frequency" },
					{ label: "Method of delivery" },
					{ label: "Who provided the intervention" },
					{ label: "How the intervention was provided" }
				],
				contexts: [
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
					{ label: "all study types" },
					{ label: "randomized controlled trials" },
					{ label: "observational studies (all types)" },
					{ label: "cohort (longitudinal) studies" },
					{ label: "cohort studies" },
					{ label: "case-control studies" },
					{ label: "before-after studies" },
					{ label: "cross-sectional studies" },
					{ label: "qualitative studies" },
                    { label: "surveys" }
				],
                greyLiteratureTypes:[
                    { label: "no grey literature"},
                    { label: "government reports"},
                    { label: "news articles"},
                    { label: "conference abstracts"},
                    { label: "thesis and dissertations"},
                    { label: "registered trials"},
                    { label: "social media posts"}
                ]
            }
			}
		}
	};
</script>

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
