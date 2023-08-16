<template>
	<div>
		<h1>Study Selection and Screening</h1>

		<InputTextNumber
			question="How many review authors independently screened the titles and abstracts for inclusion against the inclusion criteria?"
			:value="numberOfTitleAbstractScreeners"
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

		<InputTextNumber
			question="How many review authors independently screened the full-texts for inclusion?"
			:value="numberOfFullTextScreeners"
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
//import InputSelectDropdown from "@/components/InputSelectDropdown.vue";
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
		InputSelectMulti,
		InputSelectYesNo,
		BasePreviewOutput
	},
	computed: {
		numberOfTitleAbstractScreeners() {
			return this.screening.titleAbstractScreeners?.length;
		},
		numberOfFullTextScreeners() {
			return this.screening.fullTextScreeners?.length;
		},
		scTrialRegisPeople() {
			let da = this.titlepage.authors?.map(el => {
				return { label: el };
			});
			this.researchplan.planTable?.rows.forEach(el => {
				if (el.tasks == "Screen trial registries" && el.peopleInvolved != "") {
					da = el.peopleInvolved;
				}
			});
			return da;
		},
		scCitSearchPeople() {
			let da = this.titlepage.authors?.map(el => {
				return { label: el };
			});
			this.researchplan.planTable?.rows.forEach(el => {
				if (el.tasks == "Screen citation analysis" && el.peopleInvolved != "") {
					da = el.peopleInvolved;
				}
			});
			return da;
		},
		scabstractAuthors() {
			let da = this.titlepage.authors?.map(el => {
				return { label: el };
			});
			this.researchplan.planTable?.rows.forEach(el => {
				if (el.tasks == "Screen abstracts" && el.peopleInvolved != "") {
					da = el.peopleInvolved;
				}
			});
			return da;
		},
		scfulltextAuthors() {
			let da = this.titlepage.authors?.map(el => {
				return { label: el };
			});
			this.researchplan.planTable?.rows.forEach(el => {
				if (el.tasks == "Screen full text" && el.peopleInvolved != "") {
					da = el.peopleInvolved;
				}
			});
			return da;
		},
		retrfulltextAuthors() {
			let da = this.titlepage.authors?.map(el => {
				return { label: el };
			});
			this.researchplan.planTable?.rows.forEach(el => {
				if (el.tasks == "Obtain full text" && el.peopleInvolved != "") {
					da = el.peopleInvolved;
				}
			});
			return da;
		}
	},
	data() {
		return {
			//scabstractAuthors: [], //--screen abstract authors
			//retrfulltextAuthors: [], //--retrieved full-text authors
			//scfulltextAuthors: [], //--screen full-text authors
			//scTrialRegisPeople: [], //--screen trial registries
			//scCitSearchPeople: [], //-- screen citation search
			//csSearchPeople: [], //-- screec supplenmentry search
			//numberOptions: ["2", "3", "4", "5", "6"],
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
