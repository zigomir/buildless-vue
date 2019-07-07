// import Vue from 'https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.js' // dev mode & dev tools
import Vue from 'https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.min.js'
import Vuex, { Store, mapGetters, mapActions } from 'https://unpkg.com/vuex@3.1.1/dist/vuex.esm.browser.min.js'
Vue.use(Vuex)

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

const App = Vue.component('App', {
  components: {
    Counter,
  },
  template: `
    <div>
      <counter />
    </div>
  `
})

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

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
