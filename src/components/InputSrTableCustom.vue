<template>
	<div class="p-mb-6">
		<p>
			<b
				>{{ question }}
				<ToggleButton
					v-model="ifEdit"
					onIcon="pi pi-check"
					offIcon="pi pi-user-edit"
					offLabel="Save"
				/>
				<Button
					icon="pi pi-cloud-download"
					@click="isShowDialog = true"
					class="p-button-secondary p-button-text"
				/>
			</b>
		</p>
		<!-- <pre>
		{{ value }}
	  </pre> -->
		<div>
			<!-- :validate="validWholeRecord" -->
			<!-- <vue-excel-editor v-if="value && value.rows" v-model="simplifiedJsondata">
				<vue-excel-column v-for="(column, index) in value.headers" :key="index" :field="column.name"
					:label="column.label">
				</vue-excel-column>
			</vue-excel-editor> -->
			<!-- :type="column.name == 'DateandTime' ? column.type == 'datetime' : column.type == 'string'" -->
			<!-- :width="dynamicColumnWidths[column.name]" -->
			<!-- :width="column.width" -->
			<!-- :options="column.type === 'select' ? column.options : null" -->
		</div>
		<div class="table-container">
			<table class="p-fluid" style="width:100%;" v-if="value">
				<thead class="p-fluid-thead">
					<tr>
						<th v-for="(thead, index) in value.headers" :key="index">
							<div class="th_container">
								<div class="name">
									{{ thead.label }}
								</div>
								<div class="menu">
									<InputSrMenubar
										v-if="ifEdit"
										:colIndex="index"
										@addCol="addCol"
										@deleteCol="deleCol"
									/>
								</div>
							</div>
						</th>
						<th v-if="ifEdit">
							<div style="width: 160px"></div>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(row, index) in value.rows" :key="index">
						<td v-for="thead of value.headers" :key="thead.name">
							<template v-if="thead.name == 'toolLink'">
								<div
									v-for="tl in row.toolLink"
									:key="tl.name"
									style="margin: 10px;"
								>
									<a
										v-if="
											tl.name != '' && tl.link.includes('https://') == false
										"
										:href="methodsUrl + tl.link"
										target="_blank"
										>{{ tl.name }}</a
									>
									<a
										v-if="tl.name != '' && tl.link.includes('https://') == true"
										:href="tl.link"
										target="_blank"
										>{{ tl.name }}</a
									>
								</div>
							</template>
							<!-- <div class="checkbox-wrapper-29">
								<label class="checkbox">
									<input type="checkbox" v-model="row.progress" class="checkbox__input" @change="changeHandler($event)"></el-checkbox />
									<span class="checkbox__label"></span>
									Completed
								</label>
							</div> -->
							<div
								class="checkbox-wrapper-29"
								v-if="thead.name == 'progress'"
								style="margin-left: 46%;"
							>
								<label class="checkbox">
									<input
										type="checkbox"
										v-model="row.progress"
										class="checkbox__input"
										@change="changeHandler($event)"
									/>
									<span class="checkbox__label"></span>
									<!-- Completed -->
								</label>
							</div>
							<!-- <div class="field-checkbox" v-if="thead.name == 'progress'" style="margin: 20%;">
								<el-checkbox v-model="row.progress" label="Completed"
									@change="changeHandler($event)"></el-checkbox>
							</div> -->
							<NotesContent
								v-if="thead.name == 'notes'"
								:thead="thead"
								:row="row"
								@notes="changeHandler"
							/>
							<InputAutoComplete
								:isEvenRow="isEvenRow(index)"
								v-if="thead.name == 'peopleInvolved'"
								:tableValue="value"
								:row="row"
								:tableHeader="thead"
								:titlePageAuthors="titlePageAuthors"
								:people="people"
								@autocom="changeHandler"
							/>
							<Textarea
								v-if="
									thead.name != 'peopleInvolved' &&
										thead.name != 'toolLink' &&
										thead.name != 'progress' &&
										thead.name != 'notes'
								"
								type="text"
								v-model="row[thead.name]"
								:ref="index"
								:autoResize="true"
								@change="changeHandler($event.target.value)"
							/>
						</td>
						<td class="btnArea" v-if="ifEdit">
							<tr>
								<td style="border-style: none;">
									<Button
										v-if="ifEdit"
										class="p-button-raised p-button-text"
										icon="pi pi-ellipsis-h"
										@click="show = !show"
										style="background-color:white"
									/>
								</td>
								<td style="border-style: none;">
									<span class="p-buttonset" v-if="show && ifEdit">
										<Button
											class="p-button-raised p-button-text"
											icon="pi pi-arrow-up"
											@click="addRow(index, 0)"
											style="background-color:white"
										/>
										<Button
											class="p-button-raised p-button-text"
											icon="pi pi-trash"
											@click="deleRow(index)"
											style="background-color:white"
										/>
										<Button
											class="p-button-raised p-button-text"
											icon="pi pi-arrow-down"
											@click="addRow(index, 1)"
											style="background-color:white"
										/>
									</span>
								</td>
							</tr>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<Dialog
			header="Export to Excel"
			:visible.sync="isShowDialog"
			:modal="true"
			:style="{ width: '450px' }"
		>
			<div class="p-inputgroup">
				<span class="p-inputgroup-addon">NewFile-Name:</span>
				<InputText placeholder="e.g.ResearchPlan.xlsx" v-model="fileName" />
			</div>

			<template #footer>
				<Button
					label="Cancel"
					icon="pi pi-times"
					class="p-button-text"
					@click="isShowDialog = false"
				/>
				<Button
					label="Comfirm"
					icon="pi pi-check"
					class="p-button-text"
					@click="exportExcel(value.rows, value.headers, fileName)"
				/>
			</template>
		</Dialog>
	</div>
