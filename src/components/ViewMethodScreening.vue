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
				/*titlepage.authors.map(el => {
					return { label: el };
				})*/
				this.scabstractAuthors
			"
		/>

		<InputSelectDropdown
			question="Which author retrieved full-texts"
			:value="screening.fullTextRetrivalAuthor"
			@input="updateField('fullTextRetrivalAuthor', $event)"
			:options="
				/*titlepage.authors*/

				this.retrfulltextAuthors
			"
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
				/*titlepage.authors.map(el => {
					return { label: el };
				})*/
				this.scfulltextAuthors
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

		<PreviewOutput :component="outputComponent" :data="screening" />
	</div>
</template>

<script>
import OutputScreening from "./OutputScreening.vue";
import PreviewOutput from "./PreviewOutput.vue";
import InputSelectDropdown from "./InputSelectDropdown.vue";
import InputSelectMulti from "./InputSelectMulti.vue";
import InputSelectYesNo from "./InputSelectYesNo.vue";

import deepstreamMixin from "../mixins/DeepstreamMixin";

export default {
	name: "ViewMethodScreening",
	mixins: [
		deepstreamMixin("researchplan"),
		deepstreamMixin("titlepage"),
		deepstreamMixin("screening")
	],
	components: {
		InputSelectDropdown,
		InputSelectMulti,
		InputSelectYesNo,
		PreviewOutput
	},
	data() {
		return {
			scabstractAuthors: [], //--screen abstract authors
			retrfulltextAuthors: [], //--retrieved full-text authors
			scfulltextAuthors: [], //--screen full-text authors
			numberOptions: ["2", "3", "4", "5", "6"],
			disputeResolutionOptions: [
				{ label: "By consensus" },
				{ label: "By referring to a third author" }
			],
			outputComponent: OutputScreening
		};
	},
	mounted() {
		this.scabstractAuthors = this.scfulltextAuthors = this.titlepage.authors.map(
			el => {
				return { label: el };
			}
		);
		this.retrfulltextAuthors = this.titlepage.authors;
		this.researchplan.planTable.rows.forEach(el => {
			if (el.tasks == "Screen abstracts" && el.peopleInvolved != "") {
				this.scabstractAuthors = el.peopleInvolved;
			}
			if (el.tasks == "Obtain full text" && el.peopleInvolved != "") {
				this.retrfulltextAuthors = [];
				el.peopleInvolved.forEach(v => {
					this.retrfulltextAuthors.splice(0, 0, v.label);
				});
			}
			if (el.tasks == "Screen full text" && el.peopleInvolved != "") {
				this.scfulltextAuthors = el.peopleInvolved;
			}
		});
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
