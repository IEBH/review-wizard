<template>
  <div>
    <h1>Data Extraction</h1>

    <InputSelectDropdown
      question="How many studies was the data extraction form piloted on? (for study characteristics and outcome data)"
      :value="extraction.numberOfStudies"
      @input="updateField('numberOfStudies', $event)"
      :options="numberOptions"
    />

    <InputSelectDropdown
      question="How many study authors extracted the following data from included studies?"
      :value="extraction.numberOfExtractors"
      @input="updateField('numberOfExtractors', $event)"
      :options="numberOptions"
    />

    <!-- New -->
    <Accordion style="margin-top: 50px; border: 1px solid black;">
      <AccordionTab header="Optional Details" :active="false">
        <h3>What data will be extracted:</h3>
        <InputSelectMulti
          question="Methods:"
          :options="options.methods"
          :value="extraction.methods"
          @input="updateField('methods', $event)"
        />
        <InputSelectMulti
          question="Participants:"
          :options="options.participants"
          :value="extraction.participants"
          @input="updateField('participants', $event)"
        />
        <InputSelectMulti
          question="Interventions:"
          :options="options.interventions"
          :value="extraction.interventions"
          @input="updateField('interventions', $event)"
        />
        <InputSelectMulti
          question="Comparators:"
          :options="options.comparators"
          :value="extraction.comparators"
          @input="updateField('comparators', $event)"
        />
        <InputTable
          question="Outcomes:"
          :value="extraction.outcomes"
          columnHeader="Outcome"
          :inclusion="true"
          :type="true"
          :description="true"
          :examples="true"
          @input="updateField('outcomes', $event)"
          mainPlaceholder="e.g. investigator-assessed change in acne severity"
        />
        <!-- <Message
          v-if="!arrayEquals(picot.outcomes, extraction.outcomes)"
          severity="warn"
          :closable="false"
          >Not the same as PICOT outcomes</Message
        > -->
        <InputSelectMulti
          question="Types:"
          :options="options.types"
          :value="extraction.types"
          @input="updateField('types', $event)"
        />
        <!-- <Message
          v-if="!arrayEquals(picot.types, extraction.types)"
          severity="warn"
          :closable="false"
          >Not the same as PICOT types</Message -->
        >
      </AccordionTab>
    </Accordion>

    <PreviewOutput :component="outputComponent" :data="extraction" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
// import Message from "primevue/message";

import PreviewOutput from "./PreviewOutput.vue";
import OutputDataExtraction from "./OutputDataExtraction.vue";

import InputSelectDropdown from "./InputSelectDropdown.vue";
import InputSelectMulti from "./InputSelectMulti.vue";
import InputTable from "./InputTable.vue";

export default {
  name: "ViewMethodDataExtraction",
  components: {
    Accordion,
    AccordionTab,
    // Message,
    InputSelectDropdown,
    InputSelectMulti,
    InputTable,
    PreviewOutput
  },
  computed: mapState({
    extraction: state => state.method.doc.extraction,
    picot: state => state.method.doc.picot
  }),
  methods: {
    updateField(field, value) {
      this.$store.dispatch("method/set", {
        extraction: { [field]: value }
      });
    }
    // arrayEquals(arr1, arr2) {
    //   console.log(JSON.stringify(arr1));
    //   console.log(JSON.stringify(arr2));
    //   return JSON.stringify(arr1) === JSON.stringify(arr2);
    // }
  },
  mounted() {
    if (!this.extraction.outcomes) {
      // Deep copy
      this.extraction.outcomes = JSON.parse(
        JSON.stringify(this.picot.outcomes)
      );
    }
    if (this.extraction.types.length === 0) {
      // Shallow copy
      this.extraction.types = [...this.picot.types];
    }
  },
  data() {
    return {
      numberOptions: ["1", "2", "3", "4", "5", "6"],
      outputComponent: OutputDataExtraction,
      options: {
        methods: [
          { label: "Study authors" },
          { label: "Year" },
          { label: "Country" },
          { label: "Study design" },
          { label: "Duration of follow-up" },
          { label: "Setting" }
        ],
        participants: [
          { label: "Number of participants" },
          { label: "Age" },
          { label: "Gender" },
          { label: "Whether currently pregnant" },
          { label: "Smoker" },
          { label: "Any co-comorbidity" },
          { label: "Education level" }
        ],
        interventions: [
          { label: "Type of intervention" },
          { label: "Dose" },
          { label: "Frequency" },
          { label: "Method of delivery" },
          { label: "Who provided the intervention" },
          { label: "How the intervention was provided" }
        ],
        comparators: [
          { label: "Placebo" },
          { label: "Usual care" },
          { label: "Sham device" },
          { label: "No treatment" },
          { label: "Dose" },
          { label: "Frequency" },
          { label: "Method of delivery" },
          { label: "Who provided the intervention" },
          { label: "How the intervention was provided" }
        ],
        types: [
          { label: "Systematic Reviews" },
          { label: "Observational Studies" },
          { label: "Randomized Controlled Trials" },
          { label: "Cohort Studies" },
          { label: "Longitudinal studies" },
          { label: "Before after studies" },
          { label: "Surveys" },
          { label: "Letters" },
          { label: "Editorials" }
        ]
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
