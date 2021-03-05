import firebase from 'firebase'

export const namespaced = true

export const state = {
  email: null
}

export const mutations = {
  SET_USER_INFO(state, user) {
    state.email = user.email
  }
}

export const actions = {
  signUp(_context, { email, password }) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  },
  signIn(_context, { email, password }) {
    return firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
      })
  },
  loadUserInfo({ commit }) {
    const user = firebase.auth().currentUser

    commit('SET_USER_INFO', user)
  },
  signOut() {
    return firebase.auth().signOut()
  }
}
