<template>
	<div class="p-mb-3">
		<p>
			<b>{{ question }}</b>
		</p>
		<!-- Listen to on change event instead of v-on:input to achieve same result as v-model.lazy -->
		<!-- <input
        v-bind:value="value"
        v-on:change="$emit('input', $event.target.value)"
      > -->
		<InputNumber
			:value="value"
			@input="$emit('input', $event)"
			:useGrouping="false"
			:placeholder="placeholder"
		/>
	</div>
</template>

<script>
import InputNumber from "primevue/inputnumber";
export default {
	name: "InputTextNumber",
	props: {
		question: String,
		value: Number,
		placeholder: String
	},
	components: {
		InputNumber
	},
	mounted() {
		//initialize number with 0
		if (this.value == undefined) {
			this.value = 0;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
