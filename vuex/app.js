// import Vue from 'https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.js' // dev mode & dev tools
import Vue from 'https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.min.js'
import Vuex, { Store } from 'https://unpkg.com/vuex@3.1.1/dist/vuex.esm.browser.min.js'
import Counter from './components/Counter.js'
import store from './store.js'

Vue.use(Vuex)

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

new Vue({
  store: new Store(store),
  render: h => h(App)
}).$mount('#app')
