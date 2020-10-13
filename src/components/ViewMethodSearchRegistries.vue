<template>
  <div>
    <h1>Search Strings for Trial Registries</h1>

    <InputSelectMulti
      question="Which registries did you search?"
      :options="registryOptions"
      :value="search.registries"
      @input="updateField('registries', $event)"
    />

    <InputDate
      question="What date did you run your search on?"
      :value="search.registryDateOfSearch"
      @input="updateField('registryDateOfSearch', $event)"
    />

    <InputDate
      question="Did you have a date you ran the search back to, or did you run the search from the inception of the database? (leave blank if from inception)"
      :value="search.registryDateSearchedUntil"
      @input="updateField('registryDateOfSearch', $event)"
    />

    <template v-for="(registry, index) of search.registries">
      <InputTextMultiSyntax
        :key="index"
        :question="
          `Registry ${index + 1} (e.g. ${
            registry.label
          }) copy and paste your full search string.`
        "
        :value="registry.string"
        @input="updateRegisteryString(index, $event)"
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
      <OutputSearchRegistries :data="search" />
    </Dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import OutputSearchRegistries from "./OutputSearchRegistries.vue";

import Button from "primevue/button";
import Dialog from "primevue/dialog";

import InputSelectMulti from "./InputSelectMulti.vue";
import InputDate from "./InputDate.vue";
import InputTextMultiSyntax from "./InputTextMultiSyntax";

export default {
  name: "ViewMethodSearchRegistries",
  components: {
    Button,
    Dialog,
    InputSelectMulti,
    InputDate,
    InputTextMultiSyntax,
    OutputSearchRegistries
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
    updateRegisteryString(index, value) {
      var newregistry = this.search.registries;
      newregistry[index].string = value;
      this.updateField("registries", newregistry);
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
      registryOptions: [
        // eslint-disable-next-line prettier/prettier
        { label: "World Health Organization – International Clinical Trials Registry Platform (ICTRP)", string: "" },
        { label: "ClinicalTrials.gov", string: "" },
        { label: "Health Canada Clinical Trial Database", string: "" },
        { label: "EU Clinical Trials Register", string: "" },
        { label: "German Clinical Trials Register", string: "" },
        { label: "Netherlands Trial Register (Dutch)", string: "" },
        { label: "Swiss National Clinical Trials Portal", string: "" },
        { label: "ISRCTN", string: "" },
        // eslint-disable-next-line prettier/prettier
        { label: "Australian New Zealand Clinical Trials Registry", string: "" },
        { label: "Chinese Clinical Trial Registry", string: "" },
        { label: "Clinical Trials Registry – India", string: "" },
        { label: "Cochrane CENTRAL", string: "" }
      ],
      displayModal: false,
      modalText: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
