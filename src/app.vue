<template>
  <div id="app">
    <component :is="template">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  computed: {
    template() {
      return `${this.$route.meta.template || 'blank'}-template`
    }
  }
}
</script>
