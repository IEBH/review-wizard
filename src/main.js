import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import App from './App.vue'

Vue.config.productionTip = false

import ViewMethodPicot from './components/ViewMethodPicot.vue'

const routes = [
  { path: '/method/picot', component: ViewMethodPicot }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
