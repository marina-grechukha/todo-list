import firebase from 'firebase/app'

export const namespaced = true

export const state = {
  list: [],
  loading: false
}

export const mutations = {
  SET_LOADING(state, status) {
    state.loading = status
  },

  SET_PROJECTS(state, projects) {
    state.list = projects
  },

  ADD_PROJECT(state, project) {
    state.list = [...state.list, project]
  }
}

export const actions = {
  async addProject({ commit }, data) {
    const user = firebase.auth().currentUser

    const result = await firebase
      .database()
      .ref(`users/${user.uid}/projects`)
      .push(data)

    commit('ADD_PROJECT', { id: result.key, ...data })
  },

  async loadProjects({ commit }) {
    const user = firebase.auth().currentUser

    commit('SET_LOADING', true)

    try {
      const snapshot = await firebase
        .database()
        .ref(`users/${user.uid}/projects`)
        .get()

      const values = await snapshot.val()
      const projects = Object.keys(values).map(id => ({
        id,
        ...values[id]
      }))

      commit('SET_PROJECTS', projects)
    } catch (error) {
      this._vm.$toast.error(error.message)
    }

    commit('SET_LOADING', false)
  }
}
