<template>
	<div class="p-mb-6">
		<p>
			<b>{{ question }}
				<ToggleButton v-model="ifEdit" onIcon="pi pi-check" offIcon="pi pi-user-edit" offLabel="Save" />
				<Button icon="pi pi-cloud-download" @click="isShowDialog = true" class="p-button-secondary p-button-text" />
				<Button v-if="ifEdit" class="p-button-raised p-button-text" icon="pi pi-arrow-down" @click="addNewRow()"
					style="background-color:white" />
			</b>

		</p>
		<!-- <pre>
		{{ value }}
	  </pre> -->
		<div>

			<!-- @cell-click="handleCellClick" -->
			<!-- <vue-excel-editor ref="grid" @delete="delRecord" :no-header-edit="true" v-if="value && value.rows"
				v-model="value.rows">
				<vue-excel-column v-for="(column, index) in value.headers" 
				:key="index" 
				:field="column.label"
				:label="column.label"
				
				>
				</vue-excel-column>	
			</vue-excel-editor> -->
			<!-- :type="column.label == 'Year' ? column.type == 'number' : column.type == 'string'" -->
			<!-- <vue-excel-column @delete="delRecord" label="Actions" :field="null" >
				</vue-excel-column> -->

		</div>
		<table class="p-fluid" style="width:100%;" v-if="value">
			<thead class="p-fluid-thead">
				<tr>
					<th v-for="(thead, index) in value.headers" :key="index">
						<div class="th_container">
							<div class="name">
								{{ thead.label }}
							</div>
						</div>
					</th>
					<th v-if="ifEdit">
						<div style="width: 160px">
							<Button class="p-button-raised p-button-text" icon="pi pi-arrow-down" @click="addNewRow()"
								style="background-color:white" />
						</div>
					</th>
				</tr>
			</thead>
			<tbody>
				<!-- <tr v-for="(row, index) in value.rows" :key="index">
					<td v-for="thead of value.headers" :key="thead.label">
						<Textarea type="text" v-model="row[thead.label]" :ref="index" :autoResize="true"
							@change="changeHandler($event.target.value)" />
					</td>
					<td class="btnArea" v-if="ifEdit">
				<tr>
					<td style="border-style: none;">
						<Button v-if="ifEdit" class="p-button-raised p-button-text" icon="pi pi-ellipsis-h"
							@click="show = !show" style="background-color:white" />
					</td>
					<td style="border-style: none;">
						<span class="p-buttonset" v-if="show && ifEdit">
							<Button class="p-button-raised p-button-text" icon="pi pi-arrow-up" @click="addRow(index, 0)"
								style="background-color:white" />
							<Button class="p-button-raised p-button-text" icon="pi pi-trash" @click="deleRow(index)"
								style="background-color:white" />
							<Button class="p-button-raised p-button-text" icon="pi pi-arrow-down" @click="addRow(index, 1)"
								style="background-color:white" />
						</span>
					</td>
				</tr>
				</td>
				</tr> -->
				<tr v-for="(row, index) in value.rows" :key="index">
					<td v-for="thead of value.headers" :key="thead.label">
						<Textarea type="text" v-model="row[thead.label]" :ref="index" :autoResize="true" @change="changeHandler($event.target.value)" />
						<!-- @change="changeHandler($event) -->
						<!-- @input="updateRow(index, thead.label, $event)" /> -->
					</td>
					<td class="btnArea" v-if="ifEdit">
				<tr>
					<td style="border-style: none;">
						<Button v-if="ifEdit" class="p-button-raised p-button-text" icon="pi pi-ellipsis-h"
							@click="show = !show" style="background-color:white" />
					</td>
					<td style="border-style: none;">
						<span class="p-buttonset" v-if="show && ifEdit">
							<!-- <Button class="p-button-raised p-button-text" icon="pi pi-arrow-up" @click="addRow(index, 0)"
								style="background-color:white" /> -->
							<Button class="p-button-raised p-button-text" icon="pi pi-arrow-up" @click="moveRowUp(index)"
								style="background-color:white; color: blue; border: 1px solid blue;" />
							<Button class="p-button-raised p-button-text" icon="pi pi-trash" @click="deleteRow(index)"
								style="background-color:white" />
							<Button class="p-button-raised p-button-text" icon="pi pi-arrow-down"
								@click="moveRowDown(index)"
								style="background-color:white; color: red; border: 1px solid red;" />
							<!-- <Button class="p-button-raised p-button-text" icon="pi pi-arrow-down" @click="addRow(index, 1)"
								style="background-color:white" /> -->
						</span>
						<!-- <Button class="p-button-raised p-button-text" icon="pi pi-arrow-up" @click="moveRowUp(index)"
							style="background-color:white; color: blue; border: 1px solid blue;" />
						<Button class="p-button-raised p-button-text" icon="pi pi-arrow-down" @click="moveRowDown(index)"
							style="background-color:white; color: red; border: 1px solid red;" /> -->
					</td>
				</tr>
				</td>
				</tr>
			</tbody>
		</table>
		<Dialog header="Export to Excel" :visible.sync="isShowDialog" :modal="true" :style="{ width: '450px' }">
			<div class="p-inputgroup">
				<span class="p-inputgroup-addon">NewFile-Name:</span>
				<InputText placeholder="e.g.DataExtraction.xlsx" v-model="fileName" />
			</div>

			<template #footer>
				<Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="isShowDialog = false" />
				<Button label="Comfirm" icon="pi pi-check" class="p-button-text" 
				@click="generateExcel(value.headers, value.rows, fileName)"/>
				<!-- @click="exportAsExcel(fileName)" -->
				<!-- @click="exportExcel(value.rows, value.headers, fileName)" /> -->
			</template>
		</Dialog>
	</div>
