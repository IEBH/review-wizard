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
      header="Dealing with Missing Data"
      :visible.sync="displayModal"
      :style="{ width: '50vw' }"
      :modal="true"
    >
      <OutputDealingWithMissingData :data="missingData" />
    </Dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import OutputDealingWithMissingData from "./OutputDealingWithMissingData.vue";

import Button from "primevue/button";
import Dialog from "primevue/dialog";

import InputSelectYesNo from "./InputSelectYesNo.vue";

export default {
  name: "ViewMethodDealingWithMissingData",
  components: {
    Button,
    Dialog,
    InputSelectYesNo,
    OutputDealingWithMissingData
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
      modalText: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
