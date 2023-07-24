<template>
  <div class="absolute p-5 lg:p-10 grid inset-0 place-content-end justify-center">
    <div class="flex gap-2 items-end">
      <h3 class="font-hero mb-0 text-white text-xl opacity-0 translate-y-10">Сделаем ваш праздник</h3>
      <h3 class="text-emerald-300 mb-0 font-hero text-2xl font-bold opacity-0 translate-y-10">живым</h3>
    </div>
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp()
onMounted(() => {
  $gsap.to('.font-hero', { opacity: 1, duration: 3, delay: 0.3, y: 0, stagger: 0.3, ease: 'elastic.out(1, 0.3)' })
})
</script>

<style lang="scss"></style>
