<template>
  <div>
    <h1>Data Extraction</h1>

    <InputSelectDropdown
      question="How many studies was the data extraction form piloted on? (for study characteristics and outcome data)"
      :value="extraction.numberOfStudies"
      @input="updateField('numberOfStudies', $event)"
      :options="numberOptions"
    />

    <InputSelectDropdown
      question="How many study authors extracted the following data from included studies?"
      :value="extraction.numberOfExtractors"
      @input="updateField('numberOfExtractors', $event)"
      :options="numberOptions"
    />

    <PreviewOutput :component="outputComponent" :data="extraction" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import OutputDataExtraction from "./OutputDataExtraction.vue";

import PreviewOutput from "./PreviewOutput.vue";

import InputSelectDropdown from "./InputSelectDropdown.vue";

export default {
  name: "ViewMethodDataExtraction",
  components: {
    InputSelectDropdown,
    PreviewOutput
  },
  computed: mapState({
    extraction: state => state.method.doc.extraction
  }),
  methods: {
    updateField(field, value) {
      this.$store.dispatch("method/set", {
        extraction: { [field]: value }
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
      outputComponent: OutputDataExtraction
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
