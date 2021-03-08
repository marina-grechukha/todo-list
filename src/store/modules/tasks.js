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

  SET_TASKS(state, tasks) {
    state.list = tasks
  }
}

export const actions = {
  async loadTasksByProjectId({ commit }, projectId) {
    const user = firebase.auth().currentUser

    commit('SET_LOADING', true)

    try {
      const snapshot = await firebase
        .database()
        .ref(`users/${user.uid}/tasks`)
        .orderByChild('projectId')
        .equalTo(projectId)
        .get()

      const values = await snapshot.val()
      const tasks = Object.keys(values || {}).map(id => ({
        id,
        ...values[id]
      }))

      commit('SET_TASKS', tasks)
    } catch (error) {
      this._vm.$toast.error(error.message)
    }

    commit('SET_LOADING', false)
  }
}
