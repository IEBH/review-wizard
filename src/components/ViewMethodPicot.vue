<template>
  <div>
      <h1>Picot</h1>
      <!-- P -->
      <InputTextSingleLineMulti 
        question="What is the population, or problem (P), of your systematic review, (e.g. older people with diabetes)."
        v-model="method.picot.populationInclude"
      />
      <InputTextSingleLineMulti 
        question="Are there any populations or problems that will be excluded, (e.g. children on ventilator support). "
        v-model="method.picot.populationExclude"
      />

      <!-- I -->
      <InputTextSingleLineMulti 
        question="What is the intervention (I) of your systematic review, (e.g. metformin)."
        v-model="method.picot.interventionInclude"
      />
      <InputTextSingleLineMulti 
        question="Are there any interventions that will be excluded, (e.g. exercise)."
        v-model="method.picot.interventionExclude"
      />

      <!-- C -->
      <InputTextSingleLineMulti 
        question="What is the comparator (C) that the intervention will be compared against"
        v-model="method.picot.comparatorInclude"
      />
      <InputTextSingleLineMulti 
        question="Will any comparators be excluded (e.g. no treatment)"
        v-model="method.picot.comparatorExclude"
      />

      <!-- O -->
      <InputTextSingleLineMulti 
        question="What are the outcomes (O) you will be looking for (e.g. reduced hospitalization, improved quality of life, mortality)"
        v-model="method.picot.outcomesInclude"
      />
      <InputTextSingleLineMulti 
        question="Will any outcomes be excluded (e.g. self reported feeling better, reduction in pain scores, improved fatigue levels)"
        v-model="method.picot.outcomesExclude"
      />

      <!-- T -->
      <InputSelectMulti
        question="What study types (T) will be included"
        :options="method.picot.typesOptions"
        v-model="method.picot.typesInclude"
      />
      <InputSelectMulti
        question="Will any study types be excluded"
        :options="method.picot.typesOptions"
        v-model="method.picot.typesExclude"
      />

      <div class="p-mt-3 p-d-flex p-jc-center">
        <Button
          label="Generate Output"
          @click="addNewValue()"
        />
      </div>
  </div>
</template>

<script>
import Button from 'primevue/button';
import InputTextSingleLineMulti from './InputTextSingleLineMulti.vue'
import InputSelectMulti from './InputSelectMulti.vue'
export default {
  name: 'ViewMethodPicot',
  components: {
    Button,
    InputTextSingleLineMulti,
    InputSelectMulti
  },
  // TODO: Move method data into state using vuex
  inject: ['method']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
