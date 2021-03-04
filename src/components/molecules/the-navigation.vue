<template>
  <div class="p-4 bg-gray-300 rounded-b-md flex">
    <div class="flex-1 font-extrabold">
      ToDo List
    </div>
    <div>
      {{ email }}
      <a href="" class="text-pink-700 ml-4" @click.prevent="handleSignOut">Sign Out</a>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
  computed: {
    email() {
      return firebase.auth().currentUser.email
    }
  },
  methods: {
    handleSignOut() {
      firebase.auth().signOut()
    }
  }
}
</script>
