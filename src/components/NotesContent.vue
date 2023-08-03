<template>
	<div class="container-notes">
		<Textarea
			type="text"
			class="textarea-notes"
			v-model="row[thead.name]"
			:autoResize="true"
			rows="10"
			cols="30"
		/>
		<label style="color:lightgrey">{{ charNum }} characters</label>
		<!--<el-button
			class="button-notes"
			icon="el-icon-edit"
			size="mini"
			circle
		></el-button>-->
	</div>
</template>
<script>
import Textarea from "primevue/textarea";
export default {
	components: {
		Textarea
	},
	props: {
		row: {},
		thead: {}
	},
	computed: {
		charNum() {
			return this.row[this.thead.name].length;
		}
	},
	data() {
		return {
			editshow: false
		};
	}
};
</script>
<style>
.container-notes {
	position: relative;
	width: 400px;
	min-height: 250px;
}
.textarea-notes {
	width: 80%;
	min-height: 100px;
}
/*.button-notes {
	position: absolute;
	top: 20%;
	left: 90%;
	z-index: 1;
}*/
</style>
