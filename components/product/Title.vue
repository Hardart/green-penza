<template>
  <h1 class="text-3xl max-sm:text-center max-lg:mb-4 lg:text-5xl font-medium max-sm:order-first">
    {{ title }} <span v-if="type">({{ type }})</span>
  </h1>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  type?: string
}>()
</script>

<style lang="scss"></style>
