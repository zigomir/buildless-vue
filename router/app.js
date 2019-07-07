// import Vue from 'https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.js' // dev mode & dev tools
import Vue from 'https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.min.js'
import Vuex, { Store } from 'https://unpkg.com/vuex@3.1.1/dist/vuex.esm.browser.min.js'
import VueRouter from 'https://unpkg.com/vue-router@3.0.7/dist/vue-router.esm.browser.min.js'
import router from './router.js'
import store from './store.js'

const App = Vue.component('App', {
  template: `
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/counter">Counter</router-link>
      <router-link to="/about">About</router-link>
      <router-view></router-view>
    </div>
  `
})

Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
  store: new Store(store),
  router,
  render: h => h(App)
}).$mount('#app')
