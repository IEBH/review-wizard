<template>
  <div>
    <p>
      {{ data.numberOfAuthors ? data.numberOfAuthors : "BLANK " }} review
      authors {{ data.isIndependent ? "independently" : "" }} assessed the risk
      of bias for each study using the
      {{ data.toolUsed ? data.toolUsed : "BLANK" }}.
    </p>
  </div>
</template>

<script>
export default {
  name: "OutputAssessmentOfTheRiskOfBias",
  props: {
    data: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
