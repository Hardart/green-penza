<template>
  <table class="mt-8 w-full sm:w-2/3 border-collapse shadow rounded-xl overflow-hidden table-auto">
    <thead>
      <tr class="bg-emerald-300">
        <th class="py-4 px-8 text-center" v-for="item in head">{{ item }}</th>
      </tr>
    </thead>
    <tbody>
      <tr class="text-center">
        <td class="p-4">{{ features.класс }}</td>
        <td class="p-4">{{ features.вес }} кг</td>
        <td class="p-4">{{ features.цена }} р</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
interface ProductFeatures {
  класс: number
  вес: number
  цена: number
}
const props = defineProps<{
  features: ProductFeatures
}>()
const head = Object.keys(props.features) as Array<keyof ProductFeatures>
</script>

<style lang="scss"></style>
