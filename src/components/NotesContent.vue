<template>
	<div class="container-notes">
		<Textarea
			type="text"
			class="textarea-notes"
			v-model="row[thead.name]"
			:autoResize="true"
			rows="8"
		/>
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
	width: 350px;
}

/*.button-notes {
	position: absolute;
	top: 20%;
	left: 90%;
	z-index: 1;
}*/
</style>
