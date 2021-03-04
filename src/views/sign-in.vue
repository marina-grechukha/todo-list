<template>
  <div class="w-72 mx-auto mt-20">
    <ValidationObserver v-slot="{ invalid }">
      <div v-if="authError" class="alert error">{{ authError }}</div>

      <form class="mb-4" @submit.prevent="onSubmit">
        <div class="mb-4">
          <ValidationProvider v-slot="{ errors }" name="E-mail" rules="required|email">
            <input
              v-model="email"
              class="field"
              :class="{ 'field-with-error': errors[0] }"
              type="email"
              name="email"
              placeholder="Enter Email"
            />

            <span class="field-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="mb-4">
          <ValidationProvider v-slot="{ errors }" name="Password" rules="required">
            <input
              v-model="password"
              class="field"
              :class="{ 'field-with-error': errors[0] }"
              type="password"
              name="password"
              placeholder="Enter Password"
            />

            <span class="field-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <button
          class="w-full rounded-md px-4 py-2 text-white"
          :class="invalid ? 'bg-gray-300' : 'bg-green-500'"
          type="submit"
          :disabled="invalid"
        >
          Sign In
        </button>
      </form>
    </ValidationObserver>

    <router-link to="/sign-up">Sign Up</router-link>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import '@/validators'

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    email: '',
    password: '',
    authError: null
  }),
  methods: {
    onSubmit() {
      this.authError = null

      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
          return firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(() => {
              this.$router.push('/')
            })
        })
        .catch((error) => {
          this.authError = error.message
        })
    }
  }
}
</script>
