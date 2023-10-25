<template>
  <NuxtLink to="/" class="flex items-center">
    <div class="flex flex-shrink-0 items-center">
      <img class="w-auto block" :class="Logo[size]" src="/logo.svg" alt="Your Company" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
enum Logo {
  xs = 'h-7',
  sm = 'h-8',
  md = 'h-9',
  lg = 'h-10',
  xl = 'h-11',
  xxl = 'h-12',
}
withDefaults(
  defineProps<{
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  }>(),
  {
    size: 'xs',
  }
)
</script>
