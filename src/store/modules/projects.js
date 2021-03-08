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
  },

  EDIT_PROJECT(state, project) {
    const index = state.list.findIndex(item => item.id === project.id)

    state.list[index] = project
  },

  DELETE_PROJECT(state, id) {
    state.list = state.list.filter(project => project.id !== id)
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
      const projects = Object.keys(values || {}).map(id => ({
        id,
        ...values[id]
      }))

      commit('SET_PROJECTS', projects)
    } catch (error) {
      this._vm.$toast.error(error.message)
    }

    commit('SET_LOADING', false)
  },

  async editProject({ commit }, project) {
    const user = firebase.auth().currentUser

    try {
      await firebase
        .database()
        .ref(`users/${user.uid}/projects/${project.id}`)
        .update(project)

      commit('EDIT_PROJECT', project)
    } catch (error) {
      this._vm.$toast.error(error.message)
    }
  },

  async deleteProject({ commit }, id) {
    const user = firebase.auth().currentUser

    try {
      await firebase
        .database()
        .ref(`users/${user.uid}/projects/${id}`)
        .remove()

      commit('DELETE_PROJECT', id)
    } catch (error) {
      this._vm.$toast.error(error.message)
    }
  }
}
