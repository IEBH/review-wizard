<template>
  <div>
    <p>
      <span
        v-if="
          data.numberOfTitleAbstractScreeners === data.numberOfFullTextScreeners
        "
      >
        Screening of the literature was conducted by
        {{
          data.numberOfTitleAbstractScreeners
            ? data.numberOfTitleAbstractScreeners
            : "BLANK"
        }}
        authors independently, first by title/abstract, and subsequently in
        full-text.
      </span>
      <span v-else>
        Screening of the literature was conducted by
        {{
          data.numberOfTitleAbstractScreeners
            ? data.numberOfTitleAbstractScreeners
            : "BLANK"
        }}
        authors for title/abstract screening then by
        {{
          data.numberOfFullTextScreeners
            ? data.numberOfFullTextScreeners
            : "BLANK"
        }}
        for full-text screening.
      </span>
      Discrepancies were resolved
      {{
        data.disputeResolution
          ? joinArrayWithOr(
              formatSelectMulti(data.disputeResolution)
            ).toLowerCase()
          : "BLANK"
      }}.
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
