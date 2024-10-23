<template>
	<div class="author-div">
		<div :class="isEvenRow == false ? 'customblue' : 'customwhite'">
			<AutoComplete
			    class="auto"
				:multiple="true"
				v-model="row.peopleInvolved"
				:suggestions="filteredPeople"
				field="label"
				@complete="searchAuthors($event)"
				@item-select="selectChanges(row, $event.value)"
				@item-unselect="unselectChanges(row, $event.value)"
			/>
		</div></div
></template>
<script>
import AutoComplete from "primevue/autocomplete/AutoComplete";

export default {
	name: "InputAutoComplete",

	props: {
		row: {},
		isEvenRow: Boolean,
		titlePageAuthors: Array
	},
	components: {
		AutoComplete
	},
	data() {
		return {
			filteredPeople: null
		};
	},
	methods: {
		selectChanges(row, event) {
			this.$emit("autocom", 1, row, event);
		},
		unselectChanges(row, event) {
			this.$emit("autocom", 0, row, event);
		},
		searchAuthors(event) {
			//console.log("titlePageAuthors:"+JSON.stringify(this.titlePageAuthors));
			setTimeout(() => {
				if (!event.query.trim().length) {
					this.filteredPeople = [...this.titlePageAuthors];
				} else {
					this.filteredPeople = this.titlePageAuthors.filter(people => {
						return people.label
							.toLowerCase()
							.startsWith(event.query.toLowerCase());
					});
				}
			}, 250);
		}
	}
};
</script>
<style>
.author-div {
	position: relative;
	width: 250px;
}

.p-autocomplete-multiple-container {
	/*border: none;*/
	display: inline;
	min-height: 200px;
}

.p-fluid .p-autocomplete {
	height: 100%;
	width: 100%;
}

.p-input-filled .p-inputtext {
	background-color: white;
}

.customblue .auto .p-inputtext {
	background-color: #c6e2ff !important;
}

.customwhite .auto .p-inputtext {
	background-color: white !important;
}
</style>
