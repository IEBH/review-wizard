<template>
  <div>
    <h1>Study Selection and Screening</h1>

    <InputSelectDropdown
      question="How many review authors independently screened the titles and abstracts for inclusion against the inclusion criteria?"
      :value="screening.numberOfTitleAbstractScreeners"
      @input="updateField('numberOfTitleAbstractScreeners', $event)"
      :options="numberOptions"
    />

    <InputSelectDropdown
      question="Which author retrieved full-texts"
      :value="screening.fullTextRetrivalAuthor"
      @input="updateField('fullTextRetrivalAuthor', $event)"
      :options="titlepage.authors"
    />

    <InputSelectDropdown
      question="How many review authors independently screened the full-texts for inclusion?"
      :value="screening.numberOfFullTextScreeners"
      @input="updateField('numberOfFullTextScreeners', $event)"
      :options="numberOptions"
    />

    <InputSelectMulti
      question="Any disagreements were resolved by:"
      :value="screening.disputeResolution"
      @input="updateField('disputeResolution', $event)"
      :options="disputeResolutionOptions"
    />

    <InputSelectYesNo
      question="The study selection process was recorded in sufficient detail to complete a PRISMA flow diagramme"
      :value="screening.isPrismaFlowDiagram"
      @input="updateField('isPrismaFlowDiagram', $event)"
    />

    <InputSelectYesNo
      v-if="screening.isPrismaFlowDiagram"
      question="The list of studies excluded at full-text is provided in Appendix"
      :value="screening.isExcludedFullTextInAppendix"
      @input="updateField('isExcludedFullTextInAppendix', $event)"
    />

    <div class="p-mt-3 p-d-flex p-jc-center">
      <Button label="Generate Output" @click="openModal()" />
    </div>

    <!-- Modal to display output -->
    <Dialog
      header="Study Selection and Screening"
      :visible.sync="displayModal"
      :style="{ width: '50vw' }"
      :modal="true"
    >
      <OutputScreening :data="screening" />
    </Dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import OutputScreening from "./OutputScreening.vue";
import Button from "primevue/button";
import Dialog from "primevue/dialog";

import InputSelectDropdown from "./InputSelectDropdown.vue";
import InputSelectMulti from "./InputSelectMulti.vue";
import InputSelectYesNo from "./InputSelectYesNo.vue";

export default {
  name: "ViewMethodScreening",
  components: {
    Button,
    Dialog,
    InputSelectDropdown,
    InputSelectMulti,
    InputSelectYesNo,
    OutputScreening
  },
  computed: mapState({
    screening: state => state.method.doc.screening,
    titlepage: state => state.titlepage.doc
  }),
  methods: {
    updateField(field, value) {
      this.$store.dispatch("method/set", {
        screening: { [field]: value }
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
      numberOptions: ["2", "3", "4", "5", "6"],
      disputeResolutionOptions: [
        { label: "By consensus" },
        { label: "By referring to a third author" }
      ],
      displayModal: false,
      modalText: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
