<template>
  <Menu as="div" class="relative inline-block" v-slot="{ close }">
    <MenuCatalogButton :title="catalog.title" @click="initClose(close)" />
    <TransitionMenuItems>
      <MenuItems class="z-50 absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <MenuList :categories="catalog.categories" />
      </MenuItems>
    </TransitionMenuItems>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuItems } from '@headlessui/vue'
defineProps<{
  catalog: MetaData
}>()
const { initClose } = useMenu()
</script>
