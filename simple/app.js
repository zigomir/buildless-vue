import Vue from 'https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.js' // dev mode & dev tools
// import Vue from 'https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.min.js'
import Counter from './components/Counter.js'

const App = Vue.component('App', {
  components: {
    Counter
  },
  template: `
    <div>
      <Counter />
    </div>
  `
})

new Vue({
  render: h => h(App)
}).$mount('#app')
