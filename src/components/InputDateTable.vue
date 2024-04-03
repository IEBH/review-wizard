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
			@change="$emit('input', $event.value)"
			type="date"
			placeholder="Please select a date"
		/>
	</div>
</template>
<script>
export default {
	name: "InputDateTable",
	props: {
		question: String,
		value: Date
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
