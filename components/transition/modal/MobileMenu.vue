<template>
  <TransitionChild
    class="flex fixed inset-0"
    enter="transition ease-out duration-200"
    enter-from="transform -translate-x-full"
    enter-to="transform translate-x-0"
    leave="transition ease-in duration-150"
    leave-from="transform translate-x-0"
    leave-to="transform -translate-x-full"
  >
    <slot />
  </TransitionChild>
</template>

<script setup lang="ts">
import { TransitionChild } from '@headlessui/vue'
</script>

<style lang="scss"></style>