</template>
<script>
import Textarea from "primevue/textarea";
import Button from "primevue/button";
//import AutoComplete from "primevue/autocomplete";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import ToggleButton from "primevue/togglebutton";

import * as XLSX from "xlsx";
import InputAutoComplete from "@/components/InputAutoComplete.vue";
import InputSrMenubar from "../components/InputSrMenubar.vue";
import NotesContent from "./NotesContent.vue";

import Vue from "vue";
import VueExcelEditor from "vue-excel-editor";
Vue.use(VueExcelEditor);
export default {
	name: "InputSrTable",
	components: {
		Textarea,
		Button,
		Dialog,
		InputText,
		InputAutoComplete,
		InputSrMenubar,
		NotesContent,
		ToggleButton
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
			jsondata: [],
			toolLinkName: "",
			people: []
		};
	},
	methods: {
		changeHandler(event) {
			if (event != undefined) {
				console.log("input", this.value);
				this.$emit("input", this.value);
			}
		},
		isEvenRow(index) {
			return index % 2 === 0;
		},
		addRow(index, optionNum) {
			let row = {};
			for (var i = 0; i < this.value.headers.length; i++) {
				if (this.value.headers[i].name == "progress") {
					row[this.value.headers[i].name] = {
						isComplete: "false",
						state: "Incomplete"
					};
				} else {
					row[this.value.headers[i].name] = "";
				}
				this.$set(row, row[this.value.headers[i].name]);
			}
			if (optionNum == 0) {
				this.value.rows.splice(index, 0, row);
			} else {
				this.value.rows.splice(index + 1, 0, row);
			}
			this.$emit("input", this.value);
		},
		deleRow(index) {
			this.value.rows.splice(index, 1);
			this.$emit("input", this.value);
		},
		deleCol(index) {
			this.value.headers.splice(index, 1);
			this.$delete(this.value.rows, this.value.headers[index].name);
			this.$emit("input", this.value);
		},
		addCol(newC) {
			let colName = newC.ColLabel.trim();
			colName = colName.replace(/\s+/g, "");
			let thead = {
				name: colName,
				label: newC.ColLabel
			};
			if (newC.LorR == 0) {
				this.value.headers.splice(newC.Index, 0, thead);
			} else {
				this.value.headers.splice(newC.Index + 1, 0, thead);
			}
			this.$emit("input", this.value);
			/*this.rsValue.forEach(i => {
				this.$set(this.value.rows[i], colName, "");
			});*/
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
					} else {
						const l = value[jsonKeys[j].name]
							? value[jsonKeys[j].name].length
							: 0;
						if (l && l != 1) {
							objectMaxLength[j] =
								objectMaxLength[j] >= l ? objectMaxLength[j] : l;
						} else {
							objectMaxLength[j] = j == 0 ? 10 : 40;
						}
					}
				}
				let key = keysForPatch;
				for (let j = 0; j < key.length; j++) {
					objectMaxLength[j] =
						objectMaxLength[j] >= key[j].length
							? objectMaxLength[j]
							: key[j].length;
				}
			}
			const wscols = objectMaxLength.map(w => {
				return { width: w };
			});
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
		validWholeRecord(content, oldContent, record, field) {
			console.log(content, oldContent, record, field);
			if (record.age !== record.birth) {
				return "The age and birth do not match";
			} else {
				return ""; // return empty string if there is no error
			}
		}

		/*search(query, cb) {
			let results = query
				? (results = this.titlePageAuthors.filter(people => {
						return people.value.toLowerCase().startsWith(query.toLowerCase());
				  }))
				: (results = [...this.titlePageAuthors]);
			cb(results);
		}*/
	},
	mounted() {
		this.methodsUrl = "/#/" + this.$store.state.projectId;
		console.log("table:" + this.value);
	},
	computed: {
		dynamicColumnWidths() {
			const columnWidths = {};
			for (const column of this.value) {
				const fieldName = column.name;
				const contentLength = this.value.rows.reduce((maxLength, row) => {
					const content = row[fieldName] || "";
					return Math.max(maxLength, content.length);
				}, 0);
				// Calculate the width based on content length
				columnWidths[fieldName] = `${contentLength * 10 + 20}px`;
			}
			return columnWidths;
		},
		simplifiedJsondata() {
			return this.value.rows.map(item => ({
				...item,
				// toolLink: Array.isArray(item.toolLink) && item.toolLink.length > 0 ? item.toolLink[0].name : '',
				peopleInvolved:
					Array.isArray(item.peopleInvolved) && item.peopleInvolved.length > 0
						? item.peopleInvolved[0].label
						: ""
			}));
			// return this.value.rows.map((item) => {
			// 	const simplifiedUser = {
			// 		toolLink: Array.isArray(item.toolLink) ? item.toolLink[0].name : ''
			// 	};
			// 	console.log(this.value, simplifiedUser)

			// 	// Merge the simplified 'user' data with the rest of the item's data
			// 	return {
			// 		simplifiedUser,
			// 		item
			// 	};
			// });
		}
	}
};
</script>
<style>
table {
	/* border: 1px solid black; */
	/* border: 4px solid #5c73a6; */
	border-collapse: collapse;
	/* display: block; */
	overflow: auto;
	/* overflow-x: auto; */
	/*background-color: rgba(240, 240, 240, 0.73);*/
}

