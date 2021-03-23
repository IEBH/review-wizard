<template>
  <div>
    <h1>Supplementory Methods</h1>

    <InputSelectMulti
      question="Did you conduct any of the following methods to supplement your search results?"
      :options="supplementoryMethodsOptions"
      :value="search.supplementoryMethods"
      @input="updateField('supplementoryMethods', $event)"
    />

    <PreviewOutput :component="outputComponent" :data="search" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import OutputSearchSupplementoryMethods from "./OutputSearchSupplementoryMethods.vue";

import PreviewOutput from "./PreviewOutput.vue";

import InputSelectMulti from "./InputSelectMulti.vue";

export default {
  name: "ViewMethodSearchDatabases",
  components: {
    InputSelectMulti,
    PreviewOutput
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
      supplementoryMethodsOptions: [
        // eslint-disable-next-line prettier/prettier
        { label: "Manually checked the reference lists of the included studies" },
        { label: "Performed a backwards citation analysis" },
        { label: "Contacted experts" },
        { label: "Used the similar articles feature of a database" }
      ],
      displayModal: false,
      modalText: "",
      outputComponent: OutputSearchSupplementoryMethods
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
