<template>
  <div>
    <div v-if="project.id && !tasks.loading">
      <h2 class="text-center font-extrabold text-2xl mb-4">{{ project.name }}</h2>

      <button class="block btn green mx-auto w-1/2 mb-4">Add Task</button>

      <TaskList />
    </div>

    <pulse-loader v-else :loading="true" size="2rem" class="flex justify-center my-10" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import TaskList from '@/components/molecules/task-list'

export default {
  components: {
    TaskList
  },
  computed: {
    ...mapState(['tasks']),
    ...mapGetters('projects', ['getProjectById']),
    project() {
      return this.getProjectById(this.$route.params.id)
    }
  },
  mounted() {
    this.loadProjectById(this.$route.params.id)
    this.loadTasksByProjectId(this.$route.params.id)
  },
  methods: {
    ...mapActions('projects', ['loadProjectById']),
    ...mapActions('tasks', ['loadTasksByProjectId'])
  }
}
</script>
