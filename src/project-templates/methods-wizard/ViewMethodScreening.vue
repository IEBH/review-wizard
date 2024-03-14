<template>
	<div>
		<h1>Study Selection and Screening</h1>

		<InputTextNumber
			question="How many review authors independently screened the titles and abstracts for inclusion against the inclusion criteria?"
			:value="numberOfTitleAbstractScreeners"
		/>

		<InputSelectMultiWithoutOthers
			question="Which authors screened title/abstract?"
			:value="$tera.state.titleAbstractScreeners"
			:options="
				/*titlepage.authors.map(el => {
					return { label: el };
				})*/
				this.scabstractAuthors
			"
		/>

		<InputSelectMultiWithoutOthers
			question="Which author retrieved full-texts?"
			:value="$tera.state.fullTextRetrivalAuthor"
			:options="this.retrfulltextAuthors"
		/>

		<InputTextNumber
			question="How many review authors independently screened the full-texts for inclusion?"
			:value="numberOfFullTextScreeners"
		/>

		<InputSelectMultiWithoutOthers
			question="Which authors screened full-texts?"
			:value="$tera.state.fullTextScreeners"
			:options="
				/*titlepage.authors.map(el => {
					return { label: el };
				})*/
				this.scfulltextAuthors
			"
		/>

		<InputSelectMultiWithoutOthers
			question="Who screened the citation search?"
			:value="$tera.state.screenCitationSearchPeople"
			:options="this.scCitSearchPeople"
		/>

		<InputSelectMultiWithoutOthers
			question="Who screened trial registries?"
			:value="$tera.state.screenTrialRegisPeople"
			:options="this.scTrialRegisPeople"
		/>

		<InputSelectMulti
			question="Any disagreements were resolved by:"
			:value="$tera.state.disputeResolution"
			:options="disputeResolutionOptions"
		/>

		<InputSelectYesNo
			question="This systematic review is reported following the Preferred Reporting Items for Systematic Reviews and Meta-Analyses (PRISMA) statement."
			:value="$tera.state.isPrismaFlowDiagram"
		/>

		<InputSelectYesNo
			v-if="screening.isPrismaFlowDiagram"
			question="The list of studies excluded at full-text is provided in Appendix"
			:value="$tera.state.isExcludedFullTextInAppendix"
		/>

		<BasePreviewOutput :component="outputComponent" />
	</div>
</template>

<script>
import OutputScreening from "./OutputScreening.vue";
import BasePreviewOutput from "@/components/BasePreviewOutput.vue";
import InputSelectMulti from "@/components/InputSelectMulti.vue";
import InputSelectMultiWithoutOthers from "@/components/InputSelectMultiWithoutOther.vue";
import InputSelectYesNo from "@/components/InputSelectYesNo.vue";

//import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodScreening",

	components: {
		InputSelectMulti,
		InputSelectMultiWithoutOthers,
		InputSelectYesNo,
		BasePreviewOutput
	},
	computed: {
		numberOfTitleAbstractScreeners() {
			return this.$tera.state.titleAbstractScreeners?.length;
		},
		numberOfFullTextScreeners() {
			return this.$tera.state.fullTextScreeners?.length;
		},
		scTrialRegisPeople() {
			let da = this.$tera.state.author?.map(el => {
				return { label: el };
			});
			this.$tera.state.planTable?.rows.forEach(el => {
				if (el.tasks == "Screen trial registries" && el.peopleInvolved != "") {
					da = el.peopleInvolved;
				}
			});
			return da;
		},
		scCitSearchPeople() {
			let da = this.$tera.state.author?.map(el => {
				return { label: el };
			});
			this.$tera.state.planTable?.rows.forEach(el => {
				if (el.tasks == "Screen citation analysis" && el.peopleInvolved != "") {
					da = el.peopleInvolved;
				}
			});
			return da;
		},
		scabstractAuthors() {
			let da = this.$tera.state.author?.map(el => {
				return { label: el };
			});
			this.$tera.state.planTable?.rows.forEach(el => {
				if (el.tasks == "Screen abstracts" && el.peopleInvolved != "") {
					da = el.peopleInvolved;
				}
			});
			return da;
		},
		scfulltextAuthors() {
			let da = this.$tera.state.author?.map(el => {
				return { label: el };
			});
			this.$tera.state.planTable?.rows.forEach(el => {
				if (el.tasks == "Screen full text" && el.peopleInvolved != "") {
					da = el.peopleInvolved;
				}
			});
			return da;
		},
		retrfulltextAuthors() {
			let da = this.$tera.state.author?.map(el => {
				return { label: el };
			});
			this.$tera.state.planTable?.rows.forEach(el => {
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
