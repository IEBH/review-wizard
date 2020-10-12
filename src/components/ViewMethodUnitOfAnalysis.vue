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
    />

    <InputTextSingleLine
      v-if="unitOfAnalysis.type === 'Individual'"
      question="Where data on the number of individuals with primary and secondary outcomes of interest was not available, we extracted the information as it was presented (e.g..."
      :value="unitOfAnalysis.example"
      @input="updateField('example', $event)"
    />

    <div class="p-mt-3 p-d-flex p-jc-center">
      <Button label="Generate Output" @click="openModal()" />
    </div>

    <!-- Modal to display output -->
    <Dialog
      header="Unit of Analysis"
      :visible.sync="displayModal"
      :style="{ width: '50vw' }"
      :modal="true"
    >
      <OutputUnitOfAnalysis :data="unitOfAnalysis" />
    </Dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import OutputUnitOfAnalysis from "./OutputUnitOfAnalysis.vue";

import Button from "primevue/button";
import Dialog from "primevue/dialog";

import InputSelectDropdown from "./InputSelectDropdown.vue";
import InputTextSingleLine from "./InputTextSingleLine.vue";

export default {
  name: "ViewMethodUnitOfAnalysis",
  components: {
    Button,
    Dialog,
    InputTextSingleLine,
    InputSelectDropdown,
    OutputUnitOfAnalysis
  },
  computed: mapState({
    unitOfAnalysis: state => state.method.doc.unitOfAnalysis
  }),
  methods: {
    updateField(field, value) {
      this.$store.dispatch("method/set", {
        unitOfAnalysis: { [field]: value }
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
      unitOfAnalysisOptions: ["Individual", "Other"],
      displayModal: false,
      modalText: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
