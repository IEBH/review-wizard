<template>
  <div>
    <h1>Dealing with Missing Data</h1>

    <InputSelectYesNo
      question="We contacted investigators or study sponsors to provide missing data"
      :value="missingData.isContactedInvestigators"
      @input="updateField('isContactedInvestigators', $event)"
      :options="numberOptions"
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

export default {
  name: "ViewMethodDealingWithMissingData",
  components: {
    Button,
    Dialog,
    InputSelectYesNo
  },
  computed: mapState({
    missingData: state => state.method.doc.missingData
  }),
  methods: {
    updateField(field, value) {
      this.$store.dispatch("method/set", {
        extraction: { [field]: value }
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
