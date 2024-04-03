<template>
	<div class="p-mb-6">
		<p>
			<b>
				{{ question }}
			</b>
		</p>
		<!-- Listen to on change event instead of v-on:input to achieve same result as v-model.lazy -->
		<el-date-picker
			v-model="value"
			@input="$emit('input', $event)"
			type="date"
			placeholder="Please choose date"
		/>
		<Button
			label="Clear"
			v-if="value"
			class="p-button-rounded p-button-danger p-ml-3"
			@click="clear"
		/>
	</div>
</template>
<script>
import Button from "primevue/button";

export default {
	name: "InputDateTable",
	props: {
		question: String,
		value: String
	},
	components: {
		Button
	},
	methods: {
		clear() {
			this.$emit("input", "");
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
