<template>
  <div>
      <h1>Picot</h1>
      <!-- P -->
      <InputTextSingleLineMulti 
        question="What is the population, or problem (P), of your systematic review, (e.g. older people with diabetes)."
        v-model="populationInclude"
      />
      <InputTextSingleLine 
        question="Are there any populations or problems that will be excluded, (e.g. children on ventilator support). "
        v-model="populationExclude"
      />

      <!-- I -->
      <InputTextSingleLine 
        question="What is the intervention (I) of your systematic review, (e.g. metformin)."
        v-model="interventionInclude"
      />
      <InputTextSingleLine 
        question="Are there any interventions that will be excluded, (e.g. exercise)."
        v-model="interventionExclude"
      />

      <!-- C -->
      <InputTextSingleLine 
        question="What is the comparator (C) that the intervention will be compared against"
        v-model="comparatorInclude"
      />
      <InputTextSingleLine 
        question="Will any comparators be excluded (e.g. no treatment)"
        v-model="comparatorExclude"
      />

      <!-- O -->
      <InputTextMultiLine 
        question="What are the outcomes (O) you will be looking for (e.g. reduced hospitalization, improved quality of life, mortality)"
        v-model="outcomesInclude"
      />
      <InputTextMultiLine 
        question="Will any outcomes be excluded (e.g. self reported feeling better, reduction in pain scores, improved fatigue levels)"
        v-model="outcomesExclude"
      />

      <!-- T -->
      <InputSelectMulti
        question="What study types (T) will be included"
        :options="typesOptions"
        v-model="typesInclude"
      />
      <InputSelectMulti
        question="What study types (T) will be included"
        :options="typesOptions"
        v-model="typesExclude"
      />
  </div>
</template>

<script>
import InputTextSingleLine from './InputTextSingleLine.vue'
import InputTextSingleLineMulti from './InputTextSingleLineMulti.vue'
import InputTextMultiLine from './InputTextMultiLine.vue'
import InputSelectMulti from './InputSelectMulti.vue'
export default {
  name: 'ViewMethodPicot',
  components: {
    InputTextSingleLine,
    InputTextSingleLineMulti,
    InputTextMultiLine,
    InputSelectMulti
  },
  // TODO: Move method data into state using vuex
  data() {
    return {
      populationInclude: [""],
      populationExclude: "",
      interventionInclude: "",
      interventionExclude: "",
      comparatorInclude: "",
      comparatorExclude: "",
      outcomesInclude: "",
      outcomesExclude: "",
      typesInclude: null,
      typesExclude: null,
      typesOptions: [
        "Systematic Reviews",
        "Randomized Controlled Trials",
        "Cohort Studies",
        "Longitudinal studies",
        "Before after studies",
        "Surveys",
        "Letters",
        "Editorials"
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
