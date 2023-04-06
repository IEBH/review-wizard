<template>
	<div>
		<h1>Search Strategy</h1>

		<InputSelectMulti
			question="Who designed and ran the search strategy?"
			:value="search.designSearchStrategyAuthors"
			@input="updateField('designSearchStrategyAuthors', $event)"
			:options="this.dsSearchStrategyAuthors"
		/>
		<InputSelectMulti
			question="Who deduplicated the results?"
			:value="search.deduplicateResultsAuthors"
			@input="updateField('deduplicateResultsAuthors', $event)"
			:options="this.dsSearchStrategyAuthors"
		/>

		<InputSelectMulti
			question="Which of the following components went into your search string"
			:options="componentsOptions"
			:value="search.components"
			@input="updateField('components', $event)"
		/>

		<InputSelectMulti
			question="Was the search designed by a search specialist, if so select which type"
			:options="specialistOptions"
			:value="search.specialist"
			@input="updateField('specialist', $event)"
		/>

		<InputSelectMulti
			question="Was help received during the designing of the search, if so who provided the help"
			:options="specialistOptions"
			:value="search.helper"
			@input="updateField('helper', $event)"
		/>

		<InputSelectMulti
			question="Was the search strategy peer-reviewed (according to PRESS guidelines), if so who peer-reviewed"
			:options="specialistOptions"
			:value="search.peerReviewer"
			@input="updateField('peerReviewer', $event)"
		/>

		<InputSelectYesNo
			question="Were the search results restricted by publication type?"
			:value="search.isRestrictedByPublicationType"
			@input="updateField('isRestrictedByPublicationType', $event)"
		/>

		<InputSelectMulti
			v-if="search.isRestrictedByPublicationType"
			question="What publication types did you exclude?"
			:options="publicationTypesOptions"
			:value="search.excludedPublicationTypes"
			@input="updateField('excludedPublicationTypes', $event)"
		/>

		<InputSelectYesNo
			question="Were the search results restricted by language?"
			:value="search.isRestrictedByLanguage"
			@input="updateField('isRestrictedByLanguage', $event)"
		/>

		<InputSelectMulti
			v-if="search.isRestrictedByLanguage"
			question="What languages did you include?"
			:options="languageOptions"
			:value="search.includedLanguages"
			@input="updateField('includedLanguages', $event)"
		/>

		<InputSelectMulti
			question="Who conducted the supplementary searches?"
			:value="search.conductSSearchAuthors"
			@input="updateField('conductSSearchAuthors', $event)"
			:options="this.csAuthors"
		/>

		<InputSelectMulti
			question="Did you conduct any of the following methods to supplement your search results?"
			:options="supplementoryMethodsOptions"
			:value="search.supplementoryMethods"
			@input="updateField('supplementoryMethods', $event)"
		/>

		<PreviewOutput :component="outputComponent" :data="search" />
	</div>
</template>

<script>
//Search Strategy
//import OutputSearch from "./OutputSearch.vue";
import PreviewOutput from "@/components/BasePreviewOutput.vue";
import InputSelectMulti from "@/components/InputSelectMulti.vue";
//Restrictions on Publication Type
//import OutputSearchPublicationType from "./OutputSearchPublicationType.vue";
import InputSelectYesNo from "@/components/InputSelectYesNo.vue";
//Supplementary Searches
//import OutputSearchSupplementoryMethods from "./OutputSearchSupplementoryMethods.vue";

import OutputSearchStrategy from "./OutputSearchStrategy.vue";

import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodSearchStrategy",
	mixins: [
		deepstreamMixin("researchplan"),
		deepstreamMixin("titlepage"),
		deepstreamMixin("search")
	],
	components: {
		//Search Strategy
		InputSelectMulti,
		PreviewOutput,
		//Restrictions on Publication Type
		InputSelectYesNo
		//Supplementary Searches
	},
	computed: {
		dsSearchStrategyAuthors() {
			return this.titlepage.authors?.map(el => {
				return { label: el };
			});
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
			csAuthors: [], //--conduct supplementary searches
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
	},
	async mounted() {
		await this.dataReady;
		//Search Strategy
		this.researchplan.planTable.rows.forEach(el => {
			if (
				el.tasks == "6. Design systematic search strategy" &&
				el.peopleInvolved != ""
			) {
				this.dsSearchStrategyAuthors = el.peopleInvolved;
			}
		});
		//Supplementary Searches
		this.csAuthors = this.titlepage.authors.map(el => {
			return { label: el };
		});
		this.researchplan.planTable.rows.forEach(el => {
			if (el.tasks == "13. Citation search" && el.peopleInvolved != "") {
				this.csAuthors = el.peopleInvolved;
			}
		});
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
