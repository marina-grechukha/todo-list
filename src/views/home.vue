<template>
  <div>
    <button class="block btn green mx-auto w-40" @click="handleModalToggle">Add Project</button>

    <Modal v-if="isModalShown" @close="handleModalToggle">
      <template #header>Add Project</template>

      content

      <template #footer>
        <button class="btn gray w-32" @click="handleModalToggle">Cancel</button>
        <button class="btn green w-32">Add</button>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/molecules/modal'

export default {
  components: {
    Modal
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
