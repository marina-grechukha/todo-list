import firebase from 'firebase'

export const namespaced = true

export const state = {
  list: []
}

export const mutations = {}

export const actions = {
  addProject(_context, data) {
    const user = firebase.auth().currentUser

    return firebase
      .database()
      .ref(`users/${user.uid}/projects`)
      .push()
      .set(data)
  }
}
