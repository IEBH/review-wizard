<template>
  <div>
    <p>
      {{
        selectRandom([
          "We used a data extraction form for study characteristics and outcome data, which was piloted on "
            .concat(data.numberOfStudies ? data.numberOfStudies : "BLANK")
            .concat(" studies in the review."),
          "A standardised form (initially piloted on "
            .concat(data.numberOfStudies ? data.numberOfStudies : "BLANK")
            .concat(" incluced studies) was used for data extraction."),
          "Study characteristics and outcomes data from each study were recorded in a data extraction form, which was initially piloted on "
            .concat(data.numberOfStudies ? data.numberOfStudies : "BLANK")
            .concat(" studies.")
        ])
      }}
    </p>
    <p>
      {{
        selectRandom([
          ""
            .concat(data.numberOfExtractors ? data.numberOfExtractors : "BLANK")
            .concat(
              " study authors extracted the following data from included studies:"
            ),
          "Data extraction was conducted by "
            .concat(data.numberOfExtractors ? data.numberOfExtractors : "BLANK")
            .concat(" authors. ")
            .concat(
              "The following data for study characteristics and outcomes were extracted from each included study:"
            )
        ])
      }}
    </p>
  </div>
</template>

<script>
import OutputMixin from "../mixins/OutputMixin.js";
export default {
  name: "OutputDataExtraction",
  mixins: [OutputMixin],
  props: {
    data: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
