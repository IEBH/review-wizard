<template>
	<div>
		<h1>People</h1>

		<InputTextSingleLineMulti
			question="Who are the authors in the study?"
			v-model="$tera.state.author"
			placeholder="e.g. Loai Albarqouni"
		/>

		<InputTextSingleLineMulti
			question="Who else helped with the study? (Acknowledgements)"
			v-model="$tera.state.acknowledgements"
			placeholder="e.g. Loai Albarqouni"
		/>
	</div>
</template>

<script>
import InputTextSingleLineMulti from "@/components/InputTextSingleLineMulti.vue";

export default {
	name: "ViewScopingTitlePagePeople",
	components: {
		InputTextSingleLineMulti
	}
};
</script>

<style></style>