<template>
  <div>
    <h3>Participants</h3>
    <ul>
      <li>
        {{
          selectRandom([
            "We included: ",
            "Included participants were: ",
            "The following participants were included: "
          ]) +
            joinArrayWithOr(
              data.population.filter(el => el.inclusion).map(el => el.main)
            )
        }}
      </li>
      <li>
        {{
          selectRandom([
            "We excluded: ",
            "Participants were excluded if they were: "
          ]) +
            joinArrayWithAnd(
              data.population.filter(el => !el.inclusion).map(el => el.main)
            )
        }}
      </li>
    </ul>

    <h3>Interventions</h3>
    <ul>
      <li>
        {{
          selectRandom([
            "We included: ",
            "Included interventions were: ",
            "Eligible interventions were: ",
            "The following interventions were included: "
          ]) +
            joinArrayWithOr(
              data.intervention.filter(el => el.inclusion).map(el => el.main)
            )
        }}
      </li>
      <li>
        {{
          selectRandom([
            "We excluded: ",
            "Interventions were excluded if they involved the following: ",
            "Interventions were excluded if they involved: ",
            "Interventions were excluded if they had:",
            "Interventions were excluded if they had any of: "
          ]) +
            joinArrayWithAnd(
              data.intervention.filter(el => !el.inclusion).map(el => el.main)
            )
        }}
      </li>
    </ul>

    <h3>Comparators</h3>
    <ul>
      <li>
        {{
          selectRandom([
            "We included: ",
            "Studies with the following comparator groups were eligible: "
          ]) +
            joinArrayWithOr(
              data.comparator.filter(el => el.inclusion).map(el => el.main)
            )
        }}
      </li>
      <li>
        {{
          selectRandom([
            "We excluded: ",
            "Studies were excluded if the comparator group had any of the following: ",
            "Studies were excluded if the comparator group had any of: "
          ]) +
            joinArrayWithAnd(
              data.intervention.filter(el => !el.inclusion).map(el => el.main)
            )
        }}
      </li>
    </ul>

    <h3>Outcomes</h3>
    <ul>
      <li>
        {{
          selectRandom([
            "We included: ",
            "Studies with the following outcomes were included: ",
            "Included outcomes were: "
          ]) +
            joinArrayWithOr(
              data.outcomes.filter(el => el.inclusion).map(el => el.main)
            )
        }}
      </li>
      <li>
        {{
          selectRandom([
            "We excluded: ",
            "Excluded outcomes were: ",
            "Studies with the following outcomes were excluded: "
          ]) +
            joinArrayWithAnd(
              data.outcomes.filter(el => !el.inclusion).map(el => el.main)
            )
        }}
      </li>
    </ul>

    <h3>Study design</h3>
    <ul>
      <li>
        {{
          selectRandom([
            "We included: ",
            "Included study designs were: ",
            "The following study designs were included: "
          ]) + joinArrayWithOr(formatSelectMulti(data.types)).toLowerCase()
        }}
      </li>
    </ul>
    <p>
      We included
      {{ joinArrayWithOr(formatSelectMulti(data.types)).toLowerCase() }}
      of
      {{
        joinArrayWithOr(
          data.population
            .filter(el => el.inclusion)
            .map(el => `${el.main} (${el.examples})`)
        )
      }}. We included
      {{ joinArrayWithOr(formatSelectMulti(data.types)).toLowerCase() }}
      of interventions involving
      {{
        joinArrayWithOr(
          data.intervention.filter(el => el.inclusion).map(el => el.main)
        )
      }}, for example
      {{
        joinArrayWithOr(
          data.intervention.filter(el => el.inclusion).map(el => el.examples)
        )
      }}. We excluded
      {{ joinArrayWithOr(formatSelectMulti(data.types)).toLowerCase() }}
      if the controls used
      {{
        joinArrayWithAnd(
          data.intervention
            .filter(el => !el.inclusion)
            .map(el => `${el.main} (${el.examples})`)
        )
      }}. The primary outcome was
      {{
        joinArrayWithOr(
          data.outcomes.filter(el => el.inclusion && el.type).map(el => el.main)
        )
      }}, and secondary outcomes were
      {{
        joinArrayWithOr(
          data.outcomes
            .filter(el => el.inclusion && !el.type)
            .map(el => `${el.main} (${el.examples})`)
        )
      }}.
    </p>
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
