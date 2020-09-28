<template>
  <div>
    <h1>Data Extraction</h1>

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

    <InputSelectDropdown
      question="How many studies reporting the same outcome triggered a meta-analysis"
      :value="measurementOfEffect.metaAnalysisThreshold"
      @input="updateField('metaAnalysisThreshold', $event)"
      :options="numberOptions"
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
import InputSelectMulti from "./InputSelectMulti.vue";
import InputTextSingleLine from "./InputTextSingleLine.vue";

export default {
  name: "ViewMethodMeasuementOfEffect",
  components: {
    Button,
    Dialog,
    InputSelectDropdown,
    InputSelectMulti,
    InputTextSingleLine
  },
  computed: mapState({
    measurementOfEffect: state => state.method.doc.measurementOfEffect
  }),
  methods: {
    updateField(field, value) {
      this.$store.dispatch("method/set", {
        measurementOfEffect: { [field]: value }
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
