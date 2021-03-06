import firebase from 'firebase'

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
    state.list = {
      ...state.list,
      project
    }
  }
}

export const actions = {
  async addProject({ commit }, data) {
    const user = firebase.auth().currentUser

    await firebase
      .database()
      .ref(`users/${user.uid}/projects`)
      .push()
      .set(data)

    commit('ADD_PROJECT', data)
  },
  async loadProjects({ commit }) {
    const user = firebase.auth().currentUser

    commit('SET_LOADING', true)

    const snapshot = await firebase
      .database()
      .ref(`users/${user.uid}/projects`)
      .get()

    const values = await snapshot.val()

    const projects = Object.keys(values).map(id => ({
      id,
      ...values[id]
    }))

    commit('SET_LOADING', false)
    commit('SET_PROJECTS', projects)
  }
}
