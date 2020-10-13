<template>
  <div>
    <p>
      We searched {{ joinArrayWithAnd(formatSelectMulti(data.databases)) }} from
      {{ data.dateSearchedUntil ? data.dateSearchedUntil : "inception" }} to
      {{ data.dateOfSearch ? formatDateFull(data.dateOfSearch) : "BLANK" }}
      (see Appendix X).
    </p>
    <h3>Appendix X - Search Strategies</h3>
    <p v-for="(database, index) of data.databases" :key="index">
      {{ database.label }} - run {{ formatDate(data.dateOfSearch) }} <br />
      <span style="white-space: pre-wrap;">{{ database.string }}</span>
    </p>
  </div>
</template>

<script>
import OutputMixin from "../mixins/OutputMixin.js";
export default {
  name: "OutputSearchDatabases",
  mixins: [OutputMixin],
  props: {
    data: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
