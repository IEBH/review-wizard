<template>
	<div>
		<h1>Study Selection and Screening</h1>

		<InputSelectDropdown
			question="How many review authors independently screened the titles and abstracts for inclusion against the inclusion criteria?"
			:value="screening.numberOfTitleAbstractScreeners"
			@input="updateField('numberOfTitleAbstractScreeners', $event)"
			:options="numberOptions"
		/>

		<InputSelectMulti
			question="Which authors screened title/abstract?"
			:value="screening.titleAbstractScreeners"
			@input="updateField('titleAbstractScreeners', $event)"
			:options="
				titlepage.authors
					? titlepage.authors.map(el => {
							return { label: el };
					  })
					: []
			"
		/>

		<InputSelectDropdown
			question="Which author retrieved full-texts"
			:value="screening.fullTextRetrivalAuthor"
			@input="updateField('fullTextRetrivalAuthor', $event)"
			:options="titlepage.authors"
		/>

		<InputSelectDropdown
			question="How many review authors independently screened the full-texts for inclusion?"
			:value="screening.numberOfFullTextScreeners"
			@input="updateField('numberOfFullTextScreeners', $event)"
			:options="numberOptions"
		/>

		<InputSelectMulti
			question="Which authors screened full-texts?"
			:value="screening.fullTextScreeners"
			@input="updateField('fullTextScreeners', $event)"
			:options="
				titlepage.authors
					? titlepage.authors.map(el => {
							return { label: el };
					  })
					: []
			"
		/>

		<InputSelectMulti
			question="Any disagreements were resolved by:"
			:value="screening.disputeResolution"
			@input="updateField('disputeResolution', $event)"
			:options="disputeResolutionOptions"
		/>

		<InputSelectYesNo
			question="This systematic review is reported following the Preferred Reporting Items for Systematic Reviews and Meta-Analyses (PRISMA) statement."
			:value="screening.isPrismaFlowDiagram"
			@input="updateField('isPrismaFlowDiagram', $event)"
		/>

		<InputSelectYesNo
			v-if="screening.isPrismaFlowDiagram"
			question="The list of studies excluded at full-text is provided in Appendix"
			:value="screening.isExcludedFullTextInAppendix"
			@input="updateField('isExcludedFullTextInAppendix', $event)"
		/>

		<BasePreviewOutput :component="outputComponent" :data="screening" />
	</div>
</template>

<script>
import OutputScreening from "./OutputScreening.vue";

import deepstreamMixin from "../../mixins/DeepstreamMixin";

export default {
	name: "ViewMethodScreening",
	mixins: [deepstreamMixin("titlepage"), deepstreamMixin("screening")],
	data() {
		return {
			numberOptions: ["2", "3", "4", "5", "6"],
			disputeResolutionOptions: [
				{ label: "By consensus" },
				{ label: "By referring to a third author" }
			],
			outputComponent: OutputScreening
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
