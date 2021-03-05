<template>
  <div>
    <button class="block btn green mx-auto w-40" @click="handleModalToggle">Add Project</button>

    <Modal v-if="isModalShown" @close="handleModalToggle">
      <template #header>Add Project</template>

      <ProjectForm @close="handleModalToggle" />
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/molecules/modal'
import ProjectForm from '@/components/molecules/project-form'

export default {
  components: {
    Modal,
    ProjectForm
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
