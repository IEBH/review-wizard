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
import InputSelectYesNo from "./InputSelectYesNo.vue";
import InputTextMultiLine from "./InputTextMultiLine.vue";

export default {
  name: "ViewMethodHeterogeneityPublicationBias",
  components: {
    Button,
    Dialog,
    InputSelectDropdown,
    InputSelectYesNo,
    InputTextMultiLine
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
      publicationBiasOptions: ["Funnel plot", "Egger's test", "Other"],
      displayModal: false,
      modalText: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
