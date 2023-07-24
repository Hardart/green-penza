<template>
  <div class="overflow-hidden lg:max-w-4xl max-w-7xl mx-auto my-24" uk-slider>
    <div class="relative uk-visible-toggle" tabindex="-1">
      <ul class="uk-slider-items flex relative will-change-transform">
        <li class="relative max-w-full flex-none sm:w-1/2 lg:w-1/3" v-for="image in list"><img :src="image" class="aspect-[16/9]" alt="" /></li>
      </ul>
      <a class="absolute top-1/2 left-4 -translate-y-1/2" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
      <a class="absolute top-1/2 right-4 -translate-y-1/2" href="#" uk-slidenav-next uk-slider-item="next"></a>
    </div>
  </div>
</template>

<script setup lang="ts">
import image1 from '~/assets/images/slider/screen1.png'
import image2 from '~/assets/images/slider/screen2.png'
import image3 from '~/assets/images/slider/screen3.png'
import image4 from '~/assets/images/slider/screen4.png'
const list = [image1, image2, image3, image4, image1]

useHead({
  script: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.16.21/js/components/slider.min.js', tagPosition: 'bodyClose' },
    // { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.16.21/js/components/slider-parallax.min.js', tagPosition: 'bodyClose', defer: true },
  ],
})
</script>

<style>
.uk-icon:not(.uk-preserve) [stroke*='#']:not(.uk-preserve) {
  stroke: currentColor;
}
.wit {
  width: calc(100% * 1 / 3);
}
</style>
