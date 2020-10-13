<template>
  <div>
    <h1>Restrictions on Publication Type</h1>

    <InputSelectYesNo
      question="Were the search results restricted by publication type?"
      :value="search.isRestrictedByPublicationType"
      @input="updateField('isRestrictedByPublicationType', $event)"
    />

    <InputSelectMulti
      v-if="search.isRestrictedByPublicationType"
      question="What publication types did you exclude?"
      :options="publicationTypesOptions"
      :value="search.excludedPublicationTypes"
      @input="updateField('excludedPublicationTypes', $event)"
    />

    <InputSelectYesNo
      question="Were the search results restricted by language?"
      :value="search.isRestrictedByLanguage"
      @input="updateField('isRestrictedByLanguage', $event)"
    />

    <InputSelectMulti
      v-if="search.isRestrictedByLanguage"
      question="What languages did you include?"
      :options="languageOptions"
      :value="search.includedLanguages"
      @input="updateField('includedLanguages', $event)"
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
      <OutputPublicationType :data="search" />
    </Dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import OutputPublicationType from "./OutputPublicationType.vue";

import Button from "primevue/button";
import Dialog from "primevue/dialog";

import InputSelectYesNo from "./InputSelectYesNo.vue";
import InputSelectMulti from "./InputSelectMulti.vue";

export default {
  name: "ViewMethodSearchDatabases",
  components: {
    Button,
    Dialog,
    InputSelectYesNo,
    InputSelectMulti,
    OutputPublicationType
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
    openModal() {
      this.displayModal = true;
    },
    closeModal() {
      this.displayModal = false;
    }
  },
  data() {
    return {
      publicationTypesOptions: [
        { label: "Conference abstracts" },
        { label: "Theses" },
        { label: "Articles in press" },
        { label: "Books or book chapters" }
      ],
      languageOptions: [
        { label: "English" },
        { label: "German" },
        { label: "Spanish" },
        { label: "Chinese" },
        { label: "French" },
        { label: "Arabic" },
        { label: "Portugese" },
        { label: "Hindi" },
        { label: "Dutch" },
        { label: "Swiss" },
        { label: "Italian" },
        { label: "Japanese" },
        { label: "Egyptian" }
      ],
      displayModal: false,
      modalText: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
