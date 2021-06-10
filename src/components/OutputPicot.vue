<template>
  <div>
    <h3>Participants</h3>
    <ul>
      <li>
        {{
          selectRandom([
            selectRandom([
              "We included: ",
              "Included participants were: ",
              "The following participants were included: "
            ]) + populationInclude,
            "Studies of " +
              populationInclude +
              " were eligible for this review."
          ])
        }}
      </li>
      <li v-if="populationExclude">
        {{
          selectRandom([
            "We excluded: ",
            "Participants were excluded if they were: "
          ]) + populationExclude
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
            "The following interventions were included: ",
            "Studies were eligible if they evaluated: "
          ]) + interventionInclude
        }}
      </li>
      <li v-if="interventionExclude">
        {{
          selectRandom([
            "We excluded: ",
            "Interventions were excluded if they involved the following: ",
            "Interventions were excluded if they involved: ",
            "Interventions were excluded if they had:",
            "Interventions were excluded if they had any of: "
          ]) + interventionExclude
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
          ]) + comparatorInclude
        }}
      </li>
      <li v-if="comparatorExclude">
        {{
          selectRandom([
            "We excluded: ",
            "Studies were excluded if the comparator group had any of the following: ",
            "Studies were excluded if the comparator group had any of: "
          ]) + comparatorExclude
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
          ]) + outcomesInclude
        }}
      </li>
      <li v-if="outcomesExclude">
        {{
          selectRandom([
            "We excluded: ",
            "Excluded outcomes were: ",
            "Studies with the following outcomes were excluded: "
          ]) + outcomesExclude
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
    <h2>Eligibility criteria</h2>
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
  },
  computed: {
    populationInclude: function() {
      return this.listMainWithExample(this.data.population, true);
    },
    populationExclude: function() {
      return this.listMainWithExample(this.data.population, false);
    },
    interventionInclude: function() {
      return this.listMainWithExample(this.data.intervention, true);
    },
    interventionExclude: function() {
      return this.listMainWithExample(this.data.intervention, false);
    },
    comparatorInclude: function() {
      return this.listMainWithExample(this.data.comparator, true);
    },
    comparatorExclude: function() {
      return this.listMainWithExample(this.data.comparator, false);
    },
    outcomesInclude: function() {
      return this.listMainWithExample(this.data.outcomes, true);
    },
    outcomesExclude: function() {
      return this.listMainWithExample(this.data.outcomes, false);
    }
  },
  methods: {
    listMainWithExample(data, include = true) {
      if (data) {
        const filteredArray = include
          ? data.filter(el => el.inclusion)
          : data.filter(el => !el.inclusion);
        // If there is at least one main input specified
        if (filteredArray.some(el => el.main)) {
          const mappedArray = filteredArray.map(el => {
            if (el.main) {
              return el.main + (el.examples ? ` (e.g. ${el.examples})` : "");
            }
          });
          return this.joinArrayWithOr(mappedArray);
        } else {
          return "";
        }
      } else {
        return "";
      }
    }
    // getExamples(data, include = true) {
    //   const examples = include
    //     ? data.filter(el => el.inclusion).map(el => el.examples)
    //     : data.filter(el => !el.inclusion).map(el => el.examples);
    //   if (examples.some(eg => eg)) {
    //     return ` (e.g. ${this.joinArrayWithOr(examples)})`;
    //   } else {
    //     return "";
    //   }
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
