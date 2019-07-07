export default {
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
}
