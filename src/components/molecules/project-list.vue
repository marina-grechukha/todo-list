<template>
  <div class="w-1/2 flex flex-col m-auto">
    <div v-if="!projects.list.length && !projects.loading" class="alert info">
      No projects. Just press the button above to create a new one.
    </div>

    <ProjectItem
      v-for="project in projects.list"
      :key="project.id"
      :project="project"
      class="mb-4"
      @edit="handleEdit"
      @delete="handleDeletionConfirm"
    />

    <Modal v-if="isEditFormShown" @close="handleEditFormToggle">
      <template #header>Edit Project</template>
      <ProjectForm :project="selectedProject" @close="handleEditFormToggle" />
    </Modal>

    <Modal v-if="isDeleteConfirmationShown" @close="handleConfirmationToggle">
      <template #header>Delete Project</template>

      <p class="mb-4">
        Do you really want to delete project <strong>"{{ selectedProject.name }}"</strong>?
      </p>

      <div class="flex flex-row justify-end space-x-2">
        <button class="btn gray w-32" @click="handleConfirmationToggle">Cancel</button>
        <button class="btn red w-32" @click="handleDelete">Delete</button>
      </div>
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import Modal from '@/components/molecules/modal'
import ProjectItem from '@/components/molecules/project-item'
import ProjectForm from '@/components/molecules/project-form'

export default {
  components: {
    Modal,
    ProjectItem,
    ProjectForm
  },
  data() {
    return {
      isDeleteConfirmationShown: false,
      isEditFormShown: false,
      selectedProject: null
    }
  },
  computed: {
    ...mapState(['projects'])
  },
  methods: {
    ...mapActions('projects', ['deleteProject']),
    handleEditFormToggle() {
      this.isEditFormShown = !this.isEditFormShown
    },
    handleConfirmationToggle() {
      this.isDeleteConfirmationShown = !this.isDeleteConfirmationShown
    },
    handleEdit(project) {
      this.selectedProject = project
      this.handleEditFormToggle()
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
