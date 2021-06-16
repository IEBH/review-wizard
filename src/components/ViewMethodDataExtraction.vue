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

    <InputSelectMulti
      question="Which author/s performed data extraction?"
      :value="extraction.extractionAuthors"
      @input="updateField('extractionAuthors', $event)"
      :options="
        titlepage.authors.map(el => {
          return { label: el };
        })
      "
    />

    <InputSelectYesNo
      question="Do you wish to specify what data will be extracted (optional)"
      :value="extraction.optionalDetail"
      @input="updateField('optionalDetail', $event)"
    />

    <!-- New -->
    <Accordion
      v-if="extraction.optionalDetail"
      style="margin-top: 50px; border: 1px solid black;"
    >
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
        <Message
          v-if="!arrayEquals(picot.outcomes, extraction.outcomes)"
          severity="warn"
          :closable="false"
          >Not the same as PICOT outcomes</Message
        >
        <InputSelectMulti
          question="Types:"
          :options="options.types"
          :value="extraction.types"
          @input="updateField('types', $event)"
        />
        <Message
          v-if="!arrayEquals(picot.types, extraction.types)"
          severity="warn"
          :closable="false"
          >Not the same as PICOT types</Message
        >
      </AccordionTab>
    </Accordion>

    <PreviewOutput :component="outputComponent" :data="extraction" />
  </div>
</template>

<script>
import isEqual from "lodash/isEqual";
import sortBy from "lodash/sortBy";

import { mapState } from "vuex";

import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Message from "primevue/message";

import PreviewOutput from "./PreviewOutput.vue";
import OutputDataExtraction from "./OutputDataExtraction.vue";

import InputSelectDropdown from "./InputSelectDropdown.vue";
import InputSelectMulti from "./InputSelectMulti.vue";
import InputTable from "./InputTable.vue";
import InputSelectYesNo from "./InputSelectYesNo.vue";

export default {
  name: "ViewMethodDataExtraction",
  components: {
    Accordion,
    AccordionTab,
    Message,
    InputSelectDropdown,
    InputSelectMulti,
    InputTable,
    PreviewOutput,
    InputSelectYesNo
  },
  computed: mapState({
    extraction: state => state.method.doc.extraction,
    titlepage: state => state.titlepage.doc,
    picot: state => state.method.doc.picot
  }),
  methods: {
    updateField(field, value) {
      this.$store.dispatch("method/set", {
        extraction: { [field]: value }
      });
    },
    compareLabel(a, b) {
      if (a.label < b.label) {
        return -1;
      } else if (a.label > b.label) {
        return 1;
      } else {
        return 0;
      }
    },
    compareMain(a, b) {
      if (a.main < b.main) {
        return -1;
      } else if (a.main > b.main) {
        return 1;
      } else {
        return 0;
      }
    },
    arrayEquals(arr1, arr2) {
      let sorted1;
      let sorted2;
      if (arr1 && arr2) {
        if (arr1[0]?.label && arr2[0]?.label) {
          sorted1 = sortBy(arr1, "label");
          sorted2 = sortBy(arr2, "label");
        } else if (arr1[0]?.main && arr2[0]?.main) {
          sorted1 = sortBy(arr1, "main");
          sorted2 = sortBy(arr2, "main");
        } else {
          sorted1 = arr1;
          sorted2 = arr2;
        }
      } else {
        return false;
      }
      return isEqual(sorted1, sorted2);
    }
  },
  mounted() {
    if (
      !this.extraction.outcomes ||
      JSON.stringify(this.extraction.outcomes) ==
        '[{"inclusion":true,"type":true}]'
    ) {
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
