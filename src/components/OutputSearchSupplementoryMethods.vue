<template>
  <div>
    <p>
      {{ selectRandom(["We also ", "Additionaly, we"]) }}
      {{
        joinArrayWithAnd(
          formatSelectMulti(data.supplementoryMethods)
        ).toLowerCase()
      }}
    </p>
  </div>
</template>

<script>
import OutputMixin from "../mixins/OutputMixin.js";
export default {
  name: "OutputSearchSupplementoryMethods",
  mixins: [OutputMixin],
  props: {
    data: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
