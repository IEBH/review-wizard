<template>
  <div>
    <p v-if="data.isContactedInvestigators">
      We contacted investigators or study sponsors to provide missing data.
    </p>
    <p v-else>
      We did not contact investigators or study sponsors to provide missing
      data.
    </p>
  </div>
</template>

<script>
export default {
  name: "OutputDealingWithMissingData",
  props: {
    data: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
