<template>
  <div>
    <p>
      We searched
      {{ joinArrayWithAnd(formatSelectMulti(data.registries)) }} from
      {{
        data.registryDateSearchedUntil
          ? formatDateFull(data.registryDateSearchedUntil)
          : "inception"
      }}
      to
      {{
        data.registryDateOfSearch
          ? formatDateFull(data.registryDateOfSearch)
          : "BLANK"
      }}
      (see Appendix Y).
    </p>
  </div>
</template>

<script>
import OutputMixin from "../mixins/OutputMixin.js";
export default {
  name: "OutputSearchRegistries",
  mixins: [OutputMixin],
  props: {
    data: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
