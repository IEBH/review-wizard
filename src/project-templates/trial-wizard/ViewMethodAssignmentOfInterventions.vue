<template>
	<div>
		<h1>Assigment Of Interventions</h1>
		Under construction
		<BasePreviewOutput
			:component="outputComponent"
			:data="assignmentOfInterventions"
		/>
	</div>
</template>

<script>
import OutputAssignmentOfInterventions from "./OutputAssignmentOfInterventions.vue";
import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	mixins: [deepstreamMixin("assignmentOfInterventions")],
	data() {
		return {
			outputComponent: OutputAssignmentOfInterventions
		};
	}
};
</script>
