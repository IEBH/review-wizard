<template>
	<div class="p-mb-6">
		<p>
			<b>
				{{ question }}
			</b>
		</p>
		<!-- Listen to on change event instead of v-on:input to achieve same result as v-model.lazy -->
		<SelectButton
			v-model="value"
			@input="$emit('input', $event)"
			:options="options"
			optionLabel="label"
			optionValue="value"
		/>
	</div>
</template>

<script>
import SelectButton from "primevue/selectbutton";

export default {
	name: "InputSelectYesNo",
	props: {
		question: String,
		value: Boolean
	},
	components: {
		SelectButton
	},
	data() {
		return {
			options: [
				{ label: "No", value: false },
				{ label: "Yes", value: true }
			]
		};
	}
	/*mounted() {
		//initialize the Boolean value
		if (this.value == undefined) {
			this.value = false;
		}
	}*/
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.p-selectbutton .p-button {
	background: #ffffff;
	border: 1px solid #ced4da;
	color: #495057;
}
.p-selectbutton .p-button.p-highlight {
	background: #2196f3;
	border-color: #2196f3;
	color: #ffffff;
}
.p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover {
	background: #e9ecef;
	border-color: #ced4da;
	color: #495057;
}
.p-selectbutton .p-button.p-highlight:hover {
	background: #0d89ec;
	border-color: #0d89ec;
	color: #ffffff;
}
</style>
