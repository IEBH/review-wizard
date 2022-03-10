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
			<Checkbox :id="index" :binary="true" v-model="option.include" />
			<label :for="index">{{ option.label }}</label>
		</div>

		<div class="p-mt-3 p-d-flex p-jc-center">
			<Button label="Generate Output" @click="openModal()" />
		</div>

		<!-- Modal to display output -->
		<Dialog
			header="Methods Section"
			:visible.sync="displayModal"
			:style="{ width: '80vw' }"
			:modal="true"
		>
			<div id="output">
				<h1>Methods</h1>
				<h2>Eligibility Criteria</h2>
				<OutputPicot
					v-if="outputOptions[0].include"
					:data="picot"
					:key="monitorChange"
				/>
				<h2>Search strategy</h2>
				<OutputSearch
					v-if="outputOptions[1].include"
					:data="search"
					:key="monitorChange + 1"
				/>
				<OutputSearchDatabases
					v-if="outputOptions[2].include"
					:data="search"
					:key="monitorChange + 2"
				/>
				<OutputSearchRegistries
					v-if="outputOptions[3].include"
					:data="search"
					:key="monitorChange + 3"
				/>
				<OutputSearchPublicationType
					v-if="outputOptions[4].include"
					:data="search"
					:key="monitorChange + 4"
				/>
				<OutputSearchSupplementoryMethods
					v-if="outputOptions[5].include"
					:data="search"
					:key="monitorChange + 5"
				/>
				<h2>Study screening and selection</h2>
				<h3>Screening</h3>
				<OutputScreening
					v-if="outputOptions[6].include"
					:data="screening"
					:key="monitorChange + 6"
				/>
				<h3>Data extraction</h3>
				<OutputDataExtraction
					v-if="outputOptions[7].include"
					:data="extraction"
					:key="monitorChange + 7"
				/>
				<h2>Risk of Bias Assessment</h2>
				<OutputAssessmentOfTheRiskOfBias
					v-if="outputOptions[8].include"
					:data="riskOfBias"
					:key="monitorChange + 8"
				/>
				<h2>Data analysis</h2>
				<OutputMeasurementOfEffect
					v-if="outputOptions[9].include"
					:data="measurementOfEffect"
					:key="monitorChange + 9"
				/>
			
				<OutputUnitOfAnalysis
					v-if="outputOptions[10].include"
					:data="unitOfAnalysis"
					:key="monitorChange + 10"
				/>
			
				<OutputDealingWithMissingData
					v-if="outputOptions[11].include"
					:data="missingData"
					:key="monitorChange + 11"
				/>
			
				<OutputHeterogeneityPublicationBias
					v-if="outputOptions[12].include"
					:data="heterogeneityPublicationBiases"
					:key="monitorChange + 12"
				/>
	
				<OutputSubgroupAndSensitivityAnalysis
					v-if="outputOptions[13].include"
					:data="subgroupAndSensitivityAnalysis"
					:key="monitorChange + 13"
				/>
				<h1>Appendix</h1>
				<OutputSearchDatabasesAppendix
					v-if="outputOptions[2].include"
					:data="search"
					:key="monitorChange + 14"
				/>
				<OutputSearchRegistriesAppendix
					v-if="outputOptions[3].include"
					:data="search"
					:key="monitorChange + 15"
				/>
			</div>
			<template #footer>
				<Button label="Copy Methods to Clipboard" @click="copy" />
				<Button label="Rewrite Methods" @click="reload" />
			</template>
		</Dialog>
	</div>
</template>

<script>
import OutputPicot from "./OutputPicot.vue";
import OutputSearch from "./OutputSearch.vue";
import OutputSearchDatabases from "./OutputSearchDatabases.vue";
import OutputSearchDatabasesAppendix from "./OutputSearchDatabasesAppendix.vue";
import OutputSearchRegistries from "./OutputSearchRegistries.vue";
import OutputSearchRegistriesAppendix from "./OutputSearchRegistriesAppendix.vue";
import OutputSearchPublicationType from "./OutputSearchPublicationType.vue";
import OutputSearchSupplementoryMethods from "./OutputSearchSupplementoryMethods.vue";
import OutputScreening from "./OutputScreening.vue";
import OutputDataExtraction from "./OutputDataExtraction.vue";
import OutputAssessmentOfTheRiskOfBias from "./OutputAssessmentOfTheRiskOfBias.vue";
import OutputMeasurementOfEffect from "./OutputMeasurementOfEffect.vue";
import OutputUnitOfAnalysis from "./OutputUnitOfAnalysis.vue";
import OutputDealingWithMissingData from "./OutputDealingWithMissingData.vue";
import OutputHeterogeneityPublicationBias from "./OutputHeterogeneityPublicationBias.vue";
import OutputSubgroupAndSensitivityAnalysis from "./OutputSubgroupAndSensitivityAnalysis.vue";

import CopyMixin from "@/mixins/CopyMixin.js";

import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Checkbox from "primevue/checkbox";

import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodSearch",
	mixins: [
		CopyMixin,
		deepstreamMixin("picot"),
		deepstreamMixin("search"),
		deepstreamMixin("screening"),
		deepstreamMixin("extraction"),
		deepstreamMixin("riskOfBias"),
		deepstreamMixin("measurementOfEffect"),
		deepstreamMixin("unitOfAnalysis"),
		deepstreamMixin("missingData"),
		deepstreamMixin("heterogeneityPublicationBiases"),
		deepstreamMixin("subgroupAndSensitivityAnalysis")
	],
	components: {
		Button,
		Dialog,
		Checkbox,
		OutputPicot,
		OutputSearch,
		OutputSearchDatabases,
		OutputSearchDatabasesAppendix,
		OutputSearchRegistries,
		OutputSearchRegistriesAppendix,
		OutputSearchPublicationType,
		OutputSearchSupplementoryMethods,
		OutputScreening,
		OutputDataExtraction,
		OutputAssessmentOfTheRiskOfBias,
		OutputMeasurementOfEffect,
		OutputUnitOfAnalysis,
		OutputDealingWithMissingData,
		OutputHeterogeneityPublicationBias,
		OutputSubgroupAndSensitivityAnalysis
	},
	data() {
		return {
			monitorChange: 0,
			outputOptions: [
				{ label: "PICOT", include: true },
				{ label: "Search Strategy", include: true },
				{ label: "Search Strings for Bibliographic Databases", include: true },
				{ label: "Search Strings for Trial Registries", include: true },
				{ label: "Restrictions on Publication Type", include: true },
				{ label: "Supplementary Methods", include: true },
				{ label: "Study Screening and Selection", include: true },
				{ label: "Data Extraction", include: true },
				{ label: "Assessment of the Risk of Bias", include: true },
				{ label: "Measurment of Effect", include: true },
				{ label: "Unit of Analysis", include: true },
				{ label: "Dealing with Missing Data", include: true },
				{ label: "Heterogeneity/Publication Bias", include: true },
				{ label: "Subgroup and Sensitivity Analysis", include: true }
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
