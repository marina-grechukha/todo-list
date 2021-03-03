<template>
  <div class="w-72 mx-auto mt-20">
    <ValidationObserver v-if="!isUserSignedUp" v-slot="{ invalid }">
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
          <ValidationProvider v-slot="{ errors }" name="Password" rules="required|min:6">
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

        <div class="mb-4">
          <ValidationProvider v-slot="{ errors }" name="Password Confirmation" rules="required|password:@Password">
            <input
              v-model="password_confirm"
              class="field"
              :class="{ 'field-with-error': errors[0] }"
              type="password"
              name="password_confirm"
              placeholder="Enter Password Confirmation"
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
          Sign Up
        </button>
      </form>
    </ValidationObserver>

    <div v-if="isUserSignedUp" class="alert success">
      You have been successfully signed up.
    </div>

    <router-link to="/sign-in">Sign In</router-link>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import '@/validators'

// https://firebase.google.com/docs/auth/web/password-auth?authuser=0
export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    email: '',
    password: '',
    password_confirm: '',
    authError: null,
    isUserSignedUp: false
  }),
  methods: {
    onSubmit() {
      this.authError = null

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.isUserSignedUp = true
        })
        .catch((error) => {
          this.authError = error.message
        })
    }
  }
}
</script>
