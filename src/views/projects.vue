<template>
  <div>
    <div v-if="!projects.loading">
      <h2 class="text-center font-extrabold text-2xl mb-4">Projects</h2>

      <button class="block btn green mx-auto w-1/2 mb-4" @click="handleModalToggle">Add Project</button>

      <ProjectList />

      <Modal v-if="isModalShown" @close="handleModalToggle">
        <template #header>Add Project</template>
        <ProjectForm @close="handleModalToggle" />
      </Modal>
    </div>

    <pulse-loader v-else :loading="true" size="2rem" class="flex justify-center my-10" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Modal from '@/components/molecules/modal'
import ProjectForm from '@/components/molecules/project-form'
import ProjectList from '@/components/molecules/project-list'

export default {
  components: {
    Modal,
    ProjectForm,
    ProjectList
  },
  data() {
    return {
      isModalShown: false
    }
  },
  computed: {
    ...mapState(['projects'])
  },
  mounted() {
    this.loadProjects()
  },
  methods: {
    ...mapActions('projects', ['loadProjects']),
    handleModalToggle() {
      this.isModalShown = !this.isModalShown
    }
  }
}
</script>
