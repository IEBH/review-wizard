<template>
  <div>
      <p>{{question}}</p>
      <!-- Listen to on change event instead of v-on:input to achieve same result as v-model.lazy -->
      <Textarea 
        v-bind:value="value"
        v-on:change="$emit('input', $event.target.value)"
        :autoResize="true" 
        rows="5" 
        cols="30"
      />
  </div>
</template>

<script>
import Textarea from 'primevue/textarea';
export default {
  name: 'InputTextMultiLine',
  props: {
    question: String,
    value: String
  },
  components: {
    Textarea
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
