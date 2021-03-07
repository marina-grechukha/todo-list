<template>
  <div class="p-4 bg-gray-300 rounded-b-md flex">
    <div class="flex-1 font-extrabold">
      ToDo List
    </div>
    <div class="flex space-x-4">
      <div>{{ users.email }}</div>
      <a href="" class="link" @click.prevent="handleSignOut">Sign Out</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['users'])
  },
  mounted() {
    this.loadUserInfo()
  },
  methods: {
    ...mapActions('users', ['loadUserInfo', 'signOut']),
    handleSignOut() {
      this.signOut()
    }
  }
}
</script>
