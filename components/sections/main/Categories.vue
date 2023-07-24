<template>
  <Section class="mb-8">
    <SectionsTitle>Категории продуктов</SectionsTitle>
    <div class="grid grid-cols-3 gap-x-3 lg:gap-x-6">
      <NuxtLink
        v-for="category in categories"
        :to="category.link"
        class="relative overflow-hidden rounded-2xl shadow-lg transition-shadow lg:hover:shadow-xl duration-300 shadow-black/40 lg:hover:shadow-black/30 group"
      >
        <h4 class="absolute text-white font-medium bottom-0 opacity-0 mx-auto left-1/2 -translate-x-1/2 group-hover:-translate-y-8 group-hover:opacity-100 transition-all duration-500">{{ category.title }}</h4>
        <img :src="category.img" alt="" />
      </NuxtLink>
    </div>
  </Section>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/appStore'
const { catalog } = useAppStore()
const metaCategories = await useCategories<Category[]>()
const categories = metaCategories.map(category => {
  const categoryMeta: CategoryMetaData | undefined = catalog?.categories?.find(metaData => metaData.slug == category.slug)
  return { ...categoryMeta, img: category.img }
})
</script>

<style lang="scss"></style>
