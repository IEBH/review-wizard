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
      header="Search Strategy"
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
        <h2>Study selection and screening</h2>
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
        <h2>Assesment of the RoB</h2>
        <OutputAssessmentOfTheRiskOfBias
          v-if="outputOptions[8].include"
          :data="riskOfBias"
          :key="monitorChange + 8"
        />
        <h2>Measurement of effect</h2>
        <OutputMeasurementOfEffect
          v-if="outputOptions[9].include"
          :data="measurementOfEffect"
          :key="monitorChange + 9"
        />
        <h2>Unit of analysis</h2>
        <OutputUnitOfAnalysis
          v-if="outputOptions[10].include"
          :data="unitOfAnalysis"
          :key="monitorChange + 10"
        />
        <h2>Dealing with missing data</h2>
        <OutputDealingWithMissingData
          v-if="outputOptions[11].include"
          :data="missingData"
          :key="monitorChange + 11"
        />
        <h2>Assessment of heterogeneity and publication biases</h2>
        <OutputHeterogeneityPublicationBias
          v-if="outputOptions[12].include"
          :data="heterogeneityPublicationBiases"
          :key="monitorChange + 12"
        />
        <h2>Subgroup and sensitivity analysis</h2>
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
import { mapState } from "vuex";

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

import CopyMixin from "../mixins/CopyMixin.js";

import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Checkbox from "primevue/checkbox";

export default {
  name: "ViewMethodSearch",
  mixins: [CopyMixin],
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
  computed: mapState({
    picot: state => state.method.doc.picot,
    search: state => state.method.doc.search,
    screening: state => state.method.doc.screening,
    extraction: state => state.method.doc.extraction,
    riskOfBias: state => state.method.doc.riskOfBias,
    measurementOfEffect: state => state.method.doc.measurementOfEffect,
    unitOfAnalysis: state => state.method.doc.unitOfAnalysis,
    missingData: state => state.method.doc.missingData,
    heterogeneityPublicationBiases: state =>
      state.method.doc.heterogeneityPublicationBiases,
    subgroupAndSensitivityAnalysis: state =>
      state.method.doc.subgroupAndSensitivityAnalysis
  }),
  data() {
    return {
      monitorChange: 0,
      outputOptions: [
        { label: "PICOT", include: false },
        { label: "Search Strategy", include: false },
        { label: "Search Strings for Bibliographic Databases", include: false },
        { label: "Search Strings for Trial Registries", include: false },
        { label: "Restrictions on Publication Type", include: false },
        { label: "Supplementary Methods", include: false },
        { label: "Study Selection and Screening", include: false },
        { label: "Data Extraction", include: false },
        { label: "Assessment of the Risk of Bias", include: false },
        { label: "Measurment of Effect", include: false },
        { label: "Unit of Analysis", include: false },
        { label: "Dealing with Missing Data", include: false },
        { label: "Heterogeneity/Publication Bias", include: false },
        { label: "Subgroup and Sensitivity Analysis", include: false }
      ],
      selectedOptions: [],
      displayModal: false
    };
  },
  methods: {
    updateField(field, value) {
      this.$store.dispatch("method/set", {
        search: { [field]: value }
      });
    },
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
