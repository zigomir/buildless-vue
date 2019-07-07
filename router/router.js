import VueRouter from 'https://unpkg.com/vue-router@3.0.7/dist/vue-router.esm.browser.min.js'
import Counter from './pages/Counter.js'
import About from './pages/About.js'

const routes = [
  { path: '/counter', component: Counter },
  { path: '/about', component: About }
]

export default new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})
