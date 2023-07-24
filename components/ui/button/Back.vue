<template>
  <button type="button" class="rounded-full p-1 text-gray-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-800" @click="backAction">
    <ArrowLongLeftIcon class="h-6 w-6" aria-hidden="true" />
  </button>
</template>

<script setup lang="ts">
import { ArrowLongLeftIcon } from '@heroicons/vue/24/outline'
defineProps<{
  backAction: any
}>()
</script>

<style lang="scss"></style>
