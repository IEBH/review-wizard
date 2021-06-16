<template>
  <div>
    <p>
      {{
        selectRandom([
          "We included " +
            typesInclude +
            " of " +
            populationInclude +
            ". We included interventions involving " +
            interventionInclude +
            ". We excluded studies if the controls used " +
            interventionExclude +
            ". The primary outcome was " +
            primaryOutcomesInclude +
            ", and secondary outcomes were " +
            secondaryOutcomesInclude +
            ". We included studies conducted in " +
            settingInclude +
            " and excluded studies conducted in " +
            settingExclude +
            ".",
          "All relevant " +
            typesInclude +
            " containing " +
            populationInclude +
            " were included" +
            ". As long as they contained the following interventions " +
            interventionInclude +
            ". We excluded studies if the controls used " +
            interventionExclude +
            ". Our primary outcome of interest was " +
            primaryOutcomesInclude +
            ". The secondary outcomes of interest were " +
            secondaryOutcomesInclude +
            ". If studies were conducted in " +
            settingInclude +
            " we included them" +
            ". Any studies conducted in " +
            settingExclude +
            " were excluded.",
          "We aimed to find, assess and synthesize all " +
            typesInclude +
            " containing " +
            populationInclude +
            ". If they used the following interventions " +
            interventionInclude +
            ". We excluded studies if " +
            interventionExclude +
            " was/were used as the control" +
            ". If " +
            primaryOutcomesInclude +
            " was reported we included it as the primary outcome, while if " +
            secondaryOutcomesInclude +
            " were reported we included them as the secondary outcome/s" +
            ". Studies conducted in " +
            settingInclude +
            " were included" +
            ". Studies conducted in " +
            settingExclude +
            " were excluded.",
          "This review aimed to find, assess and synthesize all " +
            typesInclude +
            "  that compared " +
            interventionInclude +
            " to " +
            comparatorInclude +
            ". Although, studies of " +
            interventionExclude +
            " or where the control was " +
            comparatorExclude +
            " were excluded" +
            ". Only Studies on" +
            populationInclude +
            " were included in the review" +
            ". The primary outcome of the review was/were" +
            primaryOutcomesInclude +
            ", while the secondary outcome/s were " +
            secondaryOutcomesInclude +
            ". For a study to be included, it needed to be set in " +
            settingInclude +
            ". If the study was conductd in " +
            settingExclude +
            " it was excluded."
        ])
      }}
    </p>
    <!-- Bullet points -->
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
      <li v-if="populationExclude != 'BLANK'">
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
      <li v-if="interventionExclude != 'BLANK'">
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
      <li v-if="comparatorExclude != 'BLANK'">
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
            "We included the following primary outcome: ",
            "Studies with the following primary outcomes were included: ",
            "Included primary outcomes were: ",
            "The primary outcome/s was/were: "
          ]) + primaryOutcomesInclude
        }}
      </li>
      <li v-if="secondaryOutcomesInclude != 'BLANK'">
        {{ "Included secondary outcomes were: " + secondaryOutcomesInclude }}
      </li>
      <li v-if="outcomesExclude != 'BLANK'">
        {{
          selectRandom([
            "We excluded: ",
            "Excluded outcomes were: ",
            "Studies with the following outcomes were excluded: "
          ]) + outcomesExclude
        }}
      </li>
    </ul>

    <h3>Setting</h3>
    <ul>
      <li>
        {{
          selectRandom([
            "We included studies conducted in: ",
            "Studies conducted in the following settings were included: "
          ]) + settingInclude
        }}
      </li>
      <li v-if="settingExclude != 'BLANK'">
        {{
          selectRandom([
            "We excluded studies conducted in: ",
            "Studies conducted in the following settings were excluded: "
          ]) + settingExclude
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
          ]) + typesInclude
        }}
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
    primaryOutcomesInclude: function() {
      if (this.data.outcomes) {
        return this.listMainWithExample(
          this.data.outcomes.filter(el => el.type),
          true
        );
      } else {
        return "BLANK";
      }
    },
    secondaryOutcomesInclude: function() {
      if (this.data.outcomes) {
        return this.listMainWithExample(
          this.data.outcomes.filter(el => !el.type),
          true
        );
      } else {
        return "BLANK";
      }
    },
    outcomesExclude: function() {
      return this.listMainWithExample(this.data.outcomes, false);
    },
    settingInclude: function() {
      return this.listMainWithExample(this.data.setting, true);
    },
    settingExclude: function() {
      return this.listMainWithExample(this.data.setting, false);
    },
    typesInclude: function() {
      return this.joinArrayWithOr(
        this.formatSelectMulti(this.data.types)
      ).toLowerCase();
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
              return (
                el.main.trim() +
                (el.description ? `; ${el.description.trim()}` : "") +
                (el.examples ? ` (e.g. ${el.examples.trim()})` : "")
              );
            }
          });
          return this.joinArrayWithOr(mappedArray);
        } else {
          return "BLANK";
        }
      } else {
        return "BLANK";
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
