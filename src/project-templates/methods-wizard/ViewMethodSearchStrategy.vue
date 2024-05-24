<template>
	<div>
		<h1>Search Strategy</h1>

		<InputSelectMultiWithoutOthers question="Who designed and ran the search strategy?"
			v-model="$tera.state.designSearchStrategyAuthors" :options="this.dsSearchStrategyAuthors" />
		<InputSelectMultiWithoutOthers question="Who deduplicated the results?"
			v-model="$tera.state.deduplicateResultsAuthors" :options="this.dsSearchStrategyAuthors" />

		<InputSelectMulti question="Which of the following components went into your search string"
			v-model="$tera.state.components" :options="componentsOptions" />

		<InputSelectMulti question="Was the search designed by a search specialist, if so select which type"
			v-model="$tera.state.specialist" :options="specialistOptions" />

		<InputSelectMulti question="Was help received during the designing of the search, if so who provided the help"
			v-model="$tera.state.helper" :options="specialistOptions" />

		<InputSelectMulti question="Which tool/s, if any, were used to help with the search."
			v-model="$tera.state.tools" :options="toollistOptions" />

		<InputSelectMulti
			question="Was the search strategy peer-reviewed (according to PRESS guidelines), if so who peer-reviewed"
			v-model="$tera.state.peerReviewer" :options="specialistOptions" />

		<InputSelectYesNo question="Were the search results restricted by publication type?"
			v-model="$tera.state.isRestrictedByPublicationType" />

		<InputSelectMulti v-if="$tera.state.isRestrictedByPublicationType"
			question="What publication types did you exclude?" v-model="$tera.state.excludedPublicationTypes"
			:options="publicationTypesOptions" />

		<InputSelectYesNo question="Were the search results restricted by language?"
			v-model="$tera.state.isRestrictedByLanguage" />

		<InputSelectMulti v-if="$tera.state.isRestrictedByLanguage" question="What languages did you include?"
			:options="languageOptions" v-model="$tera.state.includedLanguages" />

		<InputSelectMultiWithoutOthers question="Who conducted the supplementary searches?"
			v-model="$tera.state.conductSSearchAuthors" :options="this.csAuthors" />

		<InputSelectMulti question="Did you conduct any of the following methods to supplement your search results?"
			v-model="$tera.state.supplementoryMethods" :options="supplementoryMethodsOptions" />

		<InputSelectMulti question="Which tool/s or databases were used the supplementary search."
			v-model="$tera.state.databaseTools" :options="databaselistOptions" />

		<PreviewOutput :component="outputComponent" />
	</div>
</template>

<script>
//Search Strategy
import PreviewOutput from "@/components/BasePreviewOutput.vue";
import InputSelectMulti from "@/components/InputSelectMulti.vue";
import InputSelectMultiWithoutOthers from "@/components/InputSelectMultiWithoutOther.vue";
import InputSelectYesNo from "@/components/InputSelectYesNo.vue";
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
		dsSearchStrategyAuthors() {
			let da = this.$tera.state.author?.map(el => {
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
			let da = this.$tera.state.author?.map(el => {
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
			// Tools help in Search
			toollistOptions: [
				{ label: "MeshMate" },
				{ label: "Word Freq" },
				{ label: "SearchRefiner" },
				{ label: "Polyglot Search Translator" },
				{ label: "Systematic Review Accelerator" }
			],
			// Database helped in Suplementary Search
			databaselistOptions: [
				{ label: "SpiderCite" },
				{ label: "CitationChaser" },
				{ label: "Web of Science" },
				{ label: "Scopus" },
				{ label: "Google Scholar" }
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
