<template>
  <div>
    <h1>Measurement of Effect</h1>

    <InputTextSingleLine
      question="What tool was used to calculate the treatment effect?"
      :value="measurementOfEffect.toolUsed"
      @input="updateField('toolUsed', $event)"
    />

    <InputSelectMulti
      question="What was used for dichotomous outcomes?"
      :value="measurementOfEffect.dichotomousOutcomes"
      @input="updateField('dichotomousOutcomes', $event)"
      :options="dichotomousOutcomesOptions"
    />

    <InputTextNumber
      question="How many studies reporting the same outcome triggered a meta-analysis"
      :value="measurementOfEffect.metaAnalysisThreshold"
      @input="updateField('metaAnalysisThreshold', $event)"
    />

    <InputSelectDropdown
      question="What model was used in meta-analysis?"
      :value="measurementOfEffect.metaAnalysisModelUsed"
      @input="updateField('metaAnalysisModelUsed', $event)"
      :options="metaAnalysisModelOptions"
    />

    <div class="p-mt-3 p-d-flex p-jc-center">
      <Button label="Generate Output" @click="openModal()" />
    </div>

    <!-- Modal to display output -->
    <Dialog
      header="Measurement of Effect"
      :visible.sync="displayModal"
      :style="{ width: '50vw' }"
      :modal="true"
    >
      <OutputMeasurementOfEffect :data="measurementOfEffect" />
    </Dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import OutputMeasurementOfEffect from "./OutputMeasurementOfEffect";

import Button from "primevue/button";
import Dialog from "primevue/dialog";

import InputSelectDropdown from "./InputSelectDropdown.vue";
import InputSelectMulti from "./InputSelectMulti.vue";
import InputTextSingleLine from "./InputTextSingleLine.vue";
import InputTextNumber from "./InputTextNumber.vue";

export default {
  name: "ViewMethodMeasuementOfEffect",
  components: {
    Button,
    Dialog,
    InputSelectDropdown,
    InputSelectMulti,
    InputTextSingleLine,
    InputTextNumber,
    OutputMeasurementOfEffect
  },
  computed: mapState({
    measurementOfEffect: state => state.method.doc.measurementOfEffect
  }),
  methods: {
    updateField(field, value) {
      console.log(value);
      this.$store.dispatch("method/set", {
        measurementOfEffect: { [field]: value }
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
      numberOptions: ["1", "2", "3", "4", "5", "6"],
      dichotomousOutcomesOptions: [
        { label: "Odds ratios" },
        { label: "Risk ratios" },
        { label: "Rate ratios" }
      ],
      metaAnalysisModelOptions: ["Random effects", "Fixed effects"],
      displayModal: false,
      modalText: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
