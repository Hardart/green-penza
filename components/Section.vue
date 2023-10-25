<template>
  <div class="section" :class="[Color[color || 'default'], PaddingY[padding || 'default']]">
    <div class="max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto lg:px-8 z-10 relative">
      <slot />
    </div>
    <div class="absolute inset-0 overflow-hidden" v-if="img"><img class="object-fill w-full" :src="`images/elements/${img}`" alt="" /></div>
  </div>
</template>

<script setup lang="ts">
enum Color {
  default = 'section-default',
  primary = 'section-primary',
  secondary = 'section-secondary',
  muted = 'section-muted',
}

enum PaddingY {
  large = 'py-12 md:py-16 lg:py-20',
  default = 'py-8 md:py-14 lg:py-16',
  small = 'py-4 md:py-6 lg:py-8',
  none = '',
}
const props = defineProps<{
  color?: 'primary' | 'secondary' | 'muted'
  padding?: 'none' | 'small' | 'large'
  img?: string
  preload?: boolean
}>()

useHead({
  link: props.preload
    ? [
        {
          rel: 'preload',
          as: 'image',
          href: `/images/elements/${props.img}`,
        },
      ]
    : [],
})
</script>
<!-- :style="[img ? `background-image: url(images/elements/${img})` : '']" -->
