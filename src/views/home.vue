<template>
  <div>
    <button class="block btn green mx-auto w-40" @click="handleModalToggle">Add Project</button>

    <Modal v-if="isModalShown" @close="handleModalToggle">
      <template #header>Add Project</template>

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

          <textarea
            v-model="form.description"
            class="field"
            name="description"
            placeholder="Enter project description"
          />
        </form>
      </ValidationObserver>

      <template #footer>
        <button class="btn gray w-32" @click="handleModalToggle">Cancel</button>
        <button class="btn green w-32" @click="handleSubmit">Add</button>
      </template>
    </Modal>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import '@/validators'
import Modal from '@/components/molecules/modal'

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
    Modal
  },
  data() {
    return {
      isModalShown: false,
      form: {
        name: null,
        description: null
      }
    }
  },
  mounted() {
    const database = firebase.database()
    console.log(database)
  },
  methods: {
    handleModalToggle() {
      this.isModalShown = !this.isModalShown

      this.form = {
        name: null,
        description: null
      }
    },
    handleSubmit() {
      this.$refs.form.validate().then(success => {
        if (!success) {
          return
        }

        const user = firebase.auth().currentUser

        firebase
          .database()
          .ref(`users/${user.uid}/projects`)
          .push()
          .set(this.form)

        this.$refs.form.reset()

        this.handleModalToggle()
      })
    }
  }
}
</script>
