// import Vue from 'https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.js' // dev mode & dev tools
import Vue from 'https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.min.js'

const Counter = Vue.component('Counter', {
  data() {
    return {
      count: 0
    }
  },
  template: `
    <button @click="increment">You clicked me {{ count }} times.</button>
  `,
  methods: {
    increment () {
      this.count++
    }
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

new Vue({
  render: h => h(App)
}).$mount('#app')


