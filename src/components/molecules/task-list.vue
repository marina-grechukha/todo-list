<template>
  <div class="w-1/2 flex flex-col m-auto">
    <div v-if="!tasks.list.length && !tasks.loading" class="alert info">
      No tasks. Just press the button above to create a new one.
    </div>

    <TaskItem v-for="task in tasks.list" :key="task.id" :task="task" class="mb-4" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TaskItem from '@/components/molecules/task-item'

export default {
  components: {
    TaskItem
  },
  computed: {
    ...mapState(['tasks'])
  }
}
</script>
