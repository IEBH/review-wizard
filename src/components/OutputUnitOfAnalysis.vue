<template>
  <div>
    <p v-if="data.type === 'Individual'">
      The unit of analysis was {{ data.type.toLowerCase() }}. Where data on the
      number of individuals with primary and secondary outcomes of interest was
      not available, we extracted the information as it was presented (e.g.
      {{ data.example ? data.example : "BLANK" }}).
    </p>
    <p v-else>
      The unit of analysis was
      {{
        data.otherType.toLowerCase() ? data.otherType.toLowerCase() : "BLANK"
      }}.
    </p>
  </div>
</template>

<script>
export default {
  name: "OutputUnitOfAnalysis",
  props: {
    data: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
