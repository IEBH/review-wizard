<template>
	<div class="p-mb-6">
		<h1>Data Extraction</h1>
		<InputDETableCustom question="What data will be extracted?" :value=extraction.detable
			@input="updateField('detable', $event)"></InputDETableCustom>
	</div>
</template>

<script>
import isEqual from "lodash/isEqual";
import sortBy from "lodash/sortBy";
import OutputDataExtraction from "./OutputDataExtraction.vue";
import * as XLSX from "xlsx";
import deepstreamMixin from "@/mixins/DeepstreamMixin";
import ExcelJS from 'exceljs';
import InputDETableCustom from "@/components/InputDETableCustom.vue";
// import 'v-tooltip/dist/v-tooltip.css'; // Import the v-tooltip CSS
import VTooltip from 'v-tooltip';

export default {
	name: "ViewMethodDataExtractionReport",
	mixins: [
		deepstreamMixin("researchplan"),
		deepstreamMixin("titlepage"),
		deepstreamMixin("picot"),
		deepstreamMixin("extraction")
	],
	directives: {
		tooltip: VTooltip.directive, // Register the v-tooltip directive
	},
	components: {
		InputDETableCustom

	},
	watch: {
		extraction: {
			handler(newVal) {
				// This will be triggered when value changes
				if (!this.extraction.detable) {
					this.extraction.detable = this.extraction.methods;
				}
			
				const formattedObject = {
					headers: this.extraction.methods,
					rows: []
				};
				if (this.extraction.detable && this.extraction.detable.length != 2) {
					this.extraction.detable = formattedObject;
				}
				console.log("extraction newwwww", this.extraction.methods, formattedObject, newVal);
			},
		},
	},
	computed: {

		numberOfExtractors() {
			return this.extraction.extractionAuthors?.length;
		},
		pfDataExtractAuthors() {
			let da = this.titlepage.authors?.map(el => {
				return { label: el };
			});
			this.researchplan.planTable?.rows.forEach(el => {
				if (el.tasks == "Extract data" && el.peopleInvolved != "") {
					da = el.peopleInvolved;
				}
			});
			return da;
		},
		// formatData() {
		// 	// extraction.methods
		// 	if (this.extraction.outcomes.length > 0) {
		// 		this.extraction.outcomes.forEach(data => {
		// 			let row = { 'label': data.main }
		// 			this.extraction.methods.push(row);
		// 		});
		// 	}
		// 	this.extraction.outcomes.forEach(data => {
		// 		data.custom = "";
		// 	});
		// 	console.log("hereeeeee", this.extraction, this.extraction.methods);
		// 	return this.extraction.methods;
		// }
	},
	methods: {
		changeHandler(event) {
			if (event != undefined) {
				this.$emit("input", this.value);
			}
		},
		compareLabel(a, b) {
			if (a.label < b.label) {
				return -1;
			} else if (a.label > b.label) {
				return 1;
			} else {
				return 0;
			}
		},
		compareMain(a, b) {
			if (a.main < b.main) {
				return -1;
			} else if (a.main > b.main) {
				return 1;
			} else {
				return 0;
			}
		},
		arrayEquals(arr1, arr2) {
			let sorted1;
			let sorted2;
			if (arr1 && arr2) {
				if (arr1[0]?.label && arr2[0]?.label) {
					sorted1 = sortBy(arr1, "label");
					sorted2 = sortBy(arr2, "label");
				} else if (arr1[0]?.main && arr2[0]?.main) {
					sorted1 = sortBy(arr1, "main");
					sorted2 = sortBy(arr2, "main");
				} else {
					sorted1 = arr1;
					sorted2 = arr2;
				}
			} else {
				return false;
			}
			return isEqual(sorted1, sorted2);
		},
		generateExcel(samples, filename) {
			let items = [];
			samples.forEach(x => {
				items.push(x.label);
			});

			const workbook = new ExcelJS.Workbook();
			const worksheet = workbook.addWorksheet('Sheet 1');
			let headers = items;
			let altColour = 'fceddd';
			// Set alternating colors for the first row (headers)
			headers.forEach((header, index) => {
				const isEvenColumn = index % 2 === 0;
				let cell = worksheet.getCell(1, index + 1);
				// Apply alternate color to even columns in the first row (headers)
				if (isEvenColumn) {
					cell.fill = {
						type: 'pattern',
						pattern: 'solid',
						fgColor: { argb: altColour },
					};
				}
				// Set the header text
				cell.value = header;
				altColour = altColour === 'fceddd' ? 'f6c897' : 'fceddd';
				const headerTextLength = header.length;
				const cellWidth = Math.max(10, headerTextLength + 2);
				worksheet.getColumn(index + 1).width = cellWidth;
			});

			// Add your data rows
			const data = [];

			data.forEach((rowData, rowIndex) => {
				rowData.forEach((cellData, colIndex) => {
					worksheet.getCell(rowIndex + 2, colIndex + 1).value = cellData;
				});
			});

			worksheet.addRows(data);

			// Create a buffer (Uint8Array) containing the Excel file
			workbook.xlsx.writeBuffer().then(buffer => {
				// Create a Blob from the buffer
				const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

				// Create a download link and trigger the download
				const link = document.createElement("a");
				link.href = URL.createObjectURL(blob);
				if (filename != "") {
					link.download = filename + ".xlsx";
				} else {
					link.download = "DataExtraction.xlsx"
				}
				link.click();
			});
		},
		addRow() {
			// Add a new row with empty cells based on the header count
			// const newRow = Array(this.extraction.methods.length).fill('');
			// this.rowArray.push(newRow);
			this.value.push({});
			this.$emit("input", this.value);
			const lastIndex = this.value.length - 1;
			// Wait until next tick so component is rendered
			this.$nextTick(() => {
				this.$refs[lastIndex][0].$el.focus();
			});
		},
		update(index, original, field, event) {
			var newObj = original;
			newObj[field] = event;
			this.$set(this.value, index, newObj);
			this.$emit("input", this.value);
		},
		confirmDelete(row, index) {
			this.selectedRow = row;
			this.selectedRow.index = index;
			this.deleteProductDialog = true;
		},
		deleteProduct() {
			this.value.splice(this.selectedRow.index, 1);
			this.deleteProductDialog = false;
			this.$emit("input", this.value);
			this.$set(this.value, this.value);
			this.selectedRow = {};
		},
		moveRowUp(index) {
			console.log("this.value", this.value);
			if (index > 0) {
				const tempRow = this.value[index];
				this.$set(this.value, index, this.value[index - 1]);
				this.$set(this.value, index - 1, tempRow);
			}
		},
		moveRowDown(index) {
			console.log("this.value", this.value)
			if (index < this.value.length - 1) {
				this.$set(this.value, index, this.value[index + 1]);
				this.$set(this.value, index + 1, this.value[index]);
			}
		},
		exportExcel(rows, headers, fileName) {
			// rows = [];
			console.log('rowsrowsrows', rows, headers)
			let workbook = XLSX.utils.book_new();
			let xlsxData = this.convertJson(rows, headers);
			let sheet1 = XLSX.utils.json_to_sheet(xlsxData);
			// Formating Cells on excel
			const jsonKeys = headers ? headers : Object.keys(rows[0]);
			let objectMaxLength = [];
			let keysForPatch = [];
			for (let i = 0; i < rows.length; i++) {
				let value = rows[i];
				for (let j = 0; j < jsonKeys.length; j++) {
					keysForPatch.push(jsonKeys[j].name);
					if (typeof value[jsonKeys[j].name] == "number") {
						objectMaxLength[j] = 10;
					}
					else {
						const l = value[jsonKeys[j].name] ? value[jsonKeys[j].name].length : 0;
						if (l && l != 1) {
							objectMaxLength[j] = objectMaxLength[j] >= l ? objectMaxLength[j] : l;
						} else {
							objectMaxLength[j] = j == 0 ? 10 : 40;
						}

					}
				}
				let key = keysForPatch;
				for (let j = 0; j < key.length; j++) {
					objectMaxLength[j] = objectMaxLength[j] >= key[j].length ? objectMaxLength[j] : key[j].length;
				}
			}
			const wscols = objectMaxLength.map(w => { return { width: w } });
			sheet1["!cols"] = wscols;
			// sheet1['A1'].s = {
			// 	fill: {
			// 		patternType: "solid",
			// 		fgColor: { rgb: "00dce6f1" },
			// 		bgColor: { rgb: "00dce6f1" }
			// 	}
			// }
			XLSX.utils.book_append_sheet(workbook, sheet1, "ResearchPlan1");
			if (fileName != "") {
				XLSX.writeFile(workbook, fileName + ".xlsx");
			} else {
				XLSX.writeFile(workbook, "ResearchPlan.xlsx");
			}
			this.isShowDialog = false;
		}
	},
	mounted() {
		console.log("Extracttttt hereeeeee", this.extraction, this.extraction.methods);

	},
	data() {
		return {
			//pfDataExtractAuthors: [], //--perform data extraction authors
			numberOptions: ["1", "2", "3", "4", "5", "6"],
			isShowDialog: false,
			ifEdit: false,
			show: false,
			fileName: "",
			selectedRow: {},
			deleteProductDialog: false,
			outputComponent: OutputDataExtraction,
			value: []
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-message-text {
	display: inline-flex;
	width: 100%;
}

.nodata {
	font-style: italic;
	color: #3650a1;
	font-weight: 700;
	text-align: center;
}

.message-inside-text {
	/* Align text horizontal center with right float button */
	margin: auto auto auto 0px;
}

/* newly added for table */

table {
	border-collapse: collapse;
	display: block;
	overflow: auto;
	overflow-x: auto;
	/*background-color: rgba(240, 240, 240, 0.73);*/
}

.p-togglebutton.p-button {
	background: rgba(72, 90, 120, 0.824);
	border: transparent;
	height: 20px;
}

.p-button-text {
	height: 20px;
}

.p-fluid-thead {
	position: sticky;
	top: 0px;
	background-color: white;
	border: 1px solid black;
	z-index: 10;
}

.p-fluid .p-inputtextarea {
	border-style: none;
}

.th_container {
	/*display: inline-block;*/
	display: flex;
	position: relative;
	height: 30px;
	width: 250px;
}

.name {
	/*float: left;*/
	/*flex: 4;*/
	position: absolute;
	left: 30%;
	top: 20%;
	font-size: 18px;
	z-index: 10;
}

.menu {
	/*float: right;*/
	position: absolute;
	left: 68%;
	top: 20%;
}

.btnArea {
	position: sticky;
	right: 0px;
	top: 30px;
	background-color: transparent;
}

.inline-input {
	height: 40px;
}

th,
td {
	border: 1px solid black;
}

.textdesign {
	border: none;
	width: 330px;
	padding: initial;
	height: 130px;
}
</style>
