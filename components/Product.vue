<template>
  <div class="flex max-sm:flex-col">
    <div class="flex flex-col sm:block">
      <ProductImage class="sm:w-56 md:w-72 lg:w-80 xl:w-96" :image-title="img" :category-slug="category.slug" v-if="img" />
      <ProductTitle :title="title" :type="type" />
      <h6 class="my-4 text-lg font-bold" v-if="subtitle">{{ subtitle }}</h6>
      <p class="text-sm md:text-base xl:text-lg">{{ text }}</p>
    </div>
  </div>

  <h5 class="mt-16 text-xl font-medium" v-if="height">Сеянцы с закрытой корневой системой высотой {{ height?.min }}-{{ height?.max }} см.</h5>
  <p class="my-4 text-xl" v-if="price"><span class="font-bold">Цена:</span> {{ price }}р/шт. без стоимости кассет.</p>
  <ProductFeatures v-if="features" :features="features" />
  <OrderInfo />
</template>

<script setup lang="ts">
const props = defineProps<{
  product: Product
}>()
const { title, subtitle, features, text, slug, price, height, type, img, category } = props.product
</script>

<style lang="scss"></style>
