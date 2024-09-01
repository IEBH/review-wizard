<template>
	<div>
		<h1>Results</h1>
		<InputEditorMultiline
			question=""
			:placeholder="placeholder"
			v-model="$tera.state.metaReplicant.file"
		/>
	</div>
</template>
<script>
import InputEditorMultiline from "@/components/InputEditorMultiline.vue";

export default {
	components: {
		InputEditorMultiline
	},
	data() {
		return {
			placeholder:'Replicant Results'
		};
	}
};
</script>
