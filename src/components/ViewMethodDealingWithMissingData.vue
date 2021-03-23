<template>
  <div>
    <h1>Dealing with Missing Data</h1>

    <InputSelectYesNo
      question="We contacted investigators or study sponsors to provide missing data"
      :value="missingData.isContactedInvestigators"
      @input="updateField('isContactedInvestigators', $event)"
      :options="numberOptions"
    />

    <PreviewOutput :component="outputComponent" :data="missingData" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import OutputDealingWithMissingData from "./OutputDealingWithMissingData.vue";

import PreviewOutput from "./PreviewOutput.vue";

import InputSelectYesNo from "./InputSelectYesNo.vue";

export default {
  name: "ViewMethodDealingWithMissingData",
  components: {
    InputSelectYesNo,
    PreviewOutput
  },
  computed: mapState({
    missingData: state => state.method.doc.missingData
  }),
  methods: {
    updateField(field, value) {
      this.$store.dispatch("method/set", {
        missingData: { [field]: value }
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
      outputComponent: OutputDealingWithMissingData
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
