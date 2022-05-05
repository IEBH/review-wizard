<template>
	<div class="p-mb-6">
		<p>
			<b>{{ question }}</b>
		</p>
		<!-- Listen to on change event instead of v-on:input to achieve same result as v-model.lazy -->
		<div class="p-inputgroup">
			<Textarea
				v-bind:value="value"
				v-on:change="$emit('input', $event.target.value)"
				:placeholder="placeholder"
				:autoResize="true"
				rows="7"
				cols="60"
			/>
		</div>
		<div class="p-mt-2">
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
import Textarea from "primevue/textarea";
import Button from "primevue/button";

export default {
	name: "InputTextMultiLine",
	props: {
		question: String,
		placeholder: String,
		value: String
	},
	components: {
		Textarea,
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
