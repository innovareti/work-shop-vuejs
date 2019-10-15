import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

import Agenda from './components/Agenda'
import Sobre from './components/Sobre'
import Home from './components/Home'

const routes = [
  { path: '/agenda', component: Agenda },
  { path: '/sobre', component: Sobre },
  { path: '/', component: Home }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
