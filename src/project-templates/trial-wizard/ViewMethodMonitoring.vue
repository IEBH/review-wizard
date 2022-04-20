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
			:value="monitoring.committee"
			@input="updateField('committee', $event)"
		/>

		<Accordion
			v-if="monitoring.optionalDetail"
			style="margin-top: 50px; border: 1px solid black;"
		>
			<AccordionTab header="Optional Details" :active="true">
				<h3></h3>
				<InputTextSingleLine
					question="Provide details of the role the committee had"
					placeholder="The committee had oversight of whether the trial could be ended early due to an unacceptable number of adverse events"
					:value="monitoring.committeeRole"
					@input="updateField('committeeRole', $event)"
				/>
				/>
				<InputTextSingleLine
					question="Provide details of the reporting structure of the committee"
					placeholder="The committee reported directly to the ethics board of the primary trial hospital"
					:value="monitoring.committeeReporting"
					@input="updateField('committeeReporting', $event)"
				/>
				<InputTextSingleLine
					question="Provide details of the composition of the committee"
					placeholder="The committee was comprised of the director of the hospital, the head of the ethics committee and an external adverse effects consultant"
					:value="monitoring.committeeComposition"
					@input="updateField('committeeComposition', $event)"
				/>
			</AccordionTab>
		</Accordion>

		<InputTextSingleLine
			question="List the reasons why a committee was not set up for this study"
			placeholder="No committee was set up for this trial as the participant numbers were so small"
			:value="monitoring.noCommittee"
			@input="updateField('noCommittee', $event)"
		/>
		<InputSelectYesNo
			question="Will an interim analysis be conducted?"
			:value="monitoring.interimAnalysis"
			@input="updateField('interimAnalysis', $event)"
		/>

		<InputTextSingleLine
			question="How were adverse effects monitored?"
			placeholder="Provide plans for collecting, assessing, reporting, and managing solicited and spontaneously reported adverse events and other unintended effects of trial interventions or trial conduct."
			:value="monitoring.adverseEffects"
			@input="updateField('adverseEffects', $event)"
		/>

		<InputTextSingleLine
			question="Was a trial audit planned?"
			placeholder="Provide frequency and procedures for auditing trial conduct, if any, and whether the process will be independent from investigators and the sponsor."
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
			outputComponent: OutputMonitoring
		};
	}
};
</script>
