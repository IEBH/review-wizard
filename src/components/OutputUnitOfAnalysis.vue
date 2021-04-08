<template>
  <div>
    <p
      v-if="data.type === 'Individual' || data.type === 'Individual and other'"
    >
      {{
        selectRandom([
          "We used "
            .concat(data.type ? data.type.toLowerCase() : "BLANK")
            .concat(" participants as the unit of analysis."),
          "The unit of analysis was "
            .concat(data.type ? data.type.toLowerCase() : "BLANK")
            .concat(" patients.")
        ])
      }}
    </p>
    <p v-if="data.type === 'Individual and other'">
      {{
        selectRandom([
          "Where data on the number of individuals with primary and secondary outcomes of interest was not available, we extracted the information as it presented (e.g. "
            .concat(data.example ? data.example : "BLANK")
            .concat(")."),
          "Where the unit of analysis was not at individuals we "
            .concat(data.example ? data.example : "BLANK")
            .concat(".")
        ])
      }}
    </p>
    <p v-if="data.type === 'Other'">
      The unit of analysis was
      {{ data.otherType ? data.otherType.toLowerCase() : "BLANK" }}.
    </p>
  </div>
</template>

<script>
import OutputMixin from "../mixins/OutputMixin.js";
export default {
  name: "OutputUnitOfAnalysis",
  mixins: [OutputMixin],
  props: {
    data: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
