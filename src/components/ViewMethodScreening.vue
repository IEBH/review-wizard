<template>
  <div>
    <h1>Study Selection and Screening</h1>

    <InputSelectDropdown
      question="How many review authors independently screened the titles and abstracts for inclusion against the inclusion criteria?"
      :value="screening.numberOfTitleAbstractScreeners"
      @input="updateField('numberOfTitleAbstractScreeners', $event)"
      :options="numberOptions"
    />

    <InputSelectDropdown
      question="Which Author (initials) retrived full-texts"
      :value="screening.fullTextRetrivalAuthor"
      @input="updateField('fullTextRetrivalAuthor', $event)"
      :options="titlepage.authors"
    />

    <InputSelectDropdown
      question="How many review authors independently screened the full-texts for inclusion?"
      :value="screening.numberOfFullTextScreeners"
      @input="updateField('numberOfFullTextScreeners', $event)"
      :options="numberOptions"
    />

    <InputSelectMulti
      question="Any disagreements were resolved by:"
      :value="screening.disputeResolution"
      @input="updateField('disputeResolution', $event)"
      :options="disputeResolutionOptions"
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

export default {
  name: "ViewMethodPicot",
  components: {
    Button,
    Dialog,
    InputSelectDropdown,
    InputSelectMulti
  },
  computed: mapState({
    screening: state => state.method.doc.screening,
    titlepage: state => state.titlepage.doc
  }),
  methods: {
    updateField(field, value) {
      this.$store.dispatch("method/set", {
        screening: { [field]: value }
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
      numberOptions: ["2", "3", "4", "5", "6"],
      disputeResolutionOptions: [
        { label: "By consensus" },
        { label: "By referring to a third author" }
      ],
      displayModal: false,
      modalText: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
