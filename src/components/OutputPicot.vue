<template>
  <div>
    <h3>Participants</h3>
    <ul>
      <li>
        We included:
        {{
          joinArrayWithOr(
            data.population.filter(el => el.inclusion).map(el => el.main)
          )
        }}
      </li>
      <li>
        We excluded:
        {{
          joinArrayWithAnd(
            data.population.filter(el => !el.inclusion).map(el => el.main)
          )
        }}
      </li>
    </ul>

    <h3>Interventions</h3>
    <ul>
      <li>
        We included:
        {{
          joinArrayWithOr(
            data.intervention.filter(el => el.inclusion).map(el => el.main)
          )
        }}
      </li>
      <li>
        We excluded:
        {{
          joinArrayWithAnd(
            data.intervention.filter(el => !el.inclusion).map(el => el.main)
          )
        }}
      </li>
    </ul>

    <h3>Comparators</h3>
    <ul>
      <li>
        We included:
        {{
          joinArrayWithOr(
            data.comparator.filter(el => el.inclusion).map(el => el.main)
          )
        }}
      </li>
      <li>
        We excluded:
        {{
          joinArrayWithAnd(
            data.comparator.filter(el => !el.inclusion).map(el => el.main)
          )
        }}
      </li>
    </ul>

    <h3>Outcomes</h3>
    <ul>
      <li>
        We included:
        {{
          joinArrayWithOr(
            data.outcomes.filter(el => el.inclusion).map(el => el.main)
          )
        }}
      </li>
      <li>
        We excluded:
        {{
          joinArrayWithAnd(
            data.outcomes.filter(el => !el.inclusion).map(el => el.main)
          )
        }}
      </li>
    </ul>

    <h3>Study design</h3>
    <ul>
      <li>
        We included:
        {{ joinArrayWithOr(formatSelectMulti(data.types)).toLowerCase() }}
      </li>
    </ul>
  </div>
</template>

<script>
import OutputMixin from "../mixins/OutputMixin.js";
export default {
  name: "OutputPicot",
  mixins: [OutputMixin],
  props: {
    data: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
