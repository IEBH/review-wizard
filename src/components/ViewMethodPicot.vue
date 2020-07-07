<template>
  <div>
      <h1>Picot</h1>
      <!-- P -->
      <InputTextSingleLine 
        question="What is the population, or problem (P), of your systematic review, (e.g. older people with diabetes)."
        v-model="method.populationInclude"
      />
      <InputTextSingleLine 
        question="Are there any populations or problems that will be excluded, (e.g. children on ventilator support). "
        v-model="method.populationExclude"
      />

      <!-- I -->
      <InputTextSingleLine 
        question="What is the intervention (I) of your systematic review, (e.g. metformin)."
        v-model="method.populationInclude"
      />
      <InputTextSingleLine 
        question="Are there any interventions that will be excluded, (e.g. exercise)."
        v-model="method.populationInclude"
      />

      <!-- C -->
      <InputTextSingleLine 
        question="What is the comparator (C) that the intervention will be compared against"
        v-model="method.populationInclude"
      />
      <InputTextSingleLine 
        question="Will any comparators be excluded (e.g. no treatment)"
        v-model="method.populationInclude"
      />

      <!-- O -->
      <InputTextMultiLine 
        question="What are the outcomes (O) you will be looking for (e.g. reduced hospitalization, improved quality of life, mortality)"
        v-model="method.outcomesInclude"
      />
      <InputTextMultiLine 
        question="What are the outcomes (O) you will be looking for (e.g. reduced hospitalization, improved quality of life, mortality)"
        v-model="method.outcomesInclude"
      />

      <!-- T -->
      <p>Input Multi Select</p>
      <p>Input Multi Select</p>
  </div>
</template>

<script>
import InputTextSingleLine from './InputTextSingleLine.vue'
import InputTextMultiLine from './InputTextMultiLine.vue'
export default {
  name: 'ViewMethodPicot',
  components: {
    InputTextSingleLine,
    InputTextMultiLine
  },
  // TODO: Move method data into state using vuex
  data() {
    return {
      method: {
        populationInclude: "",
        populationExclude: "",
        outcomesInclude: "",
        outcomesExclude: ""
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
