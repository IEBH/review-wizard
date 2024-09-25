<template>
	<div>
		<h1>Research Plan</h1>
		<InputSrTableCustom
			v-model="table"
			:titlePageAuthors="Authors"
			@authChangeHandler="authorHandler"
		></InputSrTableCustom>
	</div>
</template>
<script>
import InputSrTableCustom from "@/components/InputSrTableCustom.vue";
export default {
	components: {
		InputSrTableCustom
	},
	computed: {
		table() {
			//return this.checkAuthorSelection(this.$tera.state.planTable);
			return this.authorHandler(-1, null, this.$tera.state.planTable);
		},
		Authors() {
			let da = [];
			if (
				//check if authors are initialized
				this.$tera.state.author != undefined &&
				this.$tera.state.acknowledgements != undefined
			) {
				da = [...this.$tera.state.author, ...this.$tera.state.acknowledgements];
				da=this.checkUnion(da.map(el => {
				    return { label: el };
			    }));
			};
			console.log("daaa:"+JSON.stringify(da));
			return da;
		}
	},
	methods: {
		authorHandler(ifadd,row,event){
			if(row!=null){
				this.authorModify(ifadd,row,event);
			}else{
				if(event!=undefined){
					return this.checkAuthorSelection(event);
				}
			}
			return this.$tera.state.planTable;
		},
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
			return U;
		},
		checkAuthorSelection(table) {
			//console.log("defaults:" + JSON.stringify(table));
			table.rows.forEach(el => {
				if (
					el.tasks == "Design systematic search strategy" ||
					el.tasks == "Run systematic search strings" ||
					el.tasks == "Deduplicate results"
				) {
					if (this.$tera.state.searchStrategyAuthors != null) {
						el.peopleInvolved=this.$tera.state.searchStrategyAuthors;
					}
				}
				if (
					el.tasks == "Citation search" &&
					this.$tera.state.conductSSearchAuthors != null
				) {
					/*el.peopleInvolved = [
						...this.$tera.state.conductSSearchAuthors,
						...el.peopleInvolved
					];
					this.checkUnion(el.peopleInvolved);*/
					el.peopleInvolved=this.$tera.state.conductSSearchAuthors;
				}
				if (
					el.tasks == "Screen abstracts" &&
					this.$tera.state.titleAbstractScreeners != null
				) {
					el.peopleInvolved=this.$tera.state.titleAbstractScreeners;
				}
				if (
					el.tasks == "Obtain full text" &&
					this.$tera.state.fullTextRetrivalAuthor != null
				) {
					el.peopleInvolved=this.$tera.state.fullTextRetrivalAuthor;
				}
				if (
					el.tasks == "Screen full text" &&
					this.$tera.state.fullTextScreeners != null
				) {
					el.peopleInvolved=this.$tera.state.fullTextScreeners;
				}
				if (
					el.tasks == "Screen trial registries" &&
					this.$tera.state.screenTrialRegisPeople != null
				) {
					el.peopleInvolved=this.$tera.state.screenTrialRegisPeople;
				}
				
				if (
					el.tasks == "Screen citation analysis" &&
					this.$tera.state.screenCitationSearchPeople != null
				) {
					el.peopleInvolved=this.$tera.state.screenCitationSearchPeople;
				}
				if (
					el.tasks == "Extract data" &&
					this.$tera.state.extractionAuthors != null
				) {
					el.peopleInvolved=this.$tera.state.extractionAuthors;
				}
				if (
					el.tasks == "Risk of Bias assessment" &&
					this.$tera.state.assessedRobAuthors != null
				) {
					el.peopleInvolved=this.$tera.state.assessedRobAuthors;
				}
			});
			return table;
		},
		authorModify(ifadd, row, event) {
			if (
				row.tasks.includes("Design systematic search strategy") ||
				row.tasks.includes("Run systematic search strings") ||
				row.tasks.includes("Deduplicate results")
			) {
				if (ifadd == 1) {
					this.$tera.state.searchStrategyAuthors.splice(
						this.$tera.state.searchStrategyAuthors.length,
						0,
						event
					);
				} else {
					this.$tera.state.searchStrategyAuthors.splice(
						this.$tera.state.searchStrategyAuthors.indexOf(event),
						event
					);
				}
			}
			if (row.tasks.includes("Citation search")) {
				if (ifadd == 1) {
					this.$tera.state.conductSSearchAuthors.push(event);
				} else {
					this.$tera.state.conductSSearchAuthors.splice(
						this.$tera.state.conductSSearchAuthors.indexOf(event),
						event
					);
				}
			}
			if (row.tasks.includes("Screen abstracts")) {
				if (ifadd == 1) {
					this.$tera.state.titleAbstractScreeners.push(event);
				} else {
					this.$tera.state.titleAbstractScreeners.splice(
						this.$tera.state.titleAbstractScreeners.indexOf(event),
						event
					);
				}
			}
			if (row.tasks.includes("Obtain full text")) {
				if (ifadd == 1) {
					this.$tera.state.fullTextRetrivalAuthor.push(event);
				} else {
					this.$tera.state.fullTextRetrivalAuthor.splice(
						this.$tera.state.fullTextRetrivalAuthor.indexOf(event),
						event
					);
				}
			}
			if (row.tasks.includes("Screen full text")) {
				if (ifadd == 1) {
					this.$tera.state.fullTextScreeners.push(event);
				} else {
					this.$tera.state.fullTextScreeners.splice(
						this.$tera.state.fullTextScreeners.indexOf(event),
						event
					);
				}
			}
			if (row.tasks.includes("Screen trial registries")) {
				if (ifadd == 1) {
					this.$tera.state.screenTrialRegisPeople.push(event);
				} else {
					this.$tera.state.screenTrialRegisPeople.splice(
						this.$tera.state.screenTrialRegisPeople.indexOf(event),
						event
					);
				}
			}
			if (row.tasks.includes("Screen citation analysis")) {
				if (ifadd == 1) {
					this.$tera.state.screenCitationSearchPeople.push(event);
				} else {
					this.$tera.state.screenCitationSearchPeople.splice(
						this.$tera.state.screenCitationSearchPeople.indexOf(event),
						event
					);
				}
			}
			if (row.tasks.includes("Extract data")) {
				if (ifadd == 1) {
					this.$tera.state.extractionAuthors.push(event);
				} else {
					this.$tera.state.extractionAuthors.splice(
						this.$tera.state.extractionAuthors.indexOf(event),
						event
					);
				}
			}
			if (row.tasks.includes("Risk of Bias assessment")) {
				if (ifadd == 1) {
					this.$tera.state.assessedRobAuthors.push(event);
				} else {
					this.$tera.state.assessedRobAuthors.splice(
						this.$tera.state.assessedRobAuthors.indexOf(event),
						event
					);
				}
			}
		},
	}
};
</script>
