<template>
  <div>
    <h1>Unit of Analysis</h1>

    <InputSelectDropdown
      question="What was the unit of analysis?"
      :value="unitOfAnalysis.type"
      @input="updateField('type', $event)"
      :options="unitOfAnalysisOptions"
    />

    <InputTextSingleLine
      v-if="unitOfAnalysis.type === 'Other'"
      question="The unit of analysis was..."
      :value="unitOfAnalysis.otherType"
      @input="updateField('otherType', $event)"
      placeholder="e.g. randomised individuals"
    />

    <InputTextSingleLine
      v-if="unitOfAnalysis.type === 'Individual'"
      question="Where data on the number of individuals with primary and secondary outcomes of interest was not available, we extracted the information as it was presented (e.g..."
      :value="unitOfAnalysis.example"
      @input="updateField('example', $event)"
      placeholder="e.g. mean difference between groups"
    />

    <PreviewOutput :component="outputComponent" :data="unitOfAnalysis" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import OutputUnitOfAnalysis from "./OutputUnitOfAnalysis.vue";

import PreviewOutput from "./PreviewOutput.vue";

import InputSelectDropdown from "./InputSelectDropdown.vue";
import InputTextSingleLine from "./InputTextSingleLine.vue";

export default {
  name: "ViewMethodUnitOfAnalysis",
  components: {
    InputTextSingleLine,
    InputSelectDropdown,
    PreviewOutput
  },
  computed: mapState({
    unitOfAnalysis: state => state.method.doc.unitOfAnalysis
  }),
  methods: {
    updateField(field, value) {
      this.$store.dispatch("method/set", {
        unitOfAnalysis: { [field]: value }
      });
    }
  },
  data() {
    return {
      unitOfAnalysisOptions: ["Individual", "Other"],
      outputComponent: OutputUnitOfAnalysis
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
