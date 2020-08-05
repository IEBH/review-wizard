<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'ProjectEdit',
  mounted () {
    const articleId = this.$route.query.articleId
    console.log(articleId) 
    this.$store.dispatch('method/openDBChannel', { pathVariables: { articleId }});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
