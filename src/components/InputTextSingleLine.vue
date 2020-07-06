<template>
  <div>
      <p>{{question}}</p>
      <input
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
  </div>
</template>

<script>
export default {
  name: 'InputTextSingleLine',
  props: {
    question: String,
    value: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
