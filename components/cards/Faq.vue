<template>
  <div class="[&>*]:px-5 [&>*]:rounded-md">
    <h4 class="py-2 bg-neutral-300 dark:bg-neutral-700/30">{{ title }}</h4>
    <p class="py-4 bg-white dark:bg-neutral-600/60 shadow-sm" v-html="text" v-if="htmlText"></p>
    <p class="py-4 bg-white dark:bg-neutral-600/60 shadow-sm" v-else>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  text: string
  htmlText?: boolean
}>()
</script>

<style lang="scss"></style>
