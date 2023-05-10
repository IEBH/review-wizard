<template>
	<div class="p-mb-6">
		<p>
			<b
				>{{ question }}
				<Button
					icon="pi pi-user-edit"
					@click="ifEdit = true"
					class="p-button-rounded p-button-text"
					style="height:10px;"
				/>
				<Button
					label="Save"
					icon="pi pi-check"
					@click="update"
					class="p-button-rounded p-button-text"
					style="height:10px;color: green;"
				/>
				<Button
					icon="pi pi-cloud-download"
					@click="isShowDialog = true"
					class="p-button-rounded p-button-text"
					style="height:10px; color:darkgray;"
				/>
			</b>
		</p>
		<table class="p-fluid" style="width:100%;" v-if="value">
			<thead class="p-fluid-thead">
				<tr>
					<th v-for="(thead, index) in value.headers" :key="index">
						<div class="header">
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
							<div v-for="tl in row.toolLink" :key="tl.name">
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
							style="margin: 10px;"
						>
							<SelectButton
								v-model="row.progress.state"
								:options="options"
								@input="selectedValueChange(row)"
							/>
						</div>
						<InputAutoComplete
							v-if="thead.name == 'peopleInvolved'"
							:tableValue="value"
							:row="row"
							:tableHeader="thead"
							:titlePageAuthors="titlePageAuthors"
							:people="people"
						/>
						<Textarea
							v-if="
								thead.name != 'peopleInvolved' &&
									thead.name != 'toolLink' &&
									thead.name != 'progress'
							"
							class="t-content"
							type="text"
							v-model="row[thead.name]"
							:ref="index"
							:autoResize="true"
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
					@click="exportExcel(value.rows, fileName)"
				/>
			</template>
		</Dialog>
	</div>
</template>
<script>
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import SelectButton from "primevue/selectbutton";
//import AutoComplete from "primevue/autocomplete";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";

import * as XLSX from "xlsx";
import InputAutoComplete from "@/components/InputAutoComplete.vue";
import InputSrMenubar from "../components/InputSrMenubar.vue";
export default {
	name: "InputSrTable",
	components: {
		Textarea,
		Button,
		Dialog,
		SelectButton,
		InputText,
		InputAutoComplete,
		InputSrMenubar
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
			newRow: {},

			toolLinkName: "",
			people: [],
			options: ["Incomplete", "Completed"]
		};
	},
	methods: {
		addRow(index, optionNum) {
			this.value.headers.forEach(theader => {
				this.$set(this.newRow, theader.index, theader.name);
				this.newRow[theader.name] = "";
			});
			if (optionNum == 0) {
				this.value.rows.splice(index, 0, this.newRow);
			} else {
				this.value.rows.splice(index + 1, 0, this.newRow);
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
			/*this.rsValue.forEach(i => {
				this.$set(this.value.rows[i], colName, "");
			});*/
			this.$emit("input", this.value);
		},
		update() {
			this.ifEdit = false;
			this.$emit("input", this.value);
		},
		exportExcel(rows, fileName) {
			let workbook = XLSX.utils.book_new();
			let sheet1 = XLSX.utils.json_to_sheet(rows);
			XLSX.utils.book_append_sheet(workbook, sheet1, "ResearchPlan1");
			if (fileName != "") {
				XLSX.writeFile(workbook, fileName + ".xlsx");
			} else {
				XLSX.writeFile(workbook, "ResearchPlan.xlsx");
			}
			this.isShowDialog = false;
		},
		selectedValueChange(row) {
			if (row.progress.state == "Incomplete") {
				row.progress.isComplete = false;
				this.$emit("input", this.value);
			} else {
				row.progress.isComplete = true;
				this.$emit("input", this.value);
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
	}
};
</script>
<style scoped>
table {
	border-collapse: collapse;
	display: block;
	overflow: auto;
	overflow-x: auto;
	background-color: rgba(240, 240, 240, 0.73);
}

.p-fluid-thead {
	position: sticky;
	top: 0px;
	background-color: white;
	border: 1px solid black;
	z-index: 10;
}

.header {
	/*display: inline-block;*/
	display: flex;
	height: 30px;
	width: 200px;
}
.name {
	/*float: left;*/
	flex: 4;
	font-size: 18px;
}
.menu {
	/*float: right;*/
	flex: 2;
	height: 10px;
	width: 10px;
}
.btnArea {
	position: sticky;
	right: 0px;
	top: 30px;
	background-color: transparent;
}

.t-content {
	height: 80px;
	background-color: rgba(240, 240, 240, 0.73);
	border-style: none;
}
.inline-input {
	height: 40px;
}

th,
td {
	border: 1px solid black;
}
</style>
