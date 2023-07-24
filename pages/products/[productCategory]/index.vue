<template>
  <NuxtLayout name="main">
    <Section>
      <Breadcrumbs />
      <div class="prose prose-h1:dark:text-slate-300">
        <h1 class="mb-2 first-letter:uppercase">{{ categoryTitle }}</h1>
      </div>
      <div class="js-filter mt-6 grid grid-cols-1 gap-x-4 gap-y-4 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 md:gap-x-6" :class="products.length > 3 ? 'xl:grid-cols-4' : ''">
        <CardsProduct v-for="product in products" :key="product.id" :product="product" />
      </div>
    </Section>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const { productCategory } = route.params
const { products, categoryTitle } = await useProducts(productCategory as string)

useHead({
  title: categoryTitle,
})
</script>
