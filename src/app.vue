<template>
  <div id="app">
    <component :is="template">
      <transition appear name="fade" mode="out-in">
        <router-view />
      </transition>
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
