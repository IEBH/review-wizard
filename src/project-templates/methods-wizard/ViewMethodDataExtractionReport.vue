<template>
	<div class="p-mb-6">
		<h1>Data Extraction</h1>
		<InputDETableCustom
			question="What data will be extracted?"
			:titleshort="$tera.state.titleshort"
			v-model="table"
		></InputDETableCustom>
	</div>
</template>

<script>
import InputDETableCustom from "@/components/InputDETableCustom.vue";

import VTooltip from "v-tooltip";

export default {
	name: "ViewMethodDataExtractionReport",
	directives: {
		tooltip: VTooltip.directive // Register the v-tooltip directive
	},
	components: {
		InputDETableCustom
	},
	computed: {
		table() {
			let concatedArray = [];
			//[Extraction] methods + participants + interventions + comparators
			concatedArray = concatedArray.concat(
				this.$tera.state.methods,
				this.$tera.state.participants,
				this.$tera.state.interventions,
				this.$tera.state.comparators
			);
			//[Extraction] extractionOutcomes
			let filteredOutcome = this.$tera.state.extractionOutcomes.filter(
				item => item.main
			);
			if (filteredOutcome && filteredOutcome.length > 0) {
				filteredOutcome.forEach(item => {
					concatedArray.push({ label: item.main });
				});
			}
			//[Extraction] extractionTypes
			concatedArray = concatedArray.concat(this.$tera.state.extractionTypes);
			//Add Headers in detable
			return this.addHeaders(this.$tera.state.detable, concatedArray);
		}
	},
	methods: {
		addHeaders(table, concatArray) {
			const xLabels = new Set(concatArray.map(item => item.label));
			table.headers = concatArray;
			if (table.rows.length == 0) {
				const newRow = {};
				for (const label of xLabels) {
					newRow[label] = "";
				}
				table.rows = table.rows.concat(newRow);
				console.log("rows:" + table.rows);
			} else {
				table.rows.map(row => {
					const newRow = {};
					for (const label of xLabels) {
						newRow[label] = row[label] || "";
					}
					return newRow;
				});
			}
			return table;
		}
	}
	/*watch: {
		extraction: {
			handler(newVal) {
				let concatedArray = [];

				concatedArray = concatedArray.concat(
					this.$tera.state.methods,
					this.$tera.state.participants,
					this.$tera.state.interventions,
					this.$tera.state.comparators
				);
				let filteredOutcome = this.$tera.state.extractionOutcomes.filter(
					item => item.main
				);
				if (filteredOutcome && filteredOutcome.length > 0) {
					filteredOutcome.forEach(item => {
						concatedArray.push({ label: item.main });
					});
				}
				concatedArray = concatedArray.concat(this.$tera.state.extractionTypes);

				if (this.$tera.state.detable) {
					const xLabels = new Set(concatedArray.map(item => item.label));
					this.$tera.state.detable.headers = concatedArray;
					this.$tera.state.detable.rows = this.$tera.state.detable.rows.map(
						row => {
							const newRow = {};
							for (const label of xLabels) {
								newRow[label] = row[label] || "";
							}
							return newRow;
						}
					);
				}

				// This will be triggered when value changes
				/*if (!this.extraction.detable) {
					this.extraction.detable = { headers: [], rows: [] };
					this.extraction.detable.headers = concatedArray;
				}

				// const formattedObject = {
				// 	headers: this.extraction.methods,
				// 	rows: []
				// };
				// if (this.extraction.detable && this.extraction.detable.length != 2) {
				// 	this.extraction.detable = formattedObject;
				// }
				console.log(
					"extraction newwwww",
					this.$tera.state.methods,
					this.$tera.state.detable,
					newVal
				);
			}
		}
	}*/
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
