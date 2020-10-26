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
      <OutputPicot :data="picot" />
      <OutputSearch :data="search" />
      <OutputSearchDatabases :data="search" />
      <OutputSearchRegistries :data="search" />
      <OutputPublicationType :data="search" />
      <OutputSearchSupplementoryMethods :data="search" />
      <OutputScreening :data="screening" />
      <OutputDataExtraction :data="extraction" />
      <OutputAssessmentOfTheRiskOfBias :data="riskOfBias" />
      <OutputMeasurementOfEffect :data="measurementOfEffect" />
      <OutputUnitOfAnalysis :data="unitOfAnalysis" />
      <OutputDealingWithMissingData :data="missingData" />
      <OutputHeterogeneityPublicationBias
        :data="heterogeneityPublicationBiases"
      />
      <OutputSubgroupAndSensitivityAnalysis
        :data="subgroupAndSensitivityAnalysis"
      />
    </Dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";

import OutputPicot from "./OutputPicot.vue";
import OutputSearch from "./OutputSearch.vue";
import OutputSearchDatabases from "./OutputSearchDatabases.vue";
import OutputSearchRegistries from "./OutputSearchRegistries.vue";
import OutputPublicationType from "./OutputPublicationType.vue";
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
    OutputSearchRegistries,
    OutputPublicationType,
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
