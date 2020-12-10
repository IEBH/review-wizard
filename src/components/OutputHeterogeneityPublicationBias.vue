<template>
  <div>
    <p>
      <span
        v-html="
          selectRandom([
            'We used the I<sup>2</sup> statistic to measure heterogeneity among the included trials.',
            'Heterogeneity was assessed using the I<sup>2</sup> statistic.'
          ])
        "
      >
      </span>
      <span v-if="data.isMeasuredPublicationBias">
        {{
          selectRandom([
            "We measured the publication bias using",
            "Publication bias was assessed using:"
          ])
        }}
        {{ data.biasMeasurement ? data.biasMeasurement : "BLANK" }}.
      </span>
      <span v-else>
        We did not measure publication bias
        {{ data.didNotMeasure ? data.didNotMeasure : "BLANK" }}.
      </span>
    </p>
  </div>
</template>

<script>
import OutputMixin from "../mixins/OutputMixin.js";
export default {
  name: "OutputHeterogeneityPublicationBias",
  mixins: [OutputMixin],
  props: {
    data: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
