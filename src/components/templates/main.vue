<template>
  <div class="px-4 mx-auto max-w-5xl">
    <Navigation class="mb-4" />

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
