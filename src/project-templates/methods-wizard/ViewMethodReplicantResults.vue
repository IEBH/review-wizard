<template>
	<div>
		<h1>Results</h1>
		<div v-if="$tera.state.metaReplicant && $tera.state.metaReplicant.file">
			<InputEditorMultiline 
			question="" 
			:placeholder="placeholder" 
			v-model="$tera.state.metaReplicant.file" />
		</div>

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
			placeholder: 'Replicant Results'
		};
	}
};
</script>