</template>
<script>
import Textarea from "primevue/textarea";
import Button from "primevue/button";
// import Vue from "vue"; // Import Vue
//import AutoComplete from "primevue/autocomplete";
import ExcelJS from 'exceljs';
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import ToggleButton from "primevue/togglebutton";
import Vue from 'vue'
import VueExcelEditor from 'vue-excel-editor'
Vue.use(VueExcelEditor)
import * as XLSX from "xlsx";
// import RichTextEditor from "@/components/RichTextEditor.vue";
// import InputAutoComplete from "@/components/InputAutoComplete.vue";
// import InputSrMenubar from "../components/InputSrMenubar.vue";
// import NotesContent from "./NotesContent.vue";
export default {
	name: "InputDETable",
	components: {
		Textarea,
		Button,
		Dialog,
		InputText,
		// InputAutoComplete,
		// InputSrMenubar,
		// NotesContent,
		ToggleButton,
		// RichTextEditor
	},
	props: {
		question: String,
		titlePageAuthors: Array,
		value: {}
	},
	data() {
		return {
			//filteredPeople: null,
			ifEdit: false,
			show: false,
			isShowDialog: false,
			fileName: "",
			methodsUrl: "",
			toolLinkName: "",
			people: [],
			// selectedTextColor: 'black',
			// isBold: false,
			selectedRowIndex: -1, // Initialize with -1 (no selection)
			selectedColumnIndex: -1, // Initialize with -1 (no selection)
		};
	},
	methods: {
		changeHandler(event) {
			if (event != undefined) {
				this.$emit("values", this.value);
			}
		},
		addRow(index, optionNum) {
			let row = {};
			for (var i = 0; i < this.value.headers.length; i++) {
				// row[this.value.headers[i].label] = '';
				this.$set(row, row[this.value.headers[i].label]);
			}
			if (optionNum == 0) {
				this.value.rows.splice(index, 0, row);
			} else {
				this.value.rows.splice(index + 1, 0, row);
			}
			this.$emit("values", this.value);
		},
		addNewRow() {
			const newRow = {};
			for (const header of this.value.headers) {
				newRow[header.label] = ""; // Initialize new row with empty values
			}
			this.value.rows.push(newRow);
			console.log("New row added", this.value);
			// debugger;
			// Vue.set(this.value.rows, this.value.rows.length, newRow);
			this.$emit("values", this.value);
			console.log("placed", this.value);
		},
		deleteRow(index) {
			this.value.rows.splice(index, 1);
			this.$emit("values", this.value);
		},
		moveRowUp(index) {
			if (index > 0) {
				const movedRow = this.value.rows.splice(index, 1)[0];
				this.value.rows.splice(index - 1, 0, movedRow);
				this.$emit("values", this.value);
			}
		},

		moveRowDown(index) {
			if (index < this.value.rows.length - 1) {
				const movedRow = this.value.rows.splice(index, 1)[0];
				this.value.rows.splice(index + 1, 0, movedRow);
				this.$emit("values", this.value);
			}
		},
		exportExcel(rows, headers, fileName) {
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
		},
		// generateExcel(samples, rows, filename) {
		// 	let items = [];
		// 	samples.forEach(x => {
		// 		items.push(x.label);
		// 	});

		// 	const workbook = new ExcelJS.Workbook();
		// 	const worksheet = workbook.addWorksheet('Sheet 1');
		// 	let headers = items;
		// 	let altColour = 'fceddd';
		// 	// Set alternating colors for the first row (headers)
		// 	headers.forEach((header, index) => {
		// 		const isEvenColumn = index % 2 === 0;
		// 		let cell = worksheet.getCell(1, index + 1);
		// 		// Apply alternate color to even columns in the first row (headers)
		// 		if (isEvenColumn) {
		// 			cell.fill = {
		// 				type: 'pattern',
		// 				pattern: 'solid',
		// 				fgColor: { argb: altColour },
		// 			};
		// 		}
		// 		// Set the header text
		// 		cell.value = header;
		// 		altColour = altColour === 'fceddd' ? 'f6c897' : 'fceddd';
		// 		const headerTextLength = header.length;
		// 		const cellWidth = Math.max(10, headerTextLength + 2);
		// 		worksheet.getColumn(index + 1).width = cellWidth;
		// 	});

		// 	// Add your data rows
		// 	const data = [];
		// 	rows.forEach(row => {
		// 		const rowData = samples.map(header => row[header.label] || ''); // Get data for each column
		// 		worksheet.addRow(rowData);
		// 	});

		// 	data.forEach((rowData, rowIndex) => {
		// 		rowData.forEach((cellData, colIndex) => {
		// 			worksheet.getCell(rowIndex + 2, colIndex + 1).value = cellData;
		// 		});
		// 	});

		// 	worksheet.addRows(data);

		// 	// Create a buffer (Uint8Array) containing the Excel file
		// 	workbook.xlsx.writeBuffer().then(buffer => {
		// 		// Create a Blob from the buffer
		// 		const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

		// 		// Create a download link and trigger the download
		// 		const link = document.createElement("a");
		// 		link.href = URL.createObjectURL(blob);
		// 		if (filename != "") {
		// 			link.download = filename + ".xlsx";
		// 		} else {
		// 			link.download = "DataExtraction.xlsx"
		// 		}
		// 		link.click();
		// 	});
		// },
		generateExcel(samples, rows, filename) {
			const workbook = new ExcelJS.Workbook();
			const worksheet = workbook.addWorksheet('Sheet 1');

			// Create headers
			const headers = samples.map(header => header.label);
			worksheet.addRow(headers).font = { bold: true }; // Add header row and make it bold

			// Initialize column widths
			const columnWidths = headers.map(header => header.length);

			// Add data rows and update column widths
			rows.forEach(row => {
				const rowData = samples.map(header => row[header.label] || '');
				worksheet.addRow(rowData);

				// Update column widths based on the length of data in each cell
				rowData.forEach((cellData, colIndex) => {
					const cellDataLength = String(cellData).length;
					if (cellDataLength > columnWidths[colIndex]) {
						columnWidths[colIndex] = cellDataLength;
					}
				});
			});

			// Set column widths
			headers.forEach((_, index) => {
				worksheet.getColumn(index + 1).width = Math.max(10, columnWidths[index] + 2);
			});

			// Apply alternating colors to header row
			headers.forEach((_, index) => {
				const isEvenColumn = index % 2 === 0;
				const cell = worksheet.getCell(1, index + 1);
				if (isEvenColumn) {
					cell.fill = {
						type: 'pattern',
						pattern: 'solid',
						fgColor: { argb: 'fceddd' },
					};
				} else {
					cell.fill = {
						type: 'pattern',
						pattern: 'solid',
						fgColor: { argb: 'f6c897' },
					};
				}
			});

			// Generate Excel file
			workbook.xlsx.writeBuffer().then(buffer => {
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
			this.isShowDialog = false;
		},
		convertJson(rows, headers) {
			let xlsxData = [];
			rows.forEach(row => {
				let da = {};
				for (var i = 0; i < headers.length; i++) {
					if (headers[i].name == "peopleInvolved") {
						let authors = "";
						if (row[headers[i].name].length > 0) {
							row[headers[i].name].forEach(per => {
								authors += per.label + ",";
							});
						}
						this.$set(da, headers[i].label, authors);
					} else if (headers[i].name == "toolLink") {
						let link = "";
						if (row[headers[i].name].length > 0) {
							row[headers[i].name].forEach(tlink => {
								if (tlink.name != "") {
									link += tlink.name + ";";
								}
							});
						}
						this.$set(da, headers[i].label, link);
					} else {
						this.$set(da, headers[i].label, row[headers[i].name]);
					}
				}
				xlsxData.push(da);
			});
			return xlsxData;
		},
		exportAsExcel(filenamesaved) {
			const format = 'xlsx'
			const exportSelectedOnly = false;
			let filename = filenamesaved == "" ? "DataExtraction" : filenamesaved;
			this.$refs.grid.exportTable(format, exportSelectedOnly, filename)
		},
		applyRichTextEditorContent() {
			const richTextEditorContent = this.$refs.richTextEditor.getEditorContent();
			for (var i = 0; i < this.value.headers.length; i++) {
				this.value.rows.forEach((row) => {
					row[this.value.headers[i].label] = richTextEditorContent;
				});
			}

		},

		handleCellClick(row, columnIndex) {
			// Remove the custom classes from previously clicked cells
			console.log("cell clicked", row, columnIndex);
			this.selectedRowIndex = row.rowPos;
			this.selectedColumnIndex = row.colPos;
			const cells = document.querySelectorAll('.bold-cell, .italic-cell');
			cells.forEach((cell) => {
				cell.classList.remove('bold-cell', 'italic-cell');
			});

			// Apply the custom class to the clicked cell
			const clickedCell = document.querySelector(`[data-row="${this.selectedRowIndex}"][data-col="${this.selectedColumnIndex}"]`);

			if (clickedCell) {
				clickedCell.classList.add('bold-cell');
			}
		},
		delRecord(array) {
			console.log("Dete row information", array);
			// this.$refs.grid.deleteRecord(0) // delete the 1st record
		},


	},
	mounted() {
		this.methodsUrl = "/#/" + this.$store.state.projectId;
	}
};

</script>
<style scoped>
/* .bold-header {
	font-weight: bold;
} */
.bold-cell {
	font-weight: bold;
}

.italic-cell {
	font-style: italic;
}

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
</style>
