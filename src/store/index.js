import Vue from 'vue'
import Vuex from 'vuex'
import * as projects from '@/store/modules/projects'
import * as users from '@/store/modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    projects,
    users
  }
})
