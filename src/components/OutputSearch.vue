<template>
  <div>
    <p>
      <span v-if="data.components">
        The following components were included in the search string:
        {{ joinArrayWithAnd(formatSelectMulti(data.components)).toLowerCase() }}
      </span>
      <span v-if="data.specialist">
        This search string was constructed by [a/an]
        {{ joinArrayWithAnd(formatSelectMulti(data.specialist)).toLowerCase() }}
        .
      </span>
      <span v-if="data.helper">
        [A/An]
        {{ joinArrayWithAnd(formatSelectMulti(data.helper)).toLowerCase() }}
        helped in the design of the search.
      </span>
    </p>
  </div>
</template>

<script>
import OutputMixin from "../mixins/OutputMixin.js";
export default {
  name: "OutputSearch",
  mixins: [OutputMixin],
  props: {
    data: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
