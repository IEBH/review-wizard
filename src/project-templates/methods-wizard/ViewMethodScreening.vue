<template>
	<div>
		<h1>Study Selection and Screening</h1>

		<InputSelectYesNo
			question="Did you search trial registries?"
			:value="screening.isTrialRegistries"
			@input="updateField('isTrialRegistries', $event)"
		/>

		<InputSelectMulti
			question="Who conducted the supplementary searches?"
			:value="screening.conductSSearchPeople"
			@input="updateField('conductSSearchPeople', $event)"
			:options="this.csSearchPeople"
		/>

		<InputSelectMulti
			question="Who screened the citation search?"
			:value="screening.screenCitationSearchPeople"
			@input="updateField('screenCitationSearchPeople', $event)"
			:options="this.scCitSearchPeople"
		/>

		<InputSelectMulti
			question="Who screened trial registries?"
			:value="screening.screenTrialRegisPeople"
			@input="updateField('screenTrialRegisPeople', $event)"
			:options="this.scTrialRegisPeople"
		/>

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

		<InputSelectMulti
			question="Which author retrieved full-texts?"
			:value="screening.fullTextRetrivalAuthor"
			@input="updateField('fullTextRetrivalAuthor', $event)"
			:options="this.retrfulltextAuthors"
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

		<BasePreviewOutput :component="outputComponent" :data="screening" />
	</div>
</template>

<script>
import OutputScreening from "./OutputScreening.vue";
import BasePreviewOutput from "@/components/BasePreviewOutput.vue";
import InputSelectDropdown from "@/components/InputSelectDropdown.vue";
import InputSelectMulti from "@/components/InputSelectMulti.vue";
import InputSelectYesNo from "@/components/InputSelectYesNo.vue";

import deepstreamMixin from "@/mixins/DeepstreamMixin";

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
		BasePreviewOutput
	},
	data() {
		return {
			scabstractAuthors: [], //--screen abstract authors
			retrfulltextAuthors: [], //--retrieved full-text authors
			scfulltextAuthors: [], //--screen full-text authors
			scTrialRegisPeople: [], //--screen trial registries
			scCitSearchPeople: [], //-- screen citation search
			csSearchPeople: [], //-- screec supplenmentry search
			numberOptions: ["2", "3", "4", "5", "6"],
			disputeResolutionOptions: [
				{ label: "By consensus" },
				{ label: "By referring to a third author" }
			],
			outputComponent: OutputScreening
		};
	},
	mounted() {
		this.scTrialRegisPeople = this.csSearchPeople = this.scCitSearchPeople = this.scabstractAuthors = this.scfulltextAuthors = this.retrfulltextAuthors = this.titlepage.authors.map(
			el => {
				return { label: el };
			}
		);
		//this.retrfulltextAuthors = this.titlepage.authors;
		this.researchplan.planTable.rows.forEach(el => {
			if (
				el.tasks == "12. Screen trial registries" &&
				el.peopleInvolved != ""
			) {
				this.scTrialRegisPeople = el.peopleInvolved;
			}
			if (el.tasks == "9. Screen abstracts" && el.peopleInvolved != "") {
				this.scabstractAuthors = el.peopleInvolved;
			}
			if (el.tasks == "10. Obtain full text" && el.peopleInvolved != "") {
				this.retrfulltextAuthors = el.peopleInvolved;
			}
			if (el.tasks == "11. Screen full text" && el.peopleInvolved != "") {
				this.scfulltextAuthors = el.peopleInvolved;
			}
			if (el.tasks == "13. Citation search" && el.peopleInvolved != "") {
				this.csSearchPeople = el.peopleInvolved;
			}
			if (
				el.tasks == "14. Screen citation analysis" &&
				el.peopleInvolved != ""
			) {
				this.scCitSearchPeople = el.peopleInvolved;
			}
		});
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