.table-container {
	overflow-x: scroll;
	height: 60vh;
}

/* 
.table-container::-webkit-scrollbar {
  width: 5px;
} */

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
	/* border: 1px dashed black; */
	border: 1px dashed #bbc6de;
}

#systable {
	width: 100% !important;
}

/* New style for checklist */

.checkbox-wrapper-29 {
	--size: 1rem;
	/* --background: #fff; */
	font-size: var(--size);
}

.checkbox-wrapper-29 *,
.checkbox-wrapper-29 *::after,
.checkbox-wrapper-29 *::before {
	box-sizing: border-box;
}

.checkbox-wrapper-29 input[type="checkbox"] {
	visibility: hidden;
	display: none;
}

.checkbox-wrapper-29 .checkbox__label {
	width: var(--size);
}

.checkbox-wrapper-29 .checkbox__label:before {
	content: " ";
	display: block;
	height: var(--size);
	width: var(--size);
	position: absolute;
	top: calc(var(--size) * 0.125);
	left: 0;
	background: var(--background);
}

.checkbox-wrapper-29 .checkbox__label:after {
	content: " ";
	display: block;
	height: var(--size);
	width: var(--size);
	border: calc(var(--size) * 0.14) solid #000;
	transition: 200ms;
	position: absolute;
	top: calc(var(--size) * 0.125);
	left: 0;
	background: var(--background);
}

.checkbox-wrapper-29 .checkbox__label:after {
	transition: 100ms ease-in-out;
}

.checkbox-wrapper-29 .checkbox__input:checked ~ .checkbox__label:after {
	border-top-style: none;
	border-right-style: none;
	-ms-transform: rotate(-45deg);
	/* IE9 */
	transform: rotate(-45deg);
	height: calc(var(--size) * 0.5);
	border-color: green;
}

.checkbox-wrapper-29 .checkbox {
	position: relative;
	display: flex;
	cursor: pointer;
	/* Mobile Safari: */
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.checkbox-wrapper-29 .checkbox__label:after:hover,
.checkbox-wrapper-29 .checkbox__label:after:active {
	border-color: green;
}

.checkbox-wrapper-29 .checkbox__label {
	margin-right: calc(var(--size) * 0.45);
}

/* For table Beautification */

tr:nth-child(even) {
	background-color: #c6e2ff;
}

th {
	background-image: linear-gradient(#6880b5, #465b8b, #5971a5);
	color: white !important;
}

tr:nth-child(even) textarea {
	background-color: #c6e2ff !important;
}

.InputSrTable .container-notes {
	background-color: #c6e2ff !important;
}

.InputSrTable .author-div {
	background-color: #c6e2ff !important;
}
</style>
