<template style="display: inline">
	<AutoComplete
		v-model="params.data.peopleInvolved"
		:suggestions="filteredPeople"
		field="label"
		:multiple="true"
		@complete="searchAuthors($event)"
		@item-select="selectChanges($event.value)"
		@item-unselect="unselectChanges($event.value)"
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
				//TODO pass this.params.data.peopleInvolved to parent table
			}
		},
		unselectChanges() {
			if (
				this.params.data.tasks == "Design systematic search strategy" ||
				this.params.data.tasks == "Run systematic search strings" ||
				this.params.data.tasks == "Deduplicate results"
			) {
				//TODO pass this.params.data.peopleInvolved to parent table
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
.p-component {
	width: 100%;
	min-height: 70%;
}
.p-autocomplete-multiple-container {
	background-color: transparent !important;
	border: 0px !important;
	
	line-height: normal; /** setting input element not too large */
	overflow: auto;
}
.p-autocomplete-token {
	display: block;
}
.p-autocomplete-panel {
	line-height: normal;
}
</style>
