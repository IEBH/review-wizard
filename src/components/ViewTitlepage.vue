<template>
  <div>
    <h1>Title Page</h1>
    <InputTextSingleLine
      question="What is the title of the study?"
      :value="titlepage.title"
      @input="updateField('title', $event)"
      placeholder="e.g. Blue-light therapy for acne vulgaris: a systematic review and meta-analysis"
    />
    <InputTextSingleLineMulti
      question="Who are the authors in the study?"
      :value="titlepage.authors"
      @input="updateField('authors', $event)"
      placeholder="e.g. Justin Clark"
    />
    <InputTextNumber
      question="What year will study be published?"
      :value="titlepage.year"
      @input="updateField('year', $event)"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import InputTextNumber from "./InputTextNumber.vue";
import InputTextSingleLine from "./InputTextSingleLine.vue";
import InputTextSingleLineMulti from "./InputTextSingleLineMulti.vue";

export default {
  name: "ViewMethodPicot",
  components: {
    InputTextSingleLine,
    InputTextSingleLineMulti,
    InputTextNumber
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
