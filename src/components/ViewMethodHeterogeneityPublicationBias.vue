<template>
  <div>
    <h1>Assessment of Heterogeneity and Publication Biases</h1>

    <InputSelectYesNo
      question="Was publication bias measured?"
      :value="heterogeneityPublicationBiases.isMeasuredPublicationBias"
      @input="updateField('isMeasuredPublicationBias', $event)"
    />

    <InputSelectDropdown
      v-if="heterogeneityPublicationBiases.isMeasuredPublicationBias"
      question="We measured publication bias using..."
      :value="heterogeneityPublicationBiases.biasMeasurement"
      @input="updateField('biasMeasurement', $event)"
      :options="publicationBiasOptions"
    />

    <InputTextMultiLine
      v-else
      question="We did not measure publication bias..."
      :value="heterogeneityPublicationBiases.didNotMeasure"
      @input="updateField('didNotMeasure', $event)"
    />

    <PreviewOutput
      :component="outputComponent"
      :data="heterogeneityPublicationBiases"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import OutputHeterogeneityPublicationBias from "./OutputHeterogeneityPublicationBias.vue";

import PreviewOutput from "./PreviewOutput.vue";

import InputSelectDropdown from "./InputSelectDropdown.vue";
import InputSelectYesNo from "./InputSelectYesNo.vue";
import InputTextMultiLine from "./InputTextMultiLine.vue";

export default {
  name: "ViewMethodHeterogeneityPublicationBias",
  components: {
    InputSelectDropdown,
    InputSelectYesNo,
    InputTextMultiLine,
    PreviewOutput
  },
  computed: mapState({
    heterogeneityPublicationBiases: state =>
      state.method.doc.heterogeneityPublicationBiases
  }),
  methods: {
    updateField(field, value) {
      this.$store.dispatch("method/set", {
        heterogeneityPublicationBiases: { [field]: value }
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
      publicationBiasOptions: ["Funnel plot", "Egger's test", "Other"],
      displayModal: false,
      modalText: "",
      outputComponent: OutputHeterogeneityPublicationBias
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
