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
// var revmanReplicant = require("revman-replicant-browser");
// import { picotGrammar } from "../assets/templates/method";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputTextSingleLine from "./InputTextSingleLine.vue";
import InputTextSingleLineMulti from "./InputTextSingleLineMulti.vue";

export default {
  name: "ViewMethodPicot",
  components: {
    Button,
    Dialog,
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
    },
    openModal() {
      // revmanReplicant(
      //   {
      //     revman: this.picot,
      //     grammar: picotGrammar
      //   },
      //   (err, res) => {
      //     // Use res html in v-html of modal
      //     if (err) console.log(err);
      //     this.modalText = res;
      //     this.displayModal = true;
      //   }
      // );
    },
    closeModal() {
      this.displayModal = false;
    }
  },
  data() {
    return {
      displayModal: false,
      modalText: "",
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
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
