<template>
  <NuxtLink :to="link" custom v-slot="{ navigate, isActive }" v-if="isLink">
    <li role="link" @click="toPage(navigate)" class="mobile-page-link" :class="[isActive ? 'bg-emerald-600/50' : 'bg-emerald-600/30']">
      {{ title }}
    </li>
  </NuxtLink>
  <li v-else class="mobile-page-link" :class="[$route.path.includes('/products/') ? 'bg-emerald-600/50' : 'bg-emerald-600/30']" @click="$emit('openCatalog')">
    {{ title }}
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  menuItem: MetaBase
  isLink?: boolean
}>()
const { title, link } = props.menuItem
defineEmits<{
  (event: 'onClose', cb: any): void
  (event: 'openCatalog'): void
}>()
const { toPage } = useMenu()
</script>
