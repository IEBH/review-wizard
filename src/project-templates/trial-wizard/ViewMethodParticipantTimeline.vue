<template>
	<div>
		<h1>Participant Timeline</h1>

		<i
			>Time schedule of enrolment, interventions (including any run-ins and
			washouts), assessments, and visits for participants. A schematic diagram
			is highly recommended</i
		>

		<InputSelectYesNo
			question="Did you fill out a schematic diagram?"
			:value="participantTimeline.schematic"
			@input="updateField('schematic', $event)"
		/>

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
