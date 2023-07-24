<template>
  <div class="absolute left-full top-0 flex justify-center w-16 pt-4">
    <button type="button" class="rounded-full p-1 text-gray-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-gray-800" @click="closeMenu">
      <span class="sr-only">View notifications</span>
      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline'
const { closeMenu } = useMenu()
</script>

<style lang="scss"></style>
