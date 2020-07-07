<template>
  <div>
      <p>{{question}}</p>
      <!-- Listen to on change event instead of v-on:input to achieve same result as v-model.lazy -->
      <!-- <input
        v-bind:value="value"
        v-on:change="$emit('input', $event.target.value)"
      > -->
      <InputText 
        type="text"
        v-bind:value="value"
        v-on:change="$emit('input', $event.target.value)"
      />
      <Button icon="pi pi-search" class="p-button-rounded p-button-success" />
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
export default {
  name: 'InputTextSingleLine',
  props: {
    question: String,
    value: String
  },
  components: {
    InputText,
    Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
