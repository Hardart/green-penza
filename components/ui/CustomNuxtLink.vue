<template>
  <NuxtLink custom v-slot="{ navigate, isActive }" :to="to">
    <li
      role="link"
      @click="toPage(navigate)"
      :class="[isActive ? activeClass : 'text-gray-900', customClass]"
      class="cursor-pointer group flex w-full items-center rounded-md px-2 py-2 text-sm text-left sub-link"
    >
      {{ text }}
    </li>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  activeClass: string
  customClass?: string
  text: string
  to: string
}>()
const { toPage } = useMenu()
</script>

<style lang="scss"></style>
