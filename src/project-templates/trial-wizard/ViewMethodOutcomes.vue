<template>
	<div>
		<h1>Outcomes</h1>

		<i
			>Primary, secondary, and other outcomes, including the specific
			measurement variable (eg, systolic blood pressure), analysis metric (eg,
			change from baseline, final value, time to event), method of aggregation
			(eg, median, proportion), and time point for each outcome. Explanation of
			the clinical relevance of chosen efficacy and harm outcomes is strongly
			recommended.</i
		>

		<InputTableCustom
			question="What is the primary outcome/s?"
			:columns="outcomeColumns"
			:value="outcomes.primary"
			@input="updateField('primary', $event)"
		/>

		<InputTableCustom
			question="What are the secondary outcome/s?"
			:columns="outcomeColumns"
			:value="outcomes.secondary"
			@input="updateField('secondary', $event)"
		/>

		<InputTableCustom
			question="What are adverse events of interest"
			:columns="outcomeColumns"
			:value="outcomes.adverse"
			@input="updateField('adverse', $event)"
		/>

		<InputTextSingleLine
			question="The clinical relevance of the chosen efficacy and harm outcomes is supported by..."
			placeholder="describe the clinical relevance of the chosen outcomes e.g. were they based on the omeract outcome sets for the condition of interest"
			:value="outcomes.clinicalRelevance"
			@input="updateField('clinicalRelevance', $event)"
		/>

		<BasePreviewOutput :component="outputComponent" :data="outcomes" />
	</div>
</template>

<script>
import OutputOutcomes from "./OutputOutcomes.vue";
import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	mixins: [deepstreamMixin("outcomes")],
	data() {
		return {
			outputComponent: OutputOutcomes,
			outcomeColumns: [
				{
					name: "name",
					label: "What word/phrase describes this outcome?",
					placeholder: "e.g. Mortality rates"
				},
				{
					name: "assessed",
					label: "How will this outcome be assessed?",
					placeholder: "e.g. Hospital reports"
				},
				{
					name: "time",
					label: "When will this outcome be assessed?",
					placeholder: "e.g. After 2 weeks"
				}
			]
		};
	}
};
</script>
