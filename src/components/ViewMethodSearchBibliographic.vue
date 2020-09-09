<template>
  <div>
    <h1>Search Strings for Bibliographic Databases</h1>

    <InputSelectMulti
      question="Which databases will you search for your systematic review?"
      :options="databaseOptions"
      :value="search.databases"
      @input="updateField('databases', $event)"
    />

    <InputDate
      question="What date did you run your search on?"
      :value="search.date"
      @input="updateField('date', $event)"
    />

    <div class="p-mt-3 p-d-flex p-jc-center">
      <Button label="Generate Output" @click="openModal()" />
    </div>

    <!-- Modal to display output -->
    <Dialog
      header="Search Strategy"
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
import InputDate from "./InputDate.vue";

export default {
  name: "ViewMethodSearchBibliographic",
  components: {
    Button,
    Dialog,
    InputSelectMulti,
    InputDate
  },
  computed: mapState({
    search: state => state.method.doc.search
  }),
  methods: {
    updateField(field, value) {
      this.$store.dispatch("method/set", {
        search: { [field]: value }
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
      databaseOptions: [
        "PubMed",
        "MEDLINE via Ovid",
        "MEDLINE via Ebsco",
        "The Cochrane Library for Cochrane Reviews",
        "The Cochrane Library for clinical trials in CENTRAL",
        "Embase via Elsevier",
        "Embase via Ovid",
        "CINAHL via Ebsco",
        "PsycINFO via Ovid",
        "PsycINFO via APA",
        "Web of Science",
        "Scopus",
        "LILACs"
      ],
      displayModal: false,
      modalText: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
