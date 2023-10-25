<template>
  <ul class="flex flex-wrap bg-gray-200/40 dark:bg-neutral-700 max-md:text-sm pl-2 lg:-mx-10 lg:pl-10 py-3 mb-8 items-center rounded-lg select-none">
    <li v-if="isShowHomePath">
      <NuxtLink to="/" class="flex items-center text-green-600 hover:text-green-500 dark:text-green-500 dark:hover:text-green-400"><span class="i-mdi-home text-2xl lg:text-3xl"></span></NuxtLink>
    </li>

    <li v-for="(item, i) in breadcrumbs">
      <span class="mx-2 text-neutral-500" v-if="isShowHomePath || i">-</span>
      <NuxtLink :to="item.link" class="text-green-600 hover:text-green-500" v-if="i < breadcrumbs.length - 1">{{ item.title }}</NuxtLink>
      <span class="text-neutral-500 dark:text-neutral-400" v-else>{{ item.title }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/appStore'
const route = useRoute()
const isShowHomePath = true
const isShowCatalogPath = false
const params = route.path.substring(1).split('/')

const { catalog, productsList } = useAppStore()

const breadcrumbs: Breadcrumbs[] = crumbsBundle().slice(isShowCatalogPath ? 0 : 1)

function getTitle(link: string, index: number): string {
  if (!catalog || !catalog.categories) throw createError({ message: `нет категорий в каталоге` })
  const searchArray = index == 1 ? catalog.categories : productsList
  if (!searchArray) throw createError({ message: `нет совпадений по массиву для "хлебных крошек"` })
  const crumbElement = searchArray.find(element => element.link == link)
  if (!crumbElement) throw createError({ message: `нет совпадений по ссылке для "хлебных крошек"` })
  return crumbElement.title.toLowerCase()
}

function crumbsBundle() {
  let link = ''
  return params.reduce((paramsArray, paramsItem, paramsIndex) => {
    link = `${link}/${paramsItem}`
    const title = !paramsIndex ? 'каталог' : getTitle(link, paramsIndex)
    paramsArray.push({ title, link })
    return paramsArray
  }, [] as Breadcrumbs[])
}
</script>

<style lang="scss"></style>
