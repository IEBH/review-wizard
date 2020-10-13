<template>
  <div>
    <h1>Search Strings for Bibliographic Databases</h1>

    <InputSelectMulti
      question="Which databases did you search for your systematic review?"
      :options="databaseOptions"
      :value="search.databases"
      @input="updateField('databases', $event)"
    />

    <InputDate
      question="What date did you run your search on?"
      :value="search.dateOfSearch"
      @input="updateField('dateOfSearch', $event)"
    />

    <InputDate
      question="Did you have a date you ran the search back to, or did you run the search from the inception of the database? (leave blank if from inception)"
      :value="search.dateSearchedUntil"
      @input="updateField('dateSearchedUntil', $event)"
    />

    <template v-for="(database, index) of search.databases">
      <InputTextMultiSyntax
        :key="index"
        :question="
          `Database ${index + 1} (e.g. ${
            database.label
          }) copy and paste your full search string.`
        "
        :value="database.string"
        @input="updateDatabaseString(index, $event)"
      />
    </template>

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

import Button from "primevue/button";
import Dialog from "primevue/dialog";

import InputSelectMulti from "./InputSelectMulti.vue";
import InputDate from "./InputDate.vue";
import InputTextMultiSyntax from "./InputTextMultiSyntax";

export default {
  name: "ViewMethodSearchDatabases",
  components: {
    Button,
    Dialog,
    InputSelectMulti,
    InputDate,
    InputTextMultiSyntax
  },
  computed: mapState({
    search: state => state.method.doc.search
  }),
  methods: {
    updateField(field, value) {
      console.log(value);
      this.$store.dispatch("method/set", {
        search: { [field]: value }
      });
    },
    updateDatabaseString(index, value) {
      var newDatabase = this.search.databases;
      newDatabase[index].string = value;
      this.updateField("databases", newDatabase);
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
      databaseOptions: [
        { label: "PubMed", string: "" },
        { label: "MEDLINE via Ovid", string: "" },
        { label: "MEDLINE via Ebsco", string: "" },
        { label: "The Cochrane Library for Cochrane Reviews", string: "" },
        // eslint-disable-next-line prettier/prettier
        { label: "The Cochrane Library for clinical trials in CENTRAL", string: "" },
        { label: "Embase via Elsevier", string: "" },
        { label: "Embase via Ovid", string: "" },
        { label: "CINAHL via Ebsco", string: "" },
        { label: "PsycINFO via Ovid", string: "" },
        { label: "PsycINFO via APA", string: "" },
        { label: "Web of Science", string: "" },
        { label: "Scopus", string: "" },
        { label: "LILACs", string: "" }
      ],
      displayModal: false,
      modalText: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
