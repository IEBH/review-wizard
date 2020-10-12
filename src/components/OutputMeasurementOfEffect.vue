<template>
  <div>
    <p v-if="data.toolUsed">
      {{ capitalize(data.toolUsed) }} was used to calculate the treatment
      effect.
    </p>
    <p v-if="data.dichotomousOutcomes">
      We used {{ formatSelectMulti(data.dichotomousOutcomes) }} for dichotomous
      outcomes.
    </p>
    <p v-if="data.metaAnalysisThreshold">
      We undertook meta-analyses when {{ data.metaAnalysisThreshold }} studies
      or comparisons reported the same outcome.
    </p>
    <p v-if="data.metaAnalysisModelUsed">
      We used a {{ data.metaAnalysisModelUsed.toLowerCase() }} effects model.
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
