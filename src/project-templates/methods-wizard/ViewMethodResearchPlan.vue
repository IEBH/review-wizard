<template>
	<div>
		<h1>Research Plan</h1>
		<InputSrTableCustom
			question="What is your Research Plan?"
			:value="table"
			:titlePageAuthors="Authors"
		></InputSrTableCustom>
	</div>
</template>
<script>
import InputSrTableCustom from "@/components/InputSrTableCustom.vue";
//import deepstreamMixin from "@/mixins/DeepstreamMixin";
export default {
	components: {
		InputSrTableCustom
	},
	computed: {
		/*authorsArr() {
			let da = this.$tera.state?.author;
			this.titlepage.authors?.forEach(el => {
				for (var i = 0; i <  this.$tera.state.acknowledgements.length; i++) {
					if (
						el != this.titlepage.acknowledgements[i] &&
						!da.includes(this.titlepage.acknowledgements[i])
					) {
						//alert(this.titlepage.acknowledgements[i]);
						da.push(this.titlepage.acknowledgements[i]);
					}
				}
			});
		},*/
		table() {
			return this.$tera.state.planTable?.rows.forEach(el => {
				if (
					el.tasks == "Design systematic search strategy" ||
					el.tasks == "Run systematic search strings" ||
					el.tasks == "Deduplicate results"
				) {
					if (this.$tera.state.designSearchStrategyAuthors != null) {
						el.peopleInvolved = [
							...this.$tera.state.designSearchStrategyAuthors,
							...el.peopleInvolved
						];
					}
					if (this.$tera.state.deduplicateResultsAuthors != null) {
						el.peopleInvolved = [
							...this.$tera.state.deduplicateResultsAuthors,
							...el.peopleInvolved
						];
					}
					this.checkUnion(el.peopleInvolved);
				}
				if (
					el.tasks == "Screen abstracts" &&
					this.$tera.state.titleAbstractScreeners != null
				) {
					el.peopleInvolved = [
						...this.$tera.state.titleAbstractScreeners,
						...el.peopleInvolved
					];
					this.checkUnion(el.peopleInvolved);
				}
				if (
					el.tasks == "Obtain full text" &&
					this.$tera.state.fullTextRetrivalAuthor != null
				) {
					el.peopleInvolved = [
						...this.$tera.state.fullTextRetrivalAuthor,
						...el.peopleInvolved
					];
					this.checkUnion(el.peopleInvolved);
				}
				if (
					el.tasks == "Screen full text" &&
					this.$tera.state.fullTextScreeners != null
				) {
					el.peopleInvolved = [
						...this.$tera.state.fullTextScreeners,
						...el.peopleInvolved
					];
					this.checkUnion(el.peopleInvolved);
				}
				if (
					el.tasks == "Screen trial registries" &&
					this.$tera.state.screenTrialRegisPeople != null
				) {
					el.peopleInvolved = [
						...this.$tera.state.screenTrialRegisPeople,
						...el.peopleInvolved
					];
					this.checkUnion(el.peopleInvolved);
				}
				if (
					el.tasks == "Citation search" &&
					this.$tera.state.conductSSearchAuthors != null
				) {
					el.peopleInvolved = [
						...this.$tera.state.conductSSearchAuthors,
						...el.peopleInvolved
					];
					this.checkUnion(el.peopleInvolved);
				}
				if (
					el.tasks == "Screen citation analysis" &&
					this.$tera.state.screenCitationSearchPeople != null
				) {
					el.peopleInvolved = [
						...this.$tera.state.screenCitationSearchPeople,
						...el.peopleInvolved
					];
					this.checkUnion(el.peopleInvolved);
				}
				if (
					el.tasks == "Extract data" &&
					this.extraction.extractionAuthors != null
				) {
					//alert(JSON.stringify(this.extraction.extractionAuthors));
					el.peopleInvolved = [
						...this.$tera.state.extractionAuthors,
						...el.peopleInvolved
					];
					this.checkUnion(el.peopleInvolved);
				}
				if (
					el.tasks == "Risk of Bias assessment" &&
					this.riskOfBias.assessedRobAuthors != null
				) {
					el.peopleInvolved = [
						...this.$tera.state.assessedRobAuthors,
						...el.peopleInvolved
					];
					this.checkUnion(el.peopleInvolved);
				}
			});
		},
		Authors() {
			let da = [
				...this.$tera.state.author,
				...this.$tera.state.acknowledgements
			];
			this.checkUnion(da);
			/**
			 * return this.authorsArr?.map(el => {
				return { label: el };
			});
			 */
			return da?.map(el => {
				return { label: el };
			});
		}
	},
	methods: {
		checkUnion(U) {
			if (U.length > 0) {
				for (var i = 0; i < U.length; i++) {
					for (var j = i + 1; j < U.length; j++) {
						if (U[i].label == U[j].label) {
							U.splice(j, 1);
							j--;
						}
					}
				}
			}
		}
		/*checkPeopleInvolved(pInvolved, authors) {
			if (pInvolved != "") {
				for (var i = 0; i < authors.length; i++) {
					pInvolved.push(authors[i]);
				}
				this.checkUnion(pInvolved);
			} else {
				pInvolved = authors;
			}
			return pInvolved;
		}*/
	}
};
</script>
