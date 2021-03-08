<template>
  <div class="px-4 py-2 bg-gray-200 border border-gray-300 rounded">
    <div class="flex items-center">
      <div class="flex-1">{{ project.name }}</div>
      <div class="flex items-center">
        <button class="w-6 h-6 flex items-center justify-center text-gray-500" @click="handleEdit(project)">
          <EditIcon class="w-4 h-4" />
        </button>
        <button class="w-6 h-6 flex items-center justify-center text-red-500" @click="handleDelete(project)">
          <DeleteIcon class="w-4 h-4" />
        </button>
      </div>
    </div>

    <div v-if="project.description" class="text-sm text-gray-500 mt-2">
      {{ project.description }}
    </div>
  </div>
</template>

<script>
import DeleteIcon from '@/components/atoms/icons/delete'
import EditIcon from '@/components/atoms/icons/edit'

export default {
  components: {
    DeleteIcon,
    EditIcon
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleDelete(project) {
      this.$emit('delete', project)
    },
    handleEdit(project) {
      this.$emit('edit', project)
    }
  }
}
</script>
