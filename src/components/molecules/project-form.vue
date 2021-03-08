<template>
  <ValidationObserver ref="form" v-slot="{ invalid, handleSubmit }">
    <form @submit.prevent="handleSubmit(handleSubmitForm)">
      <div class="mb-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
          <input
            v-model.trim="form.name"
            class="field"
            :class="{ 'field-with-error': errors[0] }"
            type="text"
            name="name"
            placeholder="Enter project name"
            @keydown.prevent.enter="handleSubmit(handleSubmitForm)"
          />

          <span class="field-error">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>

      <textarea
        v-model.trim="form.description"
        class="field mb-4"
        name="description"
        placeholder="Enter project description"
      />

      <div class="flex flex-row justify-end space-x-2">
        <button class="btn gray w-32" @click.prevent="handleClose">Cancel</button>
        <button class="btn green w-32" type="submit" :disabled="invalid">{{ project ? 'Save' : 'Add' }}</button>
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
  props: {
    project: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      form: {
        name: null,
        description: null
      }
    }
  },
  mounted() {
    if (this.project) {
      this.form = { ...this.project }
    }
  },
  methods: {
    ...mapActions('projects', ['addProject', 'editProject']),
    async handleSubmitForm() {
      if (this.project) {
        await this.editProject(this.form)
      } else {
        await this.addProject(this.form)
      }

      this.$refs.form.reset()
      this.handleClose()
    },
    handleClose() {
      this.$emit('close')
    }
  }
}
</script>
