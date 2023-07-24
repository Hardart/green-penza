<template>
  <MenuButton
    class="relative flex justify-between w-full rounded-md"
    :class="[$route.path.includes(`/products/${categorySlug}`) ? 'after:absolute after:bg-emerald-600 after:w-1 after:h-full after:-left-2 after:rounded-lg' : '']"
  >
    {{ categoryTitle }}

    <ChevronRightIcon class="ml-1 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100" aria-hidden="true" />
  </MenuButton>
</template>

<script setup lang="ts">
import { MenuButton } from '@headlessui/vue'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'

defineProps<{
  categoryTitle: string
  categorySlug: string
}>()
</script>

<style lang="scss"></style>
