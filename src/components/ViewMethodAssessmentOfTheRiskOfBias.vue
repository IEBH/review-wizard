<template>
  <div>
    <h1>Assessment of the Risk of Bias</h1>

    <InputSelectDropdown
      question="How many review authors reviewed the risk of bias?"
      :value="riskOfBias.numberOfAuthors"
      @input="updateField('numberOfAuthors', $event)"
      :options="numberOptions"
    />

    <InputSelectYesNo
      question="Did each author independently review the risk of bias?"
      :value="riskOfBias.isIndependent"
      @input="updateField('isIndependent', $event)"
    />

    <InputTextSingleLine
      question="Risk of bias was determined using the..."
      :value="riskOfBias.toolUsed"
      @input="updateField('toolUsed', $event)"
    />

    <PreviewOutput :component="outputComponent" :data="riskOfBias" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import OutputAssesmentOfTheRiskOfBias from "./OutputAssessmentOfTheRiskOfBias";

import PreviewOutput from "./PreviewOutput.vue";

import InputSelectDropdown from "./InputSelectDropdown.vue";
import InputSelectYesNo from "./InputSelectYesNo.vue";
import InputTextSingleLine from "./InputTextSingleLine.vue";

export default {
  name: "ViewMethodAssessmentOfTheRiskOfBias",
  components: {
    InputSelectDropdown,
    InputSelectYesNo,
    InputTextSingleLine,
    PreviewOutput
  },
  computed: mapState({
    riskOfBias: state => state.method.doc.riskOfBias
  }),
  methods: {
    updateField(field, value) {
      this.$store.dispatch("method/set", {
        riskOfBias: { [field]: value }
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
      displayModal: false,
      modalText: "",
      outputComponent: OutputAssesmentOfTheRiskOfBias
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
