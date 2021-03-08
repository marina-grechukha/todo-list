<template>
  <div class="w-72 mx-auto mt-20">
    <h1 class="text-2xl font-extrabold mb-4">Sign Up</h1>

    <ValidationObserver v-slot="{ invalid }">
      <div v-if="authError" class="alert error">{{ authError }}</div>

      <form class="mb-4" @submit.prevent="handleSubmit">
        <div class="mb-4">
          <ValidationProvider v-slot="{ errors }" name="E-mail" rules="required|email">
            <input
              v-model.trim="form.email"
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
              v-model.trim="form.password"
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
              v-model.trim="form.password_confirm"
              class="field"
              :class="{ 'field-with-error': errors[0] }"
              type="password"
              name="password_confirm"
              placeholder="Enter Password Confirmation"
            />

            <span class="field-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <button class="w-full btn green" type="submit" :disabled="invalid">
          Sign Up
        </button>
      </form>
    </ValidationObserver>

    <div class="text-center"><router-link to="/sign-in" class="link">Sign In</router-link> if you have an account.</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import '@/validators'

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    form: {
      email: '',
      password: '',
      password_confirm: ''
    },
    authError: null
  }),
  methods: {
    ...mapActions('users', ['signUp', 'signIn']),
    async handleSubmit() {
      try {
        this.authError = null
        await this.signUp(this.form)
        await this.signIn(this.form)
        await this.$router.push('/')
      } catch (error) {
        this.authError = error.message
      }
    }
  }
}
</script>
