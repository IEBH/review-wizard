<template>
	<div>
		<h1>Title Page</h1>
		<InputTextSingleLine
			question="What is the title of the study?"
			v-model="$tera.state.name"
			placeholder="Evaluating the use of Clinical Decision Aids in an Australian Emergency Department: a cross-sectional survey"
		/>
		<InputTextSingleLine
			question="What is the short title for the study?"
			v-model="$tera.state.nameShort"
			placeholder="Clinical Decision Aids"
		/>
		<InputTextNumber
			question="Anticipated date of the audit?"
			v-model="$tera.state.year"
		/>
	</div>
</template>

<script>
import InputTextNumber from "@/components/InputTextNumber.vue";
import InputTextSingleLine from "@/components/InputTextSingleLine.vue";

export default {
	name: "ViewAuditTitlePage",
	components: {
		InputTextSingleLine,
		InputTextNumber
	}
};
</script>

<style></style>