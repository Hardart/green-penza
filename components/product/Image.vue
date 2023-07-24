<template>
  <div class="sm:float-right max-w-md mx-auto mb-2 sm:ml-2 md:ml-6 rounded-xl shadow-lg overflow-hidden">
    <img :src="`/images/products/${categorySlug}/${imageTitle}.webp`" class="object-center object-cover h-full w-full" :alt="imageTitle" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageTitle: string
  categorySlug: string
}>()
</script>

<style lang="scss"></style>
