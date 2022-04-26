<template>
	<div>
		<h1>Output</h1>

		<p>
			<b>Select sections to include in output</b>
		</p>
		<Button label="Select All" @click="selectAll()" class="p-mr-2 p-mb-2" />
		<Button label="Deselect All" @click="deselectAll()" class="p-mr-2 p-mb-2" />
		<div
			v-for="(option, index) of outputOptions"
			:key="index"
			class="p-field-checkbox"
		>
			<Checkbox
				:id="index"
				:binary="true"
				v-model="option.include"
				:disabled="option.disabled"
			/>
			<label :for="index">{{ option.label }}</label>
		</div>

		<div class="p-mt-3 p-d-flex p-jc-center">
			<Button label="Generate Output" @click="openModal()" />
		</div>

		<!-- Modal to display output -->
		<Dialog
			header="Trial Protocol"
			:visible.sync="displayModal"
			:style="{ width: '80vw' }"
			:modal="true"
		>
			<div id="output">
				<div v-for="output in selectedOutputs" :key="output.data">
					<h3>{{ output.label }}</h3>
					<component
						:is="output.outputComponent.name"
						:data="getData(output.data)"
					/>
				</div>
				<!-- <h3>Study Setting</h3>
				<OutputStudySetting :data="studySetting" />
				<h3>Eligibility Criteria</h3>
				<OutputEligibilityCriteria :data="eligibilityCriteria" />
				<h3>Interventions</h3>
				<OutputInterventions :data="interventions" />
				<h3>Outcomes</h3>
				<OutputOutcomes :data="outcomes" />
				<h3>Participant Timeline</h3>
				<OutputParticipantTimeline :data="participantTimeline" />
				<h3>Sample Size</h3>
				<OutputOutcomes :data="sampleSize" />
				<h3>Recruitment</h3>
				<OutputOutcomes :data="recruitment" />
				<h3>Assignment of Interventions</h3>
				<OutputOutcomes :data="assignmentOfInterventions" />
				<h3>Data Collection, Management, and Analysis</h3>
				<OutputOutcomes :data="dataCollection" />
				<h3>Monitoring</h3>
				<OutputOutcomes :data="monitoring" />
				<h3>Ethics and Dissemination</h3>
				<OutputOutcomes :data="ethicsAndDissemination" /> -->
			</div>
			<template #footer>
				<Button label="Copy Methods to Clipboard" @click="copy" />
				<Button label="Rewrite Methods" @click="reload" />
			</template>
		</Dialog>
	</div>
</template>

<script>
import CopyMixin from "@/mixins/CopyMixin.js";
import deepstreamMixin from "@/mixins/DeepstreamMixin";

import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Checkbox from "primevue/checkbox";

import OutputStudySetting from "./OutputStudySetting.vue";
import OutputEligibilityCriteria from "./OutputEligibilityCriteria.vue";
import OutputInterventions from "./OutputInterventions.vue";
import OutputOutcomes from "./OutputOutcomes.vue";
import OutputParticipantTimeline from "./OutputParticipantTimeline.vue";
import OutputSampleSize from "./OutputSampleSize.vue";
import OutputRecruitment from "./OutputRecruitment.vue";
import OutputAssignmentOfInterventions from "./OutputAssignmentOfInterventions.vue";
import OutputDataCollection from "./OutputDataCollection.vue";
import OutputMonitoring from "./OutputMonitoring.vue";
import OutputEthicsAndDissemination from "./OutputEthicsAndDissemination.vue";

export default {
	name: "ViewOutput",
	mixins: [
		CopyMixin,
		deepstreamMixin("studySetting"),
		deepstreamMixin("eligibilityCriteria"),
		deepstreamMixin("interventions"),
		deepstreamMixin("outcomes"),
		deepstreamMixin("participantTimeline"),
		deepstreamMixin("sampleSize"),
		deepstreamMixin("recruitment"),
		deepstreamMixin("assignmentOfInterventions"),
		deepstreamMixin("dataCollection"),
		deepstreamMixin("monitoring"),
		deepstreamMixin("ethicsAndDissemination")
	],
	components: {
		Button,
		Dialog,
		Checkbox,
		OutputStudySetting,
		OutputEligibilityCriteria,
		OutputInterventions,
		OutputOutcomes,
		OutputParticipantTimeline,
		OutputSampleSize,
		OutputRecruitment,
		OutputAssignmentOfInterventions,
		OutputDataCollection,
		OutputMonitoring,
		OutputEthicsAndDissemination
	},
	computed: {
		selectedOutputs() {
			return this.outputOptions.filter(option => option.include);
		}
	},
	data() {
		return {
			monitorChange: 0,
			outputOptions: [
				{
					label: "Study Setting",
					outputComponent: OutputStudySetting,
					data: "studySetting",
					include: true
				},
				{
					label: "Eligibility Criteria",
					outputComponent: OutputEligibilityCriteria,
					data: "eligibilityCriteria",
					include: true
				},
				{
					label: "Interventions",
					outputComponent: OutputInterventions,
					data: "interventions",
					include: true
				},
				{
					label: "Outcomes",
					outputComponent: OutputOutcomes,
					data: "outcomes",
					include: true
				},
				{
					label: "Participant Timeline",
					outputComponent: OutputParticipantTimeline,
					data: "participantTimeline",
					include: true
				},
				{
					label: "Sample Size",
					outputComponent: OutputSampleSize,
					data: "sampleSize",
					include: true
				},
				{
					label: "Recruitment",
					outputComponent: OutputRecruitment,
					data: "recruitment",
					include: true
				},
				{
					label: "Assignment of Interventions",
					outputComponent: OutputAssignmentOfInterventions,
					data: "assignmentOfInterventions",
					include: true
				},
				{
					label: "Data Collection, Management and Analysis",
					outputComponent: OutputDataCollection,
					data: "dataCollection",
					include: true
				},
				{
					label: "Monitoring",
					outputComponent: OutputMonitoring,
					data: "monitoring",
					include: true
				},
				{
					label: "Ethics and Dissemination",
					outputComponent: OutputEthicsAndDissemination,
					data: "ethicsAndDissemination",
					include: true
				}
			],
			selectedOptions: [],
			displayModal: false
		};
	},
	methods: {
		openModal() {
			this.displayModal = true;
		},
		closeModal() {
			this.displayModal = false;
		},
		getData(dataName) {
			return this[dataName];
		},
		selectAll() {
			this.outputOptions.forEach(option => (option.include = true));
		},
		deselectAll() {
			this.outputOptions.forEach(option => (option.include = false));
		},
		reload() {
			this.monitorChange = this.monitorChange + 1;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
