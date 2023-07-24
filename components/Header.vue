<template>
  <Disclosure as="nav" class="bg-emerald-600" v-slot="{ open, close }">
    <div class="relative h-14 sm:h-16 flex flex-1 items-center justify-center lg:items-stretch lg:justify-between mx-auto px-4 lg:px-16">
      <MenuMobileButton @click="initClose(close)" />
      <Logo />
      <div class="hidden items-center lg:flex space-x-3">
        <template v-for="page in pages">
          <component :is="MenuContainer" :catalog="page" v-if="page.categories" />
          <component :is="PageLink" custom-class="uppercase px-3 text-white font-medium hover:bg-emerald-500/50 whitespace-nowrap" active-class="bg-emerald-500/50" :to="page.link" :text="page.title" v-else />
        </template>
      </div>
    </div>
    <MenuMobileContainer :open="open" />
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure } from '@headlessui/vue'
const MenuContainer = resolveComponent('MenuContainer')
const PageLink = resolveComponent('UiCustomNuxtLink')
const { initClose } = useMenu()
const { pages } = await useMetadata()
</script>
