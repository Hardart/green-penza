<template>
  <NuxtLayout name="main">
    <Section padding="small">
      <h1 class="m-0">Каталог</h1>
    </Section>
    <Section padding="small">
      <div uk-filter="target: .js-filter">
        <Filter />
        <div>
          <div class="js-filter mt-6 grid grid-cols-1 gap-x-4 gap-y-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-6">
            <CardsProduct v-for="product in products" :product="product" />
          </div>
        </div>
      </div>
    </Section>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  script: [{ src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.16.19/js/components/filter.min.js', tagPosition: 'bodyClose', defer: true }],
})
definePageMeta({
  middleware: [
    function () {
      return navigateTo('/')
    },
  ],
})
const { products } = await useProducts()
</script>

<style lang="scss"></style>
