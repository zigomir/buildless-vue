// import Vue from 'https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.min.js'
import Vue from 'https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.js' // dev mode & dev tools

export default Vue.component('Counter', {
  name: 'Counter',
  data () {
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
