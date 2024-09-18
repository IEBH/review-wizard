<template>
	<ElInput
		type="textarea"
		v-model="params.data[params.column.colId]"
		:autoResize="true"
	/>
</template>

<script>
import ElInput from "element-ui/lib/input";

export default {
	name: "tableEditor",
	components: {
		ElInput
	}
};
</script>
<style>
.el-textarea__inner {
	resize: none !important;
	border: 0px !important;
	background-color: transparent !important;
	height: 180px;
}
</style>
