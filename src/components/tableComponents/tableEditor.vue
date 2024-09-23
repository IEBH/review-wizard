<template>
	<ElInput
		type="textarea"
		v-model="value"
		:autoResize="true"
		v-on:change="handler($event)"
	/>
</template>

<script>
import ElInput from "element-ui/lib/input";

export default {
	name: "tableEditor",
	components: {
		ElInput
	},
	data() {
		return {
			value: String
		};
	},
	beforeMount(){
		this.updateDisplay(this.params);
	},
	methods:{
		updateDisplay(params){
			this.value = params.value;
		},
		handler(event){
			console.log("Entering:", event);
			this.params.setValue(event);
		}
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
