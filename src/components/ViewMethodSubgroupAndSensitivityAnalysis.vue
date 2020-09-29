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
      :value="subgroupAndSensitivityAnalysis.whyNotSubgroupAnalysis"
      @input="updateField('whyNotSubgroupAnalysis', $event)"
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

import InputSelectYesNo from "./InputSelectYesNo.vue";
import InputTextSingleLineMulti from "./InputTextSingleLineMulti.vue";
import InputTextMultiLine from "./InputTextMultiLine";

export default {
  name: "ViewMethodSubgroupAndSensitivityAnalysis",
  components: {
    Button,
    Dialog,
    InputSelectYesNo,
    InputTextSingleLineMulti,
    InputTextMultiLine
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
      displayModal: false,
      modalText: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
