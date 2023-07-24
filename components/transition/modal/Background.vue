<template>
<!-- Wrap your backdrop in a `TransitionChild`. -->
<TransitionChild
  class="fixed inset-0 bg-neutral-950/90"
  enter="duration-300 ease-out"
  enter-from="opacity-0"
  enter-to="opacity-100"
  leave="duration-200 ease-in"
  leave-from="opacity-100"
  leave-to="opacity-0"
>

</TransitionChild>
</template>
 
<script setup lang='ts'>
import { TransitionChild } from '@headlessui/vue'
</script>
 
<style lang='scss'></style>