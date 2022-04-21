<template>
	<div class="p-mb-6">
		<p>
			<b>{{ question }}</b>
		</p>
		<!-- Listen to on change event instead of v-on:input to achieve same result as v-model.lazy -->
		<Textarea
			v-bind:value="value"
			v-on:change="$emit('input', $event.target.value)"
			:placeholder="placeholder"
			:autoResize="true"
			rows="7"
			cols="60"
		/>
	</div>
</template>

<script>
import Textarea from "primevue/textarea";
export default {
	name: "InputTextMultiLine",
	props: {
		question: String,
		placeholder: String,
		value: String
	},
	components: {
		Textarea
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
