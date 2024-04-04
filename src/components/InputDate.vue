<template>
	<div class="p-mb-6">
		<p>
			<b>
				{{ question }}
			</b>
		</p>
		<!-- Listen to on change event instead of v-on:input to achieve same result as v-model.lazy -->
		<!--
			:value="date"
			@input="$emit('input', $event)"
		-->
		<Calendar
			v-model="value"
			@date-select="$emit('input', $event)"
			dateFormat="dd/mm/yy"
		/>
		<Button
			label="Clear"
			v-if="value"
			class="p-button-rounded p-button-danger p-ml-3"
			@clear-click="clear"
		/>
	</div>
</template>

<script>
import Calendar from "primevue/calendar";
import Button from "primevue/button";

export default {
	name: "InputDate",
	props: {
		question: String,
		value: [Date, Object]
	},
	components: {
		Calendar,
		Button
	},
	computed: {
		date() {
			// Try to convert date if timestamp, if not return value
			try {
				console.log("date:" + this.value);
				return this.value?.toDate();
			} catch {
				return this.value;
			}
		}
	},
	methods: {
		clear() {
			this.$emit("input", null);
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
