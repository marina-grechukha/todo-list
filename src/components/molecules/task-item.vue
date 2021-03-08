<template>
  <div class="px-4 py-2 bg-gray-200 border border-gray-300 rounded" :class="{ 'opacity-50': task.completed }">
    <div class="flex items-center">
      <a href="" class="flex-1" :class="{ 'line-through': task.completed }" @click.prevent="handleCompletionToggle">
        {{ task.name }}
      </a>
      <div class="flex items-center">
        <button class="w-6 h-6 flex items-center justify-center text-gray-500">
          <EditIcon class="w-4 h-4" />
        </button>
        <button class="w-6 h-6 flex items-center justify-center text-red-500">
          <DeleteIcon class="w-4 h-4" />
        </button>
      </div>
    </div>

    <div v-if="task.description" class="text-sm text-gray-500 mt-2">{{ task.description }} {{ task.completed }}</div>
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
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleCompletionToggle() {
      this.task.completed = !this.task.completed
    }
  }
}
</script>
