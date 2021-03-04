<template>
  <transition name="modal">
    <div class="fixed z-40 inset-0 bg-black bg-opacity-50 transition-opacity delay-300 ease-in-out">
      <div class="h-full flex">
        <div class="w-1/3 bg-white m-auto rounded-md shadow-lg">
          <div class="p-4 font-bold text-xl bg-gray-100 rounded-t-md text-gray-500 flex items-center">
            <div class="flex-1">
              <slot name="header" />
            </div>

            <button class="w-6 h-6" @click="handleClose">
              <CloseIcon />
            </button>
          </div>

          <div class="px-4 py-2 border-t border-b border-gray-200">
            <slot />
          </div>

          <div class="px-4 py-2 bg-gray-100 rounded-b-md flex flex-row justify-end space-x-2">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import CloseIcon from '@/components/atoms/icons/close'

export default {
  components: {
    CloseIcon
  },
  methods: {
    handleClose() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped></style>
