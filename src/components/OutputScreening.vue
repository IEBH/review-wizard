<template>
  <div>
    <p>
      <!-- Screeners -->
      {{ capitalize(numberToWord(data.numberOfTitleAbstractScreeners)) }} review
      authors (MB & NK, AMS & JC) independently screened the titles and
      abstracts against the inclusion criteria. One review author ({{
        nameToInitials(data.fullTextRetrivalAuthor)
      }}) retrieved full-text, and
      {{ numberToWord(data.numberOfTitleAbstractScreeners) }} authors (MB & NK,
      AMS & JC) screened the full-texts for inclusion.
      <!-- Discrepancies -->
      Discrepancies were resolved
      {{
        data.disputeResolution
          ? joinArrayWithOr(
              formatSelectMulti(data.disputeResolution)
            ).toLowerCase()
          : "BLANK"
      }}.
      <!-- PRISMA -->
      <span v-if="data.isPrismaFlowDiagram">
        The selection process was recorded in sufficient detail to complete a
        PRISMA flow diagram (see Figure X)
        <span v-if="data.isExcludedFullTextInAppendix">
          and a list of excluded (full-text) studies with reasons for exclusions
          (see Appendix X)
        </span>
        .
      </span>
    </p>
  </div>
</template>

<script>
import OutputMixin from "../mixins/OutputMixin.js";
export default {
  name: "OutputScreening",
  mixins: [OutputMixin],
  props: {
    data: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
