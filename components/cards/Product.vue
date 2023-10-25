<template>
  <div class="group card" :data-cat="category.slug">
    <div class="card-header">
      <NuxtLink :to="link">
        <div class="card-media cursor-pointer">
          <img v-if="img" :src="`/images/products/${category.slug}/${img}.webp`" :alt="slug" />
          <div v-else class="uppercase font-black text-2xl text-neutral-300 grid place-items-center h-full text-center">Нет картинки</div>
        </div>
      </NuxtLink>
    </div>
    <div class="p-4">
      <div class="bg-orange-400/70 text-white text-xs px-3 py-0.5 absolute top-2 right-2 rounded-full" v-if="showCategory">{{ category.title }}</div>
      <NuxtLink :to="link">
        <h4 class="group-hover:text-green-600 text-lg text-center font-semibold">{{ title }}</h4>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ProductCard {
  showCategory?: boolean
  product: ProductWithLink
}
const props = withDefaults(defineProps<ProductCard>(), {
  showCategory: false,
})

const { title, slug, link, category, img } = props.product
</script>

<style lang="scss"></style>
