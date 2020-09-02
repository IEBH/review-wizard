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
    </Dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
var revmanReplicant = require("revman-replicant-browser");
import { picotGrammar } from "../assets/templates/method";

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
    InputTable
  },
  computed: mapState({
    picot: state => state.method.doc.picot
  }),
  methods: {
    updateField(field, value) {
      console.log(value);
      this.$store.dispatch("method/set", {
        picot: { [field]: value }
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
      typesOptions: [
        "Systematic Reviews",
        "Observational Studies",
        "Randomized Controlled Trials",
        "Cohort Studies",
        "Longitudinal studies",
        "Before after studies",
        "Surveys",
        "Letters",
        "Editorials"
      ],
      displayModal: false,
      modalText: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
