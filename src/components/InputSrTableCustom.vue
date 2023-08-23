<template>
	<div class="p-mb-6">
		<p>
			<b
				>{{ question }}

				<span class="p-buttonset">
					<ToggleButton
						v-model="ifEdit"
						onLabel="Save"
						offLabel="Edit"
						onIcon="pi pi-check"
						offIcon="pi pi-user-edit"
					/>
					<Button
						class="button_download"
						icon="pi pi-cloud-download"
						label="Download"
						@click="isShowDialog = true"
					/>
				</span>
			</b>
		</p>
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
									v-if="tl.name != '' && tl.link.includes('https://') == false"
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
						<div
							class="field-checkbox"
							v-if="thead.name == 'progress'"
							style="margin:20%"
						>
							<el-checkbox
								v-model="row.progress"
								label="Completed"
								@change="changeHandler($event)"
							></el-checkbox>
						</div>
						<NotesContent
							v-if="thead.name == 'notes'"
							:thead="thead"
							:row="row"
							@input="changeHandler"
						/>
						<InputAutoComplete
							v-if="thead.name == 'peopleInvolved'"
							:tableValue="value"
							:row="row"
							:tableHeader="thead"
							:titlePageAuthors="titlePageAuthors"
							:people="people"
							@input="changeHandler"
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
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import ToggleButton from "primevue/togglebutton";

import * as XLSX from "xlsx";
import InputAutoComplete from "@/components/InputAutoComplete.vue";
import InputSrMenubar from "../components/InputSrMenubar.vue";
import NotesContent from "./NotesContent.vue";
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
			ifEdit: false,
			show: false,
			isShowDialog: false,
			fileName: "",
			methodsUrl: "",
			toolLinkName: "",
			people: [],
			editshow: false
		};
	},
	methods: {
		changeHandler(event) {
			if (event != undefined) {
				this.$emit("input", this.value);
			}
		},
		addRow(index, optionNum) {
			let row = {};
			for (var i = 0; i < this.value.headers.length; i++) {
				if (this.value.headers[i].name == "progress") {
					row[this.value.headers[i].name] = false;
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
		},

		exportExcel(rows, headers, fileName) {
			let workbook = XLSX.utils.book_new();
			let xlsxData = this.convertJson(rows, headers);
			//console.log(JSON.stringify(xlsxData));
			let sheet1 = XLSX.utils.json_to_sheet(xlsxData);
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
		}
	},
	mounted() {
		this.methodsUrl = "/#/" + this.$store.state.projectId;
	}
};
</script>
<style scoped>
table {
	border-collapse: collapse;
	display: block;
	overflow: auto;
	overflow-x: auto;
}

.button_download {
	background: #b5cfe2;
	border: transparent;
	height: 30px;
	width: 120px;
}
.p-togglebutton.p-button {
	background: #a1b9ca;
	border: transparent;
	height: 30px;
	width: 80px;
}
.p-button:not(.p-disabled):not(.p-highlight):hover {
	background: #8ba5b9;
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
	display: flex;
	position: relative;
	height: 30px;
	width: 250px;
}

.name {
	position: absolute;
	left: 30%;
	top: 20%;
	font-size: 18px;
	z-index: 10;
}
.menu {
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
