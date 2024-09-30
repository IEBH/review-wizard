<template>
	<div>
		<h1>Title Page</h1>
		<InputTextSingleLine
			question="What is the title of the study?"
			v-model="$tera.state.name"
			placeholder="Overdiagnosis and Overuse of diagnostic and screening tests in Low-Middle Income Countries (LMICs): A protocol for a scoping review"
		/>
		<InputTextSingleLine
			question="What is the short title for the study?"
			v-model="$tera.state.nameShort"
			placeholder="Overdiagnosis and Overuse"
		/>
		<InputTextNumber
			question="What year will study be published?"
			v-model="$tera.state.year"
		/>
	</div>
</template>

<script>
import InputTextNumber from "@/components/InputTextNumber.vue";
import InputTextSingleLine from "@/components/InputTextSingleLine.vue";

export default {
	name: "ViewScopingTitlePage",
	components: {
		InputTextSingleLine,
		InputTextNumber
	}
};
</script>

<style></style>