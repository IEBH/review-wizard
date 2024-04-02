<template>
	<div class="input-select-multi p-mb-6">
		<p>
			<b>
				{{ question }}
			</b>
		</p>
		<!-- Listen to on change event instead of v-on:input to achieve same result as v-model.lazy -->
		<Dropdown
			:value="value"
			@change="$emit('input', $event.value)"
			:options="options"
		/>
	</div>
</template>

<script>
import Dropdown from "primevue/dropdown";
export default {
	name: "InputSelectDropdown",
	props: {
		question: String,
		options: Array,
		value: String
	},
	components: {
		Dropdown
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
