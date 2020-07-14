<template>
  <router-view></router-view>
</template>

<script>
import Vue from 'vue'

const method = Vue.observable({
  picot: {
    populationInclude: [""],
    populationExclude: [""],
    interventionInclude: [""],
    interventionExclude: [""],
    comparatorInclude: [""],
    comparatorExclude: [""],
    outcomesInclude: ["", "", ""],
    outcomesExclude: ["", "", ""],
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
})

export default {
  name: 'ProjectEdit',
  provide: {
    method
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
