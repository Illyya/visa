import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    nationality: '',
    country: '',
    visa: '',
    entry: '',
    exit: '',
    amount: '',
    time: '',
    total: '',
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
