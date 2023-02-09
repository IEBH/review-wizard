<template>
	<div>
		<h1>Research Plan</h1>
		<InputSrTableCustom
			question="What is your Research Plan?"
			:value="researchplan.planTable"
			:titlePageAuthors="Authors"
			@input="updateField('planTable', $event)"
		></InputSrTableCustom>
	</div>
</template>
<script>
import InputSrTableCustom from "@/components/InputSrTableCustom.vue";
import deepstreamMixin from "@/mixins/DeepstreamMixin";
export default {
	mixins: [
		deepstreamMixin("riskOfBias"),
		deepstreamMixin("screening"),
		deepstreamMixin("extraction"),
		deepstreamMixin("titlepage"),
		deepstreamMixin("researchplan")
	],
	components: {
		InputSrTableCustom
	},
	data() {
		return {
			Authors: null,
			authorsArr: null
		};
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
		},
		checkPeopleInvolved(pInvolved, authors) {
			if (pInvolved != "") {
				for (var i = 0; i < authors.length; i++) {
					pInvolved.push(authors[i]);
				}
				this.checkUnion(pInvolved);
			} else {
				pInvolved = authors;
			}
		}
	},
	mounted() {
		//--all people(authors and acknowledgements) involved
		this.authorsArr = this.titlepage.authors;
		this.titlepage.authors.forEach(el => {
			for (var i = 0; i < this.titlepage.acknowledgements.length; i++) {
				if (
					el != this.titlepage.acknowledgements[i] &&
					!this.authorsArr.includes(this.titlepage.acknowledgements[i])
				) {
					//alert(this.titlepage.acknowledgements[i]);
					this.authorsArr.push(this.titlepage.acknowledgements[i]);
				}
			}
		});
		//--convert arrylist to object list
		this.Authors = this.authorsArr.map(el => {
			return { label: el };
		});

		this.researchplan.planTable.rows.forEach(el => {
			if (
				el.tasks == "9. Screen abstracts" &&
				this.screening.titleAbstractScreeners != null
			) {
				this.checkPeopleInvolved(
					el.peopleInvolved,
					this.screening.titleAbstractScreeners
				);
			}
			if (
				el.tasks == "10. Obtain full text" &&
				this.screening.fullTextRetrivalAuthor != null
			) {
				this.checkPeopleInvolved(
					el.peopleInvolved,
					this.screening.fullTextRetrivalAuthor
				);
			}
			if (
				el.tasks == "11. Screen full text" &&
				this.screening.fullTextScreeners != null
			) {
				this.checkPeopleInvolved(
					el.peopleInvolved,
					this.screening.fullTextScreeners
				);
			}
			if (
				el.tasks == "12. Screen trial registries" &&
				this.screening.screenTrialRegisPeople != null
			) {
				this.checkPeopleInvolved(
					el.peopleInvolved,
					this.screening.screenTrialRegisPeople
				);
			}
			if (
				el.tasks == "13. Citation search" &&
				this.screening.conductSSearchPeople != null
			) {
				this.checkPeopleInvolved(
					el.peopleInvolved,
					this.screening.conductSSearchPeople
				);
			}
			if (
				el.tasks == "14. Screen citation analysis" &&
				this.screening.screenCitationSearchPeople != null
			) {
				this.checkPeopleInvolved(
					el.peopleInvolved,
					this.screening.screenCitationSearchPeople
				);
			}
			if (
				el.tasks == "15. Extract data" &&
				this.extraction.extractionAuthors != null
			) {
				//alert(JSON.stringify(this.extraction.extractionAuthors));
				this.checkPeopleInvolved(
					el.peopleInvolved,
					this.extraction.extractionAuthors
				);
			}
			if (
				el.tasks == "16. Risk of Bias assessment" &&
				this.riskOfBias.assessedRobAuthors != null
			) {
				this.checkPeopleInvolved(
					el.peopleInvolved,
					this.riskOfBias.assessedRobAuthors
				);
			}
		});
	}
};
</script>
