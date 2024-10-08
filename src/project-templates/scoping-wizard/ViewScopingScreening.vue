<template>
	<div>
		<h1>Study Selection and Screening</h1>

		<InputTextNumber
			question="How many review authors independently screened the titles and abstracts for inclusion against the inclusion criteria?"
			v-model="$tera.state.numberOfTitleAbstractScreeners" />

		<InputSelectMultiWithoutOthers question="Which authors screened title/abstract?"
			v-model="$tera.state.titleAbstractScreeners" :options="
				/*titlepage.authors.map(el => {
					return { label: el };
				})*/
				this.scabstractAuthors
				" />

		<InputSelectMultiWithoutOthers question="Which author retrieved full-texts?"
			v-model="$tera.state.fullTextRetrivalAuthor" :options="this.retrfulltextAuthors" />

		<InputTextNumber question="How many review authors independently screened the full-texts for inclusion?"
			v-model="$tera.state.numberOfFullTextScreeners" />

		<InputSelectMultiWithoutOthers question="Which authors screened full-texts?"
			v-model="$tera.state.fullTextScreeners" :options="
				/*titlepage.authors.map(el => {
					return { label: el };
				})*/
				this.scfulltextAuthors
				" />

		<InputSelectMultiWithoutOthers question="Who screened the citation search?"
			v-model="$tera.state.screenCitationSearchPeople" :options="this.scCitSearchPeople" />

		<InputSelectMultiWithoutOthers question="Who screened trial registries?"
			v-model="$tera.state.screenTrialRegisPeople" :options="this.scTrialRegisPeople" />

		<InputSelectMulti question="Any disagreements were resolved by:" v-model="$tera.state.disputeResolution"
			:options="disputeResolutionOptions" />

		<InputSelectMulti question="Which tool/s, if any, were used to help with screening?" v-model="$tera.state.screeningToolsSelected"
			:options="screeningTools" />

		<InputSelectYesNo
			question="This scoping review is reported following the PRISMA for Scoping Reviews (PRISMA-ScR)."
			v-model="$tera.state.isPrismaFlowDiagram" />

		<InputSelectYesNo v-if="$tera.state.isPrismaFlowDiagram"
			question="The list of studies excluded at full-text is provided in Appendix"
			v-model="$tera.state.isExcludedFullTextInAppendix" />

		<BasePreviewOutput :component="outputComponent" />
	</div>
</template>

<script>
import OutputScopingScreening from "./OutputScreening.vue";
import BasePreviewOutput from "@/components/BasePreviewOutput.vue";
import InputSelectMulti from "@/components/InputSelectMulti.vue";
import InputSelectMultiWithoutOthers from "@/components/InputSelectMultiWithoutOther.vue";
import InputSelectYesNo from "@/components/InputSelectYesNo.vue";

export default {
	name: "ViewScopingScreening",

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
					//da = el.peopleInvolved;
					da = [...el.peopleInvolved, ...da];
					this.checkUnion(da);
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
					//da = el.peopleInvolved;
					da = [...el.peopleInvolved, ...da];
					this.checkUnion(da);
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
					//da = el.peopleInvolved;
					da = [...el.peopleInvolved, ...da];
					this.checkUnion(da);
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
					//da = el.peopleInvolved;
					da = [...el.peopleInvolved, ...da];
					this.checkUnion(da);
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
					//da = el.peopleInvolved;
					da = [...el.peopleInvolved, ...da];
					this.checkUnion(da);
				}
			});
			return da;
		}
	},
	methods: {
		checkUnion(U) {
			for (var i = 0; i < U.length; i++) {
				for (var j = i + 1; j < U.length; j++) {
					if (U[i].label == U[j].label) {
						U.splice(j, 1);
						j--;
					}
				}
			}
		}
	},
	data() {
		return {
			numberOptions: ["2", "3", "4", "5", "6"],
			disputeResolutionOptions: [
				{ label: "By consensus" },
				{ label: "By referring to a third author" }
			],
			screeningTools: [
				{ label: "Screenatron" },
				{ label: "Covidence" },
				{ label: "Rayyan" },
				{ label: "EPPI-Reviewer" }
			],
			outputComponent: OutputScopingScreening
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
