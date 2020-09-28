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
      header="PICOT"
      :visible.sync="displayModal"
      :style="{ width: '50vw' }"
      :modal="true"
    >
      <span v-html="modalText"></span>
    </Dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
var revmanReplicant = require("revman-replicant-browser");
import { picotGrammar } from "../assets/templates/method";

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
    InputSelectDropdown
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
      revmanReplicant(
        {
          revman: this.picot,
          grammar: picotGrammar
        },
        (err, res) => {
          // Use res html in v-html of modal
          if (err) console.log(err);
          this.modalText = res;
          this.displayModal = true;
        }
      );
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
