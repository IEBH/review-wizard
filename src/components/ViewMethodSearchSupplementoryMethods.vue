<template>
  <div>
    <h1>Supplementory Methods</h1>

    <InputSelectMulti
      question="Did you conduct any of the following methods to supplement your search results?"
      :options="supplementoryMethodsOptions"
      :value="search.supplementoryMethods"
      @input="updateField('supplementoryMethods', $event)"
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
      <OutputSearchSupplementoryMethods :data="search" />
    </Dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import OutputSearchSupplementoryMethods from "./OutputSearchSupplementoryMethods.vue";

import Button from "primevue/button";
import Dialog from "primevue/dialog";

import InputSelectMulti from "./InputSelectMulti.vue";

export default {
  name: "ViewMethodSearchDatabases",
  components: {
    Button,
    Dialog,
    InputSelectMulti,
    OutputSearchSupplementoryMethods
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
      supplementoryMethodsOptions: [
        // eslint-disable-next-line prettier/prettier
        { label: "Manually checked the reference lists of the included studies" },
        { label: "Performed a backwards citation analysis" },
        { label: "Contacted experts" },
        { label: "Used the similar articles feature of a database" }
      ],
      displayModal: false,
      modalText: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
