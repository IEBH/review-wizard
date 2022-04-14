<template>
	<div>
		<h1>Interventions</h1>

		<i
			>Interventions for each group with sufficient detail to allow replication,
			including how and when they will be administered.</i
		>
		<i
			>Criteria for discontinuing or modifying allocated interventions for a
			given trial participant (eg, drug dose change in response to harms,
			participant request, or improving/worsening disease)</i
		>
		<i
			>Strategies to improve adherence to intervention protocols, and any
			procedures for monitoring adherence (eg, drug tablet return, laboratory
			tests).</i
		>
		<i
			>Relevant concomitant care and interventions that are permitted or
			prohibited during the trial.</i
		>

		<InputTableCustom
			question="What are the intervention arms?"
			:columns="interventionColumns"
			:value="interventions.interventions"
			@input="updateField('interventions', $event)"
		/>

		<InputTableCustom
			question="What are the control arms?"
			:columns="controlColumns"
			:value="interventions.control"
			@input="updateField('control', $event)"
		/>

		<InputSelectMulti
			question="Under what conditions will treatment be discontinued?"
			:options="discontinuedOptions"
			:value="interventions.discontinued"
			@input="updateField('discontinued', $event)"
		/>

		<InputTextSingleLine
			question="Adherence to intervention protocols were maintained by..."
			placeholder="e.g. Daily check-ups"
			:value="interventions.adherenceMaintained"
			@input="updateField('adherenceMaintained', $event)"
		/>

		<InputSelectMulti
			question="Adherence was monitored by..."
			:options="adherenceMonitoredOptions"
			:value="interventions.adherenceMonitored"
			@input="updateField('adherenceMonitored', $event)"
		/>

		<InputTextSingleLine
			question="What treatment or instructions will be given to all groups?"
			placeholder="e.g. Painkillers"
			:value="interventions.allInstructions"
			@input="updateField('allInstructions', $event)"
		/>

		<InputTextSingleLine
			question="What interventions were not allowed?"
			placeholder="e.g. Other antibiotics"
			:value="interventions.prohibitedInterventions"
			@input="updateField('prohibitedInterventions', $event)"
		/>

		<BasePreviewOutput :component="outputComponent" :data="interventions" />
	</div>
</template>

<script>
import OutputInterventions from "./OutputInterventions.vue";
import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	mixins: [deepstreamMixin("interventions")],
	data() {
		return {
			outputComponent: OutputInterventions,
			interventionColumns: [
				{
					name: "name",
					label: "What word/phrase describes this group?",
					placeholder: "e.g. antibiotic"
				},
				{
					name: "materials",
					label: "What materials will be given to this group?",
					placeholder: "e.g. 125mg of Augmentin"
				},
				{
					name: "instructions",
					label: "What instructions will be given to this group?",
					placeholder: "e.g. wear a mask when outside of home"
				}
			],
			controlColumns: [
				{
					name: "name",
					label: "What word/phrase describes this group?",
					placeholder: "e.g. placebo"
				},
				{
					name: "materials",
					label: "What materials will be given to this group?",
					placeholder: "e.g. a pill of identical size and shape to intervention"
				},
				{
					name: "instructions",
					label: "What instructions will be given to this group?",
					placeholder: "e.g. wear a mask when outside of home"
				}
			],
			discontinuedOptions: [
				{ label: "adverse reaction" },
				{ label: "participant request" },
				{ label: "improving disease" },
				{ label: "worsening disease" }
			],
			adherenceMonitoredOptions: [
				{ label: "counting drug tablets not used" },
				{ label: "laboratory tests" }
			]
		};
	}
};
</script>
