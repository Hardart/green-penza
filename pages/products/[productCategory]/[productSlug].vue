<template>
  <NuxtLayout name="main">
    <Section>
      <Breadcrumbs />
      <Product :product="product" />
    </Section>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const { productCategory, productSlug } = route.params
const product = await useProduct(productCategory, productSlug)
</script>

<style lang="scss"></style>
