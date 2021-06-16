<template>
  <!-- eslint-disable prettier/prettier -->
  <div>
    <p>
      <!-- Generic output -->
      <span v-if="!data.optionalDetail">
        {{
          selectRandom([
            "A standardised form (initially piloted on "
              .concat(data.numberOfStudies ? numberToWord(data.numberOfStudies) : "BLANK")
              .concat(
                " included studies) was used for data extraction of characteristics of studies, outcomes and risk of bias."
              ),
            "Study characteristics and outcomes data from each study were recorded in a data extraction form, which was initially piloted on "
              .concat(data.numberOfStudies ? numberToWord(data.numberOfStudies) : "BLANK")
              .concat(" studies.")
          ])
        }}
      </span>
      <!-- If user is specifying more detail -->
      <span v-else>
        {{
          selectRandom([
            "We used a data extraction form for study characteristics and outcome data, which was piloted on "
              .concat(data.numberOfStudies ? capitalize(numberToWord(data.numberOfStudies)) : "BLANK")
              .concat(" studies in the review."),
            "A standardised form (initially piloted on "
              .concat(data.numberOfStudies ? numberToWord(data.numberOfStudies) : "BLANK")
              .concat(" included studies) was used for data extraction of characteristics of studies, outcomes and risk of bias.")
          ])
        }}
      </span>
      <span>
        {{
          selectRandom([
            ""
              .concat(data.numberOfExtractors ? capitalize(numberToWord(data.numberOfExtractors)) : "BLANK")
              .concat(
                ` study authors (${extractionAuthorInitials}) extracted the following data from included studies:`
              ),
            "Data extraction was conducted by "
              .concat(data.numberOfExtractors ? numberToWord(data.numberOfExtractors) : "BLANK")
              .concat(` authors (${extractionAuthorInitials}). `)
              .concat(
                "The following data for study characteristics and outcomes were extracted from each included study:"
              )
          ])
        }}
      </span>
    </p>
    <!-- Optional Details -->
    <p v-if="data.optionalDetail">
      {{
        "We analysed "
          .concat(joinArrayWithOr(formatSelectMulti(data.types)).toLowerCase())
          .concat(" comparing ")
          .concat(joinArrayWithAnd(formatSelectMulti(data.comparators)).toLowerCase())
          .concat(".")
      }}
      {{
        "Studies included "
          .concat(joinArrayWithAnd(formatSelectMulti(data.participants)).toLowerCase())
          .concat(" and reported on ")
          .concat(
            data.outcomes
              ? data.outcomes.filter(el => el.inclusion && el.type).map(el => el.main)
              : "NO OUTCOMES SPECIFIED"
          )
          .concat(".")
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
  },
  computed: {
    extractionAuthorInitials: function() {
      return this.formatSelectMulti(this.data.extractionAuthors)
        .map(el => this.nameToInitials(el))
        .join(", ");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
