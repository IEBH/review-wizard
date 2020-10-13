<template>
  <div>
    <h1>PICOT</h1>
    <!-- P -->
    <InputTable
      question="What are the population/s, or problem/s (P), of your systematic review, (e.g. older people with diabetes)."
      :value="picot.population"
      columnHeader="Population"
      :inclusion="true"
      :type="false"
      :description="false"
      :examples="true"
      @input="updateField('population', $event)"
    />

    <!-- I -->
    <InputTable
      question="What are the intervention/s (I) of your systematic review, (e.g. metformin)."
      :value="picot.intervention"
      columnHeader="Intervention"
      :inclusion="true"
      :type="false"
      :description="false"
      :examples="true"
      @input="updateField('intervention', $event)"
    />

    <!-- C -->
    <InputTable
      question="What are the comparators (C) that the intervention will be compared against (e.g. no treatment)"
      :value="picot.comparator"
      columnHeader="Comparator"
      :inclusion="true"
      :type="false"
      :description="false"
      :examples="true"
      @input="updateField('comparator', $event)"
    />

    <!-- O -->
    <InputTable
      question="What are the outcomes (O) you will be looking for (e.g. reduced hospitalization, improved quality of life, mortality)"
      :value="picot.outcomes"
      columnHeader="Outcome"
      :inclusion="true"
      :type="true"
      :description="true"
      :examples="true"
      @input="updateField('outcomes', $event)"
    />

    <!-- T -->
    <InputSelectMulti
      question="What study types (T) will be included"
      :options="typesOptions"
      :value="picot.types"
      @input="updateField('types', $event)"
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
      <OutputPicot :data="picot" />
    </Dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import OutputPicot from "./OutputPicot.vue";

import Button from "primevue/button";
import Dialog from "primevue/dialog";

import InputSelectMulti from "./InputSelectMulti.vue";
import InputTable from "./InputTable.vue";

export default {
  name: "ViewMethodPicot",
  components: {
    Button,
    Dialog,
    InputSelectMulti,
    InputTable,
    OutputPicot
  },
  computed: mapState({
    picot: state => state.method.doc.picot
  }),
  methods: {
    updateField(field, value) {
      this.$store.dispatch("method/set", {
        picot: { [field]: value }
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
      typesOptions: [
        { label: "Systematic Reviews" },
        { label: "Observational Studies" },
        { label: "Randomized Controlled Trials" },
        { label: "Cohort Studies" },
        { label: "Longitudinal studies" },
        { label: "Before after studies" },
        { label: "Surveys" },
        { label: "Letters" },
        { label: "Editorials" }
      ],
      displayModal: false,
      modalText: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
