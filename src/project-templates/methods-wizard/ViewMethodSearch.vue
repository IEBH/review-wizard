<template>
	<div>
		<h1>Search Strategy</h1>

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

		<InputSelectMulti
			question="Did you use any automation tools during the search process"
			:options="searchAutomationOptions"
			:value="search.searchAutomationTools"
			@input="updateField('searchAutomationTools', $event)"
		/>

		<BasePreviewOutput :component="outputComponent" :data="search" />
	</div>
</template>

<script>
import OutputSearch from "./OutputSearch.vue";

import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodSearch",
	mixins: [deepstreamMixin("search")],
	data() {
		return {
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
			searchAutomationOptions: [
				{
					label: "Word Frequency Analyser",
					url: "https://pubmed.ncbi.nlm.nih.gov/32004673/"
				},
				{
					label: "Polyglot Search Translator",
					url: "https://pubmed.ncbi.nlm.nih.gov/32256231/"
				},
				{
					label: "SearchRefinery",
					url: "https://dl.acm.org/doi/abs/10.1145/3269206.3269215/"
				},
				{
					label: "The Deduplicator",
					url: "https://pubmed.ncbi.nlm.nih.gov/32004673/"
				},
				{
					label: "The Systematic Review Accelerator",
					url: "https://pubmed.ncbi.nlm.nih.gov/32004673/"
				}
			],
			outputComponent: OutputSearch
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
