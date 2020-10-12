<template>
  <div>
    <p>
      {{ capitalize(data.toolUsed) ? capitalize(data.toolUsed) : "BLANK" }} was
      used to calculate the treatment effect.
    </p>
    <p>
      We used
      {{
        formatSelectMulti(data.dichotomousOutcomes)
          ? formatSelectMulti(data.dichotomousOutcomes)
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
