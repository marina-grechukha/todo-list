<template>
  <div class="w-72 mx-auto mt-20">
    <h1 class="text-2xl font-extrabold mb-4">Sign In</h1>

    <ValidationObserver v-slot="{ invalid }">
      <div v-if="authError" class="alert error">{{ authError }}</div>

      <form class="mb-4" @submit.prevent="handleSubmit">
        <div class="mb-4">
          <ValidationProvider v-slot="{ errors }" name="E-mail" rules="required|email">
            <input
              v-model="form.email"
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
              v-model="form.password"
              class="field"
              :class="{ 'field-with-error': errors[0] }"
              type="password"
              name="password"
              placeholder="Enter Password"
            />

            <span class="field-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <button class="w-full btn" :class="invalid ? 'gray' : 'green'" type="submit" :disabled="invalid">
          Sign In
        </button>
      </form>
    </ValidationObserver>

    <div class="text-center">
      <router-link to="/sign-up" class="link">Sign Up</router-link> if you don't have an account.
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import '@/validators'
import { mapActions } from 'vuex'

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    form: {
      email: '',
      password: ''
    },
    authError: null
  }),
  methods: {
    ...mapActions('users', ['signIn']),
    async handleSubmit() {
      try {
        this.authError = null

        await this.signIn(this.form)
        await this.$router.push('/')
      } catch (error) {
        this.authError = error.message
      }
    }
  }
}
</script>
