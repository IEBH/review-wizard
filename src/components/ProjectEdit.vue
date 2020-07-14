<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'ProjectEdit',
  mounted () {
    this.$store.dispatch('method/openDBChannel')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
