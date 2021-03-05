<template>
  <ValidationObserver ref="form">
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
          <input
            v-model="form.name"
            class="field"
            :class="{ 'field-with-error': errors[0] }"
            type="text"
            name="name"
            placeholder="Enter project name"
          />

          <span class="field-error">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>

      <textarea v-model="form.description" class="field" name="description" placeholder="Enter project description" />

      <div class="py-2 flex flex-row justify-end space-x-2">
        <button class="btn gray w-32" @click.prevent="handleClose">Cancel</button>
        <button class="btn green w-32" type="submit">Add</button>
      </div>
    </form>
  </ValidationObserver>
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
  data() {
    return {
      form: {
        name: null,
        description: null
      }
    }
  },
  methods: {
    ...mapActions('projects', ['addProject']),
    async handleSubmit() {
      const success = await this.$refs.form.validate()

      if (!success) {
        return
      }

      await this.addProject(this.form)
      this.$refs.form.reset()
      this.handleClose()
    },
    handleClose() {
      this.$emit('close')
    }
  }
}
</script>
