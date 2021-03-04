<template>
  <div>
    <Navigation />
    <slot />
  </div>
</template>

<script>
import Navigation from '@/components/molecules/the-navigation'

export default {
  components: {
    Navigation
  }
}
</script>
