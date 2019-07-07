import Vue from 'https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.min.js'
import { mapGetters, mapActions } from 'https://unpkg.com/vuex@3.1.1/dist/vuex.esm.browser.min.js'

export default Vue.component('Counter', {
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
