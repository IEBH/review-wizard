<template>
  <div>
    <p>
      {{
        selectRandom([
          ""
            .concat(
              capitalize(data.toolUsed) ? capitalize(data.toolUsed) : "BLANK"
            )
            .concat(" was used to calculate the treatment effect."),
          "Overall intervention effect was calculated using "
            .concat(
              uncapitalize(data.toolUsed)
                ? uncapitalize(data.toolUsed)
                : "BLANK"
            )
            .concat("."),
          "Treatment/intervention effect was measured by "
            .concat(
              uncapitalize(data.toolUsed)
                ? uncapitalize(data.toolUsed)
                : "BLANK"
            )
            .concat("."),
          "Treatment/intervention effect was measured in "
            .concat(
              uncapitalize(data.toolUsed)
                ? uncapitalize(data.toolUsed)
                : "BLANK"
            )
            .concat(".")
        ])
      }}
    </p>
    <p>
      We used
      {{
        data.dichotomousOutcomes
          ? joinArrayWithAnd(
              formatSelectMulti(data.dichotomousOutcomes)
            ).toLowerCase()
          : "BLANK"
      }}
      for dichotomous outcomes.
    </p>
    <p>
      We undertook meta-analyses when
      {{ data.metaAnalysisThreshold ? data.metaAnalysisThreshold : "BLANK" }}
      studies or comparisons reported the same outcome.
    </p>
    <p>
      We used a
      {{
        data.metaAnalysisModelUsed.toLowerCase()
          ? data.metaAnalysisModelUsed.toLowerCase()
          : "BLANK"
      }}
      effects model.
    </p>
  </div>
</template>

<script>
import OutputMixin from "../mixins/OutputMixin.js";
export default {
  name: "OutputMeasurementOfEffect",
  mixins: [OutputMixin],
  props: {
    data: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
