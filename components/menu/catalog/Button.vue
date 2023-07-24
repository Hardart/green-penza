<template>
  <div>
    <MenuButton
      v-slot="{ open }"
      class="uppercase px-3 py-2 rounded-lg inline-flex text-sm font-medium text-white hover:bg-emerald-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 [&:hover>svg]:text-white"
      :class="{ 'bg-emerald-500/50': $route.path.includes('/products/') }"
    >
      {{ title }}
      <ChevronDownIcon class="ml-1 -mr-1 h-5 w-5 text-violet-200" :class="open ? 'text-white' : ''" aria-hidden="true" />
    </MenuButton>
  </div>
</template>

<script setup lang="ts">
import { MenuButton } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
defineProps<{
  title: string
}>()
</script>

<style lang="scss"></style>
