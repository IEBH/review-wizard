<template>
	<div>
		<h1>Monitoring</h1>

		<i
			>Data monitoring: Composition of data monitoring committee (DMC); summary
			of its role and reporting structure; statement of whether it is
			independent from the sponsor and competing interests; and reference to
			where further details about its charter can be found, if not in the
			protocol. Alternatively, an explanation of why a DMC is not needed.
			Description of any interim analyses and stopping guidelines, including who
			will have access to these interim results and make the final decision to
			terminate the trial</i
		>

		<i
			>Harms: Plans for collecting, assessing, reporting, and managing solicited
			and spontaneously reported adverse events and other unintended effects of
			trial interventions or trial conduct</i
		>

		<i
			>Auditing: Frequency and procedures for auditing trial conduct, if any,
			and whether the process will be independent from investigators and the
			sponsor</i
		>

		Will a data monitoring committee be set up?

		<InputSelectYesNo
			question="Will a data monitoring committee be set up?"
			:value="monitoring.isCommittee"
			@input="updateField('isCommittee', $event)"
		/>

		<div v-if="monitoring.isCommittee">
			<InputTextSingleLine
				question="Provide details of the role the committee had"
				placeholder="the committee had oversight of whether the trial could be ended early due to an unacceptable number of adverse events"
				:value="monitoring.committeeDetails"
				@input="updateField('committeeDetails', $event)"
			/>
			<InputTextSingleLine
				question="Provide details of the reporting structure of the committee"
				placeholder="the committee reported directly to the ethics board of the primary trial hospital"
				:value="monitoring.committeeReporting"
				@input="updateField('committeeReporting', $event)"
			/>
			<InputTextSingleLine
				question="Provide details of the composition of the committee"
				placeholder="the committee was comprised of the director of the hospital, the head of the ethics committee and an external adverse effects consultant"
				:value="monitoring.committeeComposition"
				@input="updateField('committeeComposition', $event)"
			/>
			<InputTextSingleLine
				question="Further details about the committee can be found at the following link"
				placeholder=""
				:value="monitoring.committeeLink"
				@input="updateField('committeeLink', $event)"
			/>
		</div>

		<div v-if="!monitoring.isCommittee">
			<InputTextSingleLine
				question="List the reason(s) why a committee was not set up for this study"
				placeholder="no committee was set up for this trial as the participant numbers were so small"
				:value="monitoring.committeeNotSetUpReasons"
				@input="updateField('committeeNotSetUpReasons', $event)"
			/>
		</div>

		<InputSelectYesNo
			question="Will an interim analysis be conducted?"
			:value="monitoring.isInterimAnalysis"
			@input="updateField('isInterimAnalysis', $event)"
		/>

		<div v-if="monitoring.isInterimAnalysis">
			<InputTextSingleLine
				question="What time-points was the interim analysis conducted at"
				placeholder="the beginning and end of the trial"
				:value="monitoring.interimAnalysisTimePoints"
				@input="updateField('interimAnalysisTimePoints', $event)"
			/>
			<InputSelectMulti
				question="Interim analysis results were made available to:"
				:options="interimResultsAvailableOptions"
				:value="monitoring.interimResultsAvailable"
				@input="updateField('interimResultsAvailable', $event)"
			/>
			<InputTextSingleLine
				question="The study could be stopped if..."
				placeholder="more than 10% of participants experienced severe adverse reactions"
				:value="monitoring.earlyStop"
				@input="updateField('earlyStop', $event)"
			/>
			<InputSelectMulti
				question="Who made the final decision on study termination?"
				:options="finalDecisionOnTerminationOptions"
				:value="monitoring.finalDecisionOnTermination"
				@input="updateField('finalDecisionOnTermination', $event)"
			/>
		</div>

		<div v-if="!monitoring.isInterimAnalysis">
			<InputTextSingleLine
				question="List the reason(s) why an interim analysis was not planned"
				placeholder="No committee was set up for this trial as the participant numbers were so small"
				:value="monitoring.interimNotConductedReasons"
				@input="updateField('interimNotConductedReasons', $event)"
			/>
		</div>

		<i
			>Provide plans for collecting, assessing, reporting, and managing
			solicited and spontaneously reported adverse events and other unintended
			effects of trial interventions or trial conduct</i
		>
		<InputTextSingleLine
			question="How were adverse effects monitored?"
			placeholder="by weekly check-ups with a GP to monitor blood-pressure and general health"
			:value="monitoring.adverseEventsMonitored"
			@input="updateField('adverseEventsMonitored', $event)"
		/>

		<InputTextSingleLine
			question="Provide frequency and procedures for auditing trial conduct, if any, and whether the process will be independent from investigators and the sponsor"
			placeholder="weekly through an independent consultant"
			:value="monitoring.auditPlan"
			@input="updateField('auditPlan', $event)"
		/>

		<BasePreviewOutput :component="outputComponent" :data="monitoring" />
	</div>
</template>

<script>
import OutputMonitoring from "./OutputMonitoring.vue";
import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	mixins: [deepstreamMixin("monitoring")],
	data() {
		return {
			outputComponent: OutputMonitoring,
			interimResultsAvailableOptions: [{ label: "DMC" }],
			finalDecisionOnTerminationOptions: [{ label: "study investigators" }]
		};
	}
};
</script>
