<template>
  <div>
    <h1>Restrictions on Publication Type</h1>

    <InputYesNo
      question="Were the search results restricted by publication type?"
      :value="search.isRestrictedByPublicationType"
      @input="updateField('isRestrictedByPublicationType', $event)"
    />

    <InputYesNo
      question="Were the search results restricted by language?"
      :value="search.isRestrictedByLanguage"
      @input="updateField('isRestrictedByLanguage', $event)"
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

import InputYesNo from "./InputYesNo.vue";

export default {
  name: "ViewMethodSearchDatabases",
  components: {
    Button,
    Dialog,
    InputYesNo
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
      displayModal: false,
      modalText: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
