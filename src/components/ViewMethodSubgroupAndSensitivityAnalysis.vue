<template>
  <div>
    <h1>Subgroup and Sensitivitiy Analysis</h1>

    <InputSelectYesNo
      question="Were subgroup analyses performed?"
      :value="subgroupAndSensitivityAnalysis.isSubgroupAnalysis"
      @input="updateField('isSubgroupAnalysis', $event)"
    />

    <InputTextSingleLineMulti
      v-if="subgroupAndSensitivityAnalysis.isSubgroupAnalysis"
      question="Which subgroup analyses were performed?"
      :value="subgroupAndSensitivityAnalysis.subgroupAnalysis"
      @input="updateField('subgroupAnalysis', $event)"
    />

    <InputTextMultiLine
      v-else
      question="Why was subgroup analysis not performed?"
      :value="subgroupAndSensitivityAnalysis.whyNotSubgroupAnalysis"
      @input="updateField('whyNotSubgroupAnalysis', $event)"
    />

    <InputSelectYesNo
      question="Were sensitivity analyses performed?"
      :value="subgroupAndSensitivityAnalysis.isSensitivityAnalysis"
      @input="updateField('isSensitivityAnalysis', $event)"
    />

    <InputTextSingleLineMulti
      v-if="subgroupAndSensitivityAnalysis.isSensitivityAnalysis"
      question="Which sensitivity analyses were performed?"
      :value="subgroupAndSensitivityAnalysis.sensitivityAnalysis"
      @input="updateField('sensitivityAnalysis', $event)"
    />

    <InputTextMultiLine
      v-else
      question="Why was sensitivity analysis not performed?"
      :value="subgroupAndSensitivityAnalysis.whyNotSensitivityAnalysis"
      @input="updateField('whyNotSensitivityAnalysis', $event)"
    />

    <PreviewOutput
      :component="outputComponent"
      :data="subgroupAndSensitivityAnalysis"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import OutputSubgroupAndSensitivityAnalysis from "./OutputSubgroupAndSensitivityAnalysis.vue";

import PreviewOutput from "./PreviewOutput.vue";

import InputSelectYesNo from "./InputSelectYesNo.vue";
import InputTextSingleLineMulti from "./InputTextSingleLineMulti.vue";
import InputTextMultiLine from "./InputTextMultiLine";

export default {
  name: "ViewMethodSubgroupAndSensitivityAnalysis",
  components: {
    InputSelectYesNo,
    InputTextSingleLineMulti,
    InputTextMultiLine,
    PreviewOutput
  },
  computed: mapState({
    subgroupAndSensitivityAnalysis: state =>
      state.method.doc.subgroupAndSensitivityAnalysis
  }),
  methods: {
    updateField(field, value) {
      this.$store.dispatch("method/set", {
        subgroupAndSensitivityAnalysis: { [field]: value }
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
      outputComponent: OutputSubgroupAndSensitivityAnalysis
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
