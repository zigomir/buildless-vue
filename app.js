// import Vue from 'https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.js'
import Vue from 'https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.min.js'  // dev mode & dev tools

// import Vuex, { Store, mapGetters, mapActions } from './vuex.esm.browser.js'
import Vuex, { Store, mapGetters, mapActions } from './vuex.esm.browser.min.js'

// import VueRouter from './vue-router.esm.browser.js'
import VueRouter from './vue-router.esm.browser.min.js'

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

const About = Vue.component('About', {
  template: `
    <h2>About me</h2>
  `
})

const Counter = Vue.component('Counter', {
  template: `
    <button @click="increment">You clicked me {{ count }} times.</button>
  `,
  computed: {
    ...mapGetters(['count'])
  },
  methods: {
    ...mapActions(['increment'])
  }
})

const routes = [
  { path: '/counter', component: Counter },
  { path: '/about', component: About }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Store({
  state: {
    count: 0
  },
  mutations: {
    INCREMENT (state) {
      state.count++
    }
  },
  actions: {
    increment ({ commit }) {
      commit('INCREMENT')
    }
  },
  getters: {
    count: state => state.count
  }
})

const app = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
