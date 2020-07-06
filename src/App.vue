<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

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
    <p>Input Text Multiple Line</p>
    <p>Input Text Multiple Line</p>

    <!-- T -->
    <p>Input Multi Select</p>
    <p>Input Multi Select</p>

  <div class="p-grid">
    <div class="p-col"><TheSidebar/></div>
    <div class="p-col">2</div>
  </div>

  </div>
</template>

<script>
import 'primeflex/primeflex.css';

import TheSidebar from './components/TheSidebar.vue'
import InputTextSingleLine from './components/InputTextSingleLine.vue'

export default {
  name: 'App',
  data: function() {
    return {
      method: {
        populationInclude: "",
        populationExclude: ""
      }
    }
  },
  components: {
    TheSidebar,
    InputTextSingleLine
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
