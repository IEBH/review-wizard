<template>
	<div>
		<h1>People</h1>

		<InputTextSingleLineMulti
			question="Name of audit lead?"
			v-model="$tera.state.author"
			placeholder="e.g Gerben"
		/>

		<InputTextSingleLineMulti
			question="Who else will help with the audit?"
			v-model="$tera.state.acknowledgements"
			placeholder="e.g Aoife Reynolds"
		/>
	</div>
</template>

<script>
import InputTextSingleLineMulti from "@/components/InputTextSingleLineMulti.vue";

export default {
	name: "ViewAuditPeople",
	components: {
		InputTextSingleLineMulti
	}
};
</script>

<style></style>