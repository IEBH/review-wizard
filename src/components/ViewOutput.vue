<template>
  <div>
    <h1>Output</h1>

    <p>
      <b>Select sections to include in output</b>
    </p>
    <div
      v-for="(option, index) of outputOptions"
      :key="index"
      class="p-field-checkbox"
    >
      <Checkbox
        :id="index"
        name="option"
        :value="option"
        v-model="option.include"
      />
      <label :for="index">{{ option.label }}</label>
    </div>

    <div class="p-mt-3 p-d-flex p-jc-center">
      <Button label="Generate Output" @click="openModal()" />
    </div>

    <!-- Modal to display output -->
    <Dialog
      header="Search Strategy"
      :visible.sync="displayModal"
      :style="{ width: '50vw' }"
      :modal="true"
    >
      <OutputPicot v-if="outputOptions[0].include" :data="picot" />
      <h1>Method</h1>
      <OutputSearch v-if="outputOptions[1].include" :data="search" />
      <OutputSearchDatabases v-if="outputOptions[2].include" :data="search" />
      <OutputSearchRegistries v-if="outputOptions[3].include" :data="search" />
      <OutputSearchPublicationType
        v-if="outputOptions[4].include"
        :data="search"
      />
      <OutputSearchSupplementoryMethods
        v-if="outputOptions[5].include"
        :data="search"
      />
      <OutputScreening v-if="outputOptions[6].include" :data="screening" />
      <OutputDataExtraction
        v-if="outputOptions[7].include"
        :data="extraction"
      />
      <OutputAssessmentOfTheRiskOfBias
        v-if="outputOptions[8].include"
        :data="riskOfBias"
      />
      <OutputMeasurementOfEffect
        v-if="outputOptions[9].include"
        :data="measurementOfEffect"
      />
      <OutputUnitOfAnalysis
        v-if="outputOptions[10].include"
        :data="unitOfAnalysis"
      />
      <OutputDealingWithMissingData
        v-if="outputOptions[11].include"
        :data="missingData"
      />
      <OutputHeterogeneityPublicationBias
        v-if="outputOptions[12].include"
        :data="heterogeneityPublicationBiases"
      />
      <OutputSubgroupAndSensitivityAnalysis
        v-if="outputOptions[13].include"
        :data="subgroupAndSensitivityAnalysis"
      />
      <h1>Appendix</h1>
      <OutputSearchDatabasesAppendix
        v-if="outputOptions[2].include"
        :data="search"
      />
      <OutputSearchRegistriesAppendix
        v-if="outputOptions[3].include"
        :data="search"
      />
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

import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Checkbox from "primevue/checkbox";

export default {
  name: "ViewMethodSearch",
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
    }
  },
  data() {
    return {
      outputOptions: [
        { label: "PICOT", include: false },
        { label: "Search Strategy", include: false },
        { label: "Search Strings for Bibliographic Databases", include: false },
        { label: "Search Strings for Trial Registries", include: false },
        { label: "Restrictions on Publication Type", include: false },
        { label: "Supplementory Methods", include: false },
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
