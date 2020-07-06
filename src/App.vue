<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <div class="p-grid">
      <div class="p-col-fixed" style="width:auto"><TheSidebar/></div>
      <div class="p-col">
        <div class="p-shadow-10" style="padding:20px">
          <router-view></router-view>
          <!-- <ViewMethodPicot :method="method"/> -->
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';

import TheSidebar from './components/TheSidebar.vue'

export default {
  name: 'App',
  components: {
    TheSidebar,
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
