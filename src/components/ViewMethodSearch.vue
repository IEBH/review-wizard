<template>
  <div>
    <h1>Search Strategy</h1>

    <InputSelectMulti
      question="Which of the following components went into your search string"
      :options="componentsOptions"
      :value="search.components"
      @input="updateField('components', $event)"
    />

    <InputSelectMulti
      question="Was the search designed by a search specialist, if so select which type"
      :options="specialistOptions"
      :value="search.specialist"
      @input="updateField('specialist', $event)"
    />

    <InputSelectMulti
      question="Was help received during the designing of the search, if so who provided the help"
      :options="specialistOptions"
      :value="search.helper"
      @input="updateField('helper', $event)"
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

import Button from "primevue/button";
import Dialog from "primevue/dialog";

import InputSelectMulti from "./InputSelectMulti.vue";

export default {
  name: "ViewMethodSearch",
  components: {
    Button,
    Dialog,
    InputSelectMulti
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
      this.displayModal = true;
    },
    closeModal() {
      this.displayModal = false;
    }
  },
  data() {
    return {
      componentsOptions: [
        { label: "MeSH or other subject terms" },
        { label: "Synonyms" },
        { label: "Search filter" }
      ],
      specialistOptions: [
        { label: "Librarian" },
        { label: "Health Librarian" },
        { label: "Information Specialist" },
        { label: "Cochrane Information Specialist" }
      ],
      displayModal: false,
      modalText: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
