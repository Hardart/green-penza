<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.16.21/js/components/slider.min.js',
      tagPosition: 'bodyClose',
      tagPriority: 'low',
    },
    // { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.16.21/js/components/slider-parallax.min.js', tagPosition: 'bodyClose', defer: true },
  ],
})
</script>

<template>
  <div class="overflow-hidden lg:max-w-4xl max-w-7xl mx-auto my-24" uk-slider>
    <div class="relative uk-visible-toggle" tabindex="-1">
      <ul class="uk-slider-items flex relative will-change-transform">
        <li class="relative max-w-full flex-none sm:w-1/2 lg:w-1/3" v-for="n in 4">
          <img :src="`images/slider/screen${n + 1}.png`" class="aspect-[16/9]" alt="" />
        </li>
      </ul>
      <a
        class="absolute top-1/2 left-4 -translate-y-1/2 text-white"
        href="#"
        uk-slidenav-previous
        uk-slider-item="previous"
      ></a>
      <a
        class="absolute top-1/2 right-4 -translate-y-1/2 text-white"
        href="#"
        uk-slidenav-next
        uk-slider-item="next"
      ></a>
    </div>
  </div>
</template>

<style>
.uk-icon:not(.uk-preserve) [stroke*='#']:not(.uk-preserve) {
  stroke: currentColor;
}
</style>
