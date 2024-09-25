<template>
	<AutoComplete
		v-model="params.data.peopleInvolved"
		:suggestions="filteredPeople"
		field="label"
		:multiple="true"
		@complete="searchAuthors($event)"
		@item-select="selectChanges($event)"
		@item-unselect="unselectChanges($event)"
	/>
</template>

<script>
import AutoComplete from "primevue/autocomplete";
export default {
	name: "tableAutoComplete",
	components: {
		AutoComplete
	},
	data() {
		return {
			filteredPeople: null
		};
	},
	methods: {
		selectChanges() {
			if (
				this.params.data.tasks == "Design systematic search strategy" ||
				this.params.data.tasks == "Run systematic search strings" ||
				this.params.data.tasks == "Deduplicate results"
			) {
				//console.log("this.params.data.peopleInvolved:",this.params.data.peopleInvolved);
				this.params.api.getRenderedNodes().forEach(node => {
					if (
						node.data.tasks == "Design systematic search strategy" ||
						node.data.tasks == "Run systematic search strings" ||
						node.data.tasks == "Deduplicate results"
					) {
						node.data.peopleInvolved = this.params.data.peopleInvolved;
					}
				});
				this.$tera.state.searchStrategyAuthors = this.params.data.peopleInvolved;
			}
		},
		unselectChanges() {
			if (
				this.params.data.tasks == "Design systematic search strategy" ||
				this.params.data.tasks == "Run systematic search strings" ||
				this.params.data.tasks == "Deduplicate results"
			) {
				//console.log("this.params.data.peopleInvolved:",this.params.data.peopleInvolved);
				this.params.api.getRenderedNodes().forEach(node => {
					if (
						node.data.tasks == "Design systematic search strategy" ||
						node.data.tasks == "Run systematic search strings" ||
						node.data.tasks == "Deduplicate results"
					) {
						node.data.peopleInvolved = this.params.data.peopleInvolved;
					}
				});
				this.$tera.state.searchStrategyAuthors = this.params.data.peopleInvolved;
			}
		},
		searchAuthors(event) {
			setTimeout(() => {
				if (!event.query.trim().length) {
					this.filteredPeople = [...this.params.titlePageAuthors];
				} else {
					this.filteredPeople = this.params.titlePageAuthors.filter(people => {
						return people.label
							.toLowerCase()
							.startsWith(event.query.toLowerCase());
					});
				}
				//console.log("filteredPerson:", this.filteredPeople);
			}, 250);
		}
	}
};
</script>
<style>
.p-autocomplete {
	width: 100%;
	height: 100%;
}

.p-autocomplete-multiple-container {
	background-color: transparent !important;
	border: 0px !important;
	line-height: normal; /** setting input element not too large */
	min-height: 100px;
	height: 70%;
	width: 100%;
	overflow: auto;
}
.p-autocomplete-token {
	display: block;
}
.p-autocomplete-panel {
	line-height: normal;
	height: 30%;
}
</style>
