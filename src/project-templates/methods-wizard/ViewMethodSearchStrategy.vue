<template>
	<div>
		<h1>Search Strategy</h1>

		<InputSelectMultiWithoutOthers
			question="Who designed and ran the search strategy?"
			v-model="designSearchStrategyAuthors"
			:options="this.dsSearchStrategyAuthors"
		/>
		<InputSelectMultiWithoutOthers
			question="Who deduplicated the results?"
			v-model="deduplicateResultsAuthors"
			:options="this.dsSearchStrategyAuthors"
		/>

		<InputSelectMulti
			question="Which of the following components went into your search string"
			v-model="components"
			:options="componentsOptions"
		/>

		<InputSelectMulti
			question="Was the search designed by a search specialist, if so select which type"
			v-model="specialist"
			:options="specialistOptions"
		/>

		<InputSelectMulti
			question="Was help received during the designing of the search, if so who provided the help"
			v-model="helper"
			:options="specialistOptions"
		/>

		<InputSelectMulti
			question="Was the search strategy peer-reviewed (according to PRESS guidelines), if so who peer-reviewed"
			v-model="peerReviewer"
			:options="specialistOptions"
		/>

		<InputSelectYesNo
			question="Were the search results restricted by publication type?"
			v-model="isRestrictedByPublicationType"
		/>

		<InputSelectMulti
			v-if="$tera.state.isRestrictedByPublicationType"
			question="What publication types did you exclude?"
			v-model="excludedPublicationTypes"
			:options="publicationTypesOptions"
		/>

		<InputSelectYesNo
			question="Were the search results restricted by language?"
			v-model="isRestrictedByLanguage"
		/>

		<InputSelectMulti
			v-if="$tera.state.isRestrictedByLanguage"
			question="What languages did you include?"
			:options="languageOptions"
			v-model="$tera.state.includedLanguages"
		/>

		<InputSelectMultiWithoutOthers
			question="Who conducted the supplementary searches?"
			v-model="conductSSearchAuthors"
			:options="this.csAuthors"
		/>

		<InputSelectMulti
			question="Did you conduct any of the following methods to supplement your search results?"
			v-model="supplementoryMethods"
			:options="supplementoryMethodsOptions"
		/>

		<PreviewOutput :component="outputComponent" />
	</div>
</template>

<script>
//Search Strategy
import PreviewOutput from "@/components/BasePreviewOutput.vue";
import InputSelectMulti from "@/components/InputSelectMulti.vue";
import InputSelectMultiWithoutOthers from "@/components/InputSelectMultiWithoutOther.vue";
import InputSelectYesNo from "@/components/InputSelectYesNo.vue";
import DefaultValue from "./DefaultValue";
import OutputSearchStrategy from "./OutputSearchStrategy.vue";

export default {
	name: "ViewMethodSearchStrategy",

	components: {
		//Search Strategy
		InputSelectMulti,
		InputSelectMultiWithoutOthers,
		PreviewOutput,
		//Restrictions on Publication Type
		InputSelectYesNo
		//Supplementary Searches
	},
	computed: {
		designSearchStrategyAuthors() {
			this.$tera.setProjectStateDefaults(
				"designSearchStrategyAuthors",
				DefaultValue.search.designSearchStrategyAuthors
			);
			return this.$tera.state.designSearchStrategyAuthors;
		},
		deduplicateResultsAuthors() {
			this.$tera.setProjectStateDefaults(
				"deduplicateResultsAuthors",
				DefaultValue.search.deduplicateResultsAuthors
			);
			return this.$tera.state.deduplicateResultsAuthors;
		},
		components() {
			this.$tera.setProjectStateDefaults(
				"components",
				DefaultValue.search.components
			);
			return this.$tera.state.components;
		},
		specialist() {
			this.$tera.setProjectStateDefaults(
				"specialist",
				DefaultValue.search.specialist
			);
			return this.$tera.state.specialist;
		},
		helper() {
			this.$tera.setProjectStateDefaults("helper", DefaultValue.search.helper);
			return this.$tera.state.helper;
		},
		peerReviewer() {
			this.$tera.setProjectStateDefaults(
				"peerReviewer",
				DefaultValue.search.peerReviewer
			);
			return this.$tera.state.peerReviewer;
		},
		isRestrictedByPublicationType() {
			this.$tera.setProjectStateDefaults(
				"isRestrictedByPublicationType",
				DefaultValue.search.isRestrictedByPublicationType
			);
			return this.$tera.state.isRestrictedByPublicationType;
		},
		excludedPublicationTypes() {
			this.$tera.setProjectStateDefaults(
				"excludedPublicationTypes",
				DefaultValue.search.excludedPublicationTypes
			);
			return this.$tera.state.excludedPublicationTypes;
		},
		isRestrictedByLanguage() {
			this.$tera.setProjectStateDefaults(
				"isRestrictedByLanguage",
				DefaultValue.search.isRestrictedByLanguage
			);
			return this.$tera.state.isRestrictedByLanguage;
		},
		conductSSearchAuthors() {
			this.$tera.setProjectStateDefaults(
				"conductSSearchAuthors",
				DefaultValue.search.conductSSearchAuthors
			);
			return this.$tera.state.conductSSearchAuthors;
		},
		supplementoryMethods() {
			this.$tera.setProjectStateDefaults(
				"supplementoryMethods",
				DefaultValue.search.supplementoryMethods
			);
			return this.$tera.state.supplementoryMethods;
		},
		dsSearchStrategyAuthors() {
			let da = this.$tera.state.authors?.map(el => {
				return { label: el };
			});
			this.$tera.state.planTable?.rows.forEach(el => {
				if (
					el.tasks == "Design systematic search strategy" &&
					el.peopleInvolved != ""
				) {
					da = el.peopleInvolved;
				}
			});
			return da;
		},
		csAuthors() {
			let da = this.$tera.state.authors?.map(el => {
				return { label: el };
			});
			this.$tera.state.planTable?.rows.forEach(el => {
				if (el.tasks == "Citation search" && el.peopleInvolved != "") {
					da = el.peopleInvolved;
				}
			});
			return da;
		}
	},
	data() {
		return {
			//Search Strategy
			componentsOptions: [
				{ label: "MeSH or other subject terms" },
				{ label: "Synonyms" },
				{ label: "Search filters" }
			],
			specialistOptions: [
				{ label: "Librarian" },
				{ label: "Health Librarian" },
				{ label: "Information Specialist" },
				{ label: "Cochrane Information Specialist" }
			],
			//Restrictions on Publication Type
			publicationTypesOptions: [
				{ label: "Conference abstracts" },
				{ label: "Theses" },
				{ label: "Articles in press" },
				{ label: "Books or book chapters" }
			],
			languageOptions: [
				{ label: "English" },
				{ label: "German" },
				{ label: "French" },
				{ label: "Italian" },
				{ label: "Spanish" },
				{ label: "Portuguese" },
				{ label: "Chinese" },
				{ label: "Japanese" },
				{ label: "Arabic" },
				{ label: "Swahili" },
				{ label: "Hindi" },
				{ label: "Dutch" },
				{ label: "Swiss" },
				{ label: "Norwegian" },
				{ label: "Swedish" }
			],
			//Supplementary Searches
			supplementoryMethodsOptions: [
				// eslint-disable-next-line prettier/prettier
				{
					label: "Manually checked the reference lists of the included studies"
				},
				{ label: "Performed a backwards citation analysis" },
				{ label: "Performed a forwards citation analysis" },
				{ label: "Contacted experts" },
				{ label: "Used the similar articles feature of a database" }
			],

			outputComponent: OutputSearchStrategy
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
