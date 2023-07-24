<template>
  <div class="px-1 py-1 w-full" v-for="category in categories">
    <Menu as="div" class="relative flex items-center rounded-md px-3 py-2 text-sm">
      <MenuCatalogCategoryButton :category-title="category.title" :category-slug="category.slug" />
      <MenuCatalogCategoryProducts :products="category.products" />
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { Menu } from '@headlessui/vue'
defineProps<{
  categories: CategoryMetaData[] | undefined
}>()
</script>
