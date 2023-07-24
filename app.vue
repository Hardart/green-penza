<template>
  <div class="bg-neutral-200/40 flex flex-col min-h-screen">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '~/store/appStore'
const store = useAppStore()
const { init } = store
init()
</script>
