import Vue from 'vue'
import Vuex from 'vuex'
import * as users from '@/store/modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users
  }
})
