<template>
	<div class="p-fluid">
		<p>
			<b>{{ question }}</b>
		</p>
		<!-- Listen to on change event instead of v-on:input to achieve same result as v-model.lazy -->
		<!-- <input
        v-bind:value="value"
        v-on:change="$emit('input', $event.target.value)"
      > -->
		<div class="p-inputgroup">
			<InputText
				type="text"
				:value="value"
				:placeholder="placeholder"
				@change="$emit('input', $event.target.value)"
			/>
			<Button
				v-if="value == '' && placeholder"
				label="Keep Example"
				@click="fillWithPlaceholder()"
			/>
			<Button
				v-if="value != ''"
				label="Clear"
				class="p-button-danger"
				@click="clearInput()"
			/>
		</div>
	</div>
</template>

<script>
import InputText from "primevue/inputtext";
import Button from "primevue/button";

export default {
	name: "InputTextSingleLine",
	props: {
		question: String,
		value: String,
		placeholder: String
	},
	components: {
		InputText,
		Button
	},
	methods: {
		fillWithPlaceholder() {
			this.$emit("input", this.placeholder);
		},
		clearInput() {
			this.$emit("input", "");
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
