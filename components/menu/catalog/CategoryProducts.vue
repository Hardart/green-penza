<template>
  <MenuItems class="absolute w-60 top-0 left-full py-1 ml-2 -mt-1 bg-white z-10 divide-gray-100 rounded-md origin-top-right divide-y">
    <div class="px-1 py-1" v-for="product in products">
      <MenuItem as="ul">
        <UiCustomNuxtLink :to="product.link" :text="product.title" custom-class="hover:bg-emerald-500/20 px-3" active-class="bg-emerald-500 hover:!bg-emerald-500 text-white " />
      </MenuItem>
    </div>
  </MenuItems>
</template>

<script setup lang="ts">
import { MenuItems, MenuItem } from '@headlessui/vue'

defineProps<{
  products: MetaBase[]
}>()
</script>

<style lang="scss"></style>
