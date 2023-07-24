<template>
  <ul class="py-4 xs:pr-4 mb-4 flex justify-center xs:justify-end gap-3 bg-slate-300 rounded-md dark:bg-slate-800/50">
    <li uk-filter-control class="border-r pr-3 border-gray-400 dark:border-gray-400/30"><a class="sort-btn" href="#">Все</a></li>
    <li :uk-filter-control="`filter: [data-cat=${category.slug}]`" v-for="category in catalog.categories">
      <a class="sort-btn" href="#">{{ category.title }}</a>
    </li>
  </ul>
</template>

<script setup lang="ts">
const { catalog } = await useMetadata()
</script>

<style lang="scss"></style>
