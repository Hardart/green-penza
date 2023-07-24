<template>
  <ul class="flex w-full flex-col gap-y-4 text-white">
    <li class="rounded-lg overflow-hidden space-y-1" role="link" uk-accordion>
      <div class="bg-emerald-600/30 overflow-hidden rounded-lg" v-for="category in catalog.categories">
        <a class="uk-accordion-title rounded-lg flex py-2 px-4 bg-emerald-700/70" href="#">{{ category.title }} </a>
        <ul class="px-3 py-4 space-y-3 uk-accordion-content">
          <UiCustomNuxtLink
            v-for="product in category.products"
            :to="product.link"
            :text="product.title"
            active-class="!bg-emerald-600/60 hover:bg-emerald-500 text-white"
            custom-class="bg-neutral-200/50 px-3"
          />
        </ul>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
const { catalog } = await useMetadata()
</script>

<style lang="scss"></style>
