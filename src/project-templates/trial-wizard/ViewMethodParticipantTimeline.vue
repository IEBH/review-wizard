<template>
	<div>
		<h1>Participant Timeline</h1>

		<i
			>Time schedule of enrolment, interventions (including any run-ins and
			washouts), assessments, and visits for participants. A schematic diagram
			is highly recommended</i
		>

		<InputTextSingleLine
			question="The time schedule of enrolment, interventions, assessments, and visits for participants is provided in the following schematic diagram"
			placeholder="Participant enrolment schematic"
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
