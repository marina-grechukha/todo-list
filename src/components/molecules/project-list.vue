<template>
  <div class="w-1/2 flex flex-col m-auto space-y-4">
    <pulse-loader :loading="projects.loading" size="2rem" class="flex justify-center my-10" />

    <div
      v-for="project in projects.list"
      :key="project.id"
      class="px-4 py-2 bg-gray-200 border border-gray-300 rounded flex items-center"
    >
      <div class="flex-1">{{ project.name }}</div>
      <div class="space-x-2 flex items-center">
        <button class="w-6 h-6 text-gray-500">
          <EditIcon />
        </button>
        <button class="w-6 h-6 text-red-500">
          <DeleteIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import DeleteIcon from '@/components/atoms/icons/delete'
import EditIcon from '@/components/atoms/icons/edit'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    DeleteIcon,
    EditIcon
  },
  computed: {
    ...mapState(['projects'])
  },
  mounted() {
    this.loadProjects()
  },
  methods: {
    ...mapActions('projects', ['loadProjects'])
  }
}
</script>
