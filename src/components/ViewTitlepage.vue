<template>
  <div>
    <h1>TitlePage</h1>
    <InputTextSingleLine
      question="What is the title of the study?"
      :value="titlepage.title"
      @input="updateField('title', $event)"
    />
    <InputTextSingleLineMulti
      question="Who are the authors in the study?"
      :value="titlepage.authors"
      @input="updateField('authors', $event)"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
// var revmanReplicant = require("revman-replicant-browser");
// import { picotGrammar } from "../assets/templates/method";
import InputTextSingleLine from "./InputTextSingleLine.vue";
import InputTextSingleLineMulti from "./InputTextSingleLineMulti.vue";

export default {
  name: "ViewMethodPicot",
  components: {
    InputTextSingleLine,
    InputTextSingleLineMulti
  },
  computed: mapState({
    titlepage: state => state.titlepage.doc
  }),
  methods: {
    updateField(field, value) {
      this.$store.dispatch("titlepage/set", {
        [field]: value
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
