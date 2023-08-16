<template>
	<div class="author-div">
		<AutoComplete
			:multiple="true"
			v-model="row[tableHeader.name]"
			:suggestions="filteredPeople"
			field="label"
			@complete="searchAuthors($event)"
			@item-select="checkChanges(row, tableValue.rows)"
			@item-unselect="checkChanges(row, tableValue.rows)"
		/>
	</div>
</template>
<script>
import AutoComplete from "primevue/autocomplete/AutoComplete";
import deepstreamMixin from "@/mixins/DeepstreamMixin";
export default {
	name: "InputAutoComplete",
	mixins: [deepstreamMixin("extraction")],
	props: {
		row: {},
		tableValue: {},
		tableHeader: {},
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
		checkChanges(row, rows) {
			if (
				row.tasks.includes("Design systematic search strategy") ||
				row.tasks.includes("Run systematic search strings") ||
				row.tasks.includes("Deduplicate results")
			) {
				rows.forEach(el => {
					if (
						(el.tasks.includes("Design systematic search strategy") ||
							el.tasks.includes("Run systematic search strings") ||
							el.tasks.includes("Deduplicate results")) &&
						el.tasks != row.tasks
					) {
						el.peopleInvolved = row.peopleInvolved;
					}
				});
			}
			this.$emit("input", this.row.peopleInvolved);
		},
		searchAuthors(event) {
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
	},
	mounted() {
		this.checkChanges(this.row, this.tableValue.rows);
	}
};
</script>
<style>
.author-div {
	position: relative;
	width: 250px;
}
.p-autocomplete-multiple-container {
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
</style>
