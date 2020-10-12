<template>
  <div>
    <p>
      We used a data extraction form for study characteristics and outcome data,
      which was piloted on {{ data.numberOfStudies }} studies in the review.
    </p>
    <p>
      {{ data.numberOfExtractors }} study authors extracted the following data
      from included studies:
    </p>
  </div>
</template>

<script>
export default {
  name: "OutputDataExtraction",
  props: {
    data: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
