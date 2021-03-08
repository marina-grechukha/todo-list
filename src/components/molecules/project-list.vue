<template>
  <div class="w-1/2 flex flex-col m-auto space-y-4 mb-4">
    <pulse-loader v-if="projects.loading" :loading="true" size="2rem" class="flex justify-center my-10" />

    <div v-if="!projects.list.length && !projects.loading" class="alert info">
      No projects. Just press the button above to create a new one.
    </div>

    <ProjectItem
      v-for="project in projects.list"
      :key="project.id"
      :project="project"
      @delete="handleDeletionConfirm"
    />

    <Modal v-if="isDeleteConfirmationShown" @close="handleConfirmationToggle">
      <template #header>Delete Project</template>

      <p class="mb-4">Do you really want to delete project "{{ selectedProject.name }}"?</p>

      <div class="flex flex-row justify-end space-x-2">
        <button class="btn gray w-32" @click="handleConfirmationToggle">Cancel</button>
        <button class="btn red w-32" @click="handleDelete">Delete</button>
      </div>
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import ProjectItem from '@/components/molecules/project-item'
import Modal from '@/components/molecules/modal'

export default {
  components: {
    Modal,
    ProjectItem
  },
  data() {
    return {
      isDeleteConfirmationShown: false,
      selectedProject: null
    }
  },
  computed: {
    ...mapState(['projects'])
  },
  mounted() {
    this.loadProjects()
  },
  methods: {
    ...mapActions('projects', ['loadProjects', 'deleteProject']),
    handleConfirmationToggle() {
      this.isDeleteConfirmationShown = !this.isDeleteConfirmationShown
    },
    handleDeletionConfirm(project) {
      this.selectedProject = project
      this.handleConfirmationToggle()
    },
    handleDelete() {
      this.deleteProject(this.selectedProject.id)
      this.handleConfirmationToggle()
    }
  }
}
</script>
