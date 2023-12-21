<template>
	<div>
		<el-dropdown trigger="click">
			<span class="el-dropdown-link">
				<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item icon="el-icon-back" @click.native="showDialog(0)">AddColumnLeft</el-dropdown-item>
				<el-dropdown-item icon="el-icon-delete" @click.native="showDeleteDialog()">DeleteCurrentCol</el-dropdown-item>
				<el-dropdown-item icon="el-icon-right" @click.native="showDialog(1)">AddColumnRight</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<Dialog
			header="New Column"
			:visible.sync="isShowDialog"
			:modal="true"
			:style="{ width: '450px' }"
		>
			<div class="p-inputgroup">
				<span class="p-inputgroup-addon">NewColumn Name:</span>
				<InputText placeholder="SR Domain" v-model="colLabel" />
			</div>

			<template #footer>
				<Button
					label="No"
					icon="pi pi-times"
					class="p-button-text"
					@click="isShowDialog = false"
				/>
				<Button
					label="Yes"
					icon="pi pi-check"
					class="p-button-text"
					@click="addColumn"
				/>
			</template>
		</Dialog>
		<Dialog
			:visible.sync="isDeleteDialog"
			:style="{ width: '450px' }"
			header="Confirm"
			:modal="true"
		>
			<div class="confirmation-content">
				<i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
				<span>Are you sure you want to delete ?</span>
			</div>
			<template #footer>
				<Button
					label="No"
					icon="pi pi-times"
					class="p-button-text"
					@click="isDeleteDialog = false"
				/>
				<Button
					label="Yes"
					icon="pi pi-check"
					class="p-button-text"
					@click="deleteColumn"
				/>
			</template>
		</Dialog>
	</div>
</template>
<script>
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
export default {
	name: "InputSrMenubar",
	components: {
		Dialog,
		InputText,
		Button
	},
	props: {
		colIndex: Number
	},
	data() {
		return {
			lor: 0,
			isShowDialog: false,
			isDeleteDialog: false,
			colLabel: "",
			newCol: { LorR: "", Index: "", ColLabel: "" },
		};
	},
	methods: {
		addColumn() {
			this.isShowDialog = false;
			this.newCol.LorR = this.lor;
			this.newCol.Index = this.colIndex;
			this.newCol.ColLabel = this.colLabel;
			this.$emit("addCol", this.newCol);
		},
		deleteColumn() {
			this.isDeleteDialog = false;
			this.$emit("deleteCol", this.colIndex);
		},
		showDialog(lr){
			this.lor=lr;
			this.isShowDialog=true;
		},
		showDeleteDialog(){
			this.isDeleteDialog=true;
		}
	}
};
</script>
<style>
.el-dropdown{
	color: azure;
}
</style>
