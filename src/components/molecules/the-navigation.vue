<template>
  <div class="p-4 bg-gray-300 rounded-b-md flex">
    <div class="flex-1 font-extrabold">
      ToDo List
    </div>
    <div>
      {{ users.email }}
      <a href="" class="text-pink-700 ml-4" @click.prevent="handleSignOut">Sign Out</a>
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
