<template>
  <div>
    <div class="text-center font-extrabold text-2xl mb-4">Projects</div>

    <button class="block btn green mx-auto w-1/2 mb-4" @click="handleModalToggle">Add Project</button>

    <ProjectList />

    <Modal v-if="isModalShown" @close="handleModalToggle">
      <template #header>Add Project</template>
      <ProjectForm @close="handleModalToggle" />
    </Modal>
  </div>
</template>

<script>
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
  methods: {
    handleModalToggle() {
      this.isModalShown = !this.isModalShown
    }
  }
}
</script>
