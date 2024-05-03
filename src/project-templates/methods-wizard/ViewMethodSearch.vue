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

		<BasePreviewOutput :component="outputComponent" :data="search" />
	</div>
</template>

<script>
import OutputSearch from "./OutputSearch.vue";
import BasePreviewOutput from "@/components/BasePreviewOutput.vue";
import InputSelectMulti from "@/components/InputSelectMulti.vue";

import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodSearch",
	mixins: [
		deepstreamMixin("researchplan"),
		deepstreamMixin("titlepage"),
		deepstreamMixin("search")
	],
	components: {
		InputSelectMulti,
		BasePreviewOutput
	},
	data() {
		return {
			dsSearchStrategyAuthors: [],
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
			outputComponent: OutputSearch
		};
	},
	async mounted() {
		this.dsSearchStrategyAuthors = this.titlepage.authors.map(el => {
			return { label: el };
		});
		//--6,7,8 rows in rs-plan table share the same people involved
		this.researchplan.planTable.rows.forEach(el => {
			if (
				el.tasks == "Design systematic search strategy" &&
				el.peopleInvolved != ""
			) {
				this.dsSearchStrategyAuthors = el.peopleInvolved;
			}
		});
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
