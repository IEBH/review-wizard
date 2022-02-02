<template>
	<div>
		<h1>Participant Timeline</h1>
		Under construction
		<BasePreviewOutput
			:component="outputComponent"
			:data="participantTimeline"
		/>
	</div>
</template>

<script>
import OutputParticipantTimeline from "./OutputParticipantTimeline.vue";
import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	mixins: [deepstreamMixin("participantTimeline")],
	data() {
		return {
			outputComponent: OutputParticipantTimeline
		};
	}
};
</script>
