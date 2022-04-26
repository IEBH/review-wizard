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
				<h3>Study Setting</h3>
				<OutputStudySetting :data="studySetting" />
				<h3>Eligibility Criteria</h3>
				<OutputEligibilityCriteria :data="eligibilityCriteria" />
				<h3>Interventions</h3>
				<OutputInterventions :data="interventions" />
				<h3>Outcomes</h3>
				<OutputOutcomes :data="outcomes" />
				<h3>Participant Timeline</h3>
				<OutputOutcomes :data="participantTimeline" />
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
				<OutputOutcomes :data="ethicsAndDissemination" />
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

export default {
	name: "ViewMethodSearch",
	mixins: [
		CopyMixin,
		deepstreamMixin("studySetting"),
		deepstreamMixin("eligibilityCriteria"),
		deepstreamMixin("interventions"),
		deepstreamMixin("outcomes")
	],
	components: {
		Button,
		Dialog,
		Checkbox,
		OutputStudySetting,
		OutputEligibilityCriteria,
		OutputInterventions,
		OutputOutcomes
	},
	data() {
		return {
			monitorChange: 0,
			outputOptions: [
				{ label: "Study Setting", include: true },
				{ label: "Eligibility Criteria", include: true },
				{ label: "Interventions", include: true },
				{ label: "Outcomes", include: true },
				{ label: "Participant Timeline", include: false, disabled: true },
				{ label: "Sample Size", include: false, disabled: true },
				{
					label: "Assignment of Interventions",
					include: false,
					disabled: true
				},
				{
					label: "Data Collection, Management and Analysis",
					include: false,
					disabled: true
				},
				{ label: "Monitoring", include: false, disabled: true },
				{ label: "Ethics and Dissemination", include: false, disabled: true }
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
