<template>
  <div>
    <p>
      We used the I<sup>2</sup> statistic to measure heterogeneity among the
      included trials.
      <span v-if="data.isMeasuredPublicationBias">
        We measured the publication bias using
        {{ data.biasMeasurement ? data.biasMeasurement : "BLANK" }}
      </span>
      <span v-else>
        We did not measure publication bias
        {{ data.didNotMeasure ? data.didNotMeasure : "BLANK" }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "OutputHeterogeneityPublicationBias",
  props: {
    data: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
