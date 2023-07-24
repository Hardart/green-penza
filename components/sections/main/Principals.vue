<template>
  <div class="flex flex-col items-center bg-white rounded-2xl p-4 lg:p-24 mb-2 shadow-md">
    <SectionsTitle>Основные виды деятельности</SectionsTitle>
    <ul id="principals" class="space-y-4 max-lg:mb-6">
      <li class="pin text-sm md:text-md lg:text-lg font-medium px-6 xl:px-10 py-4 bg-gray-100 rounded-md shadow">Выращивание высококачественного посадочного материала с открытой корневой системой</li>
      <li class="pin text-sm md:text-md lg:text-lg font-medium px-6 xl:px-10 py-4 bg-gray-100 rounded-md shadow">Выращивание высококачественного посадочного материала с закрытой корневой системой</li>
      <li class="pin text-sm md:text-md lg:text-lg font-medium px-6 xl:px-10 py-4 bg-gray-100 rounded-md shadow">Извлечение семян из шишек с последующей высокотехнологичной переработкой</li>
      <li class="pin text-sm md:text-md lg:text-lg font-medium px-6 xl:px-10 py-4 bg-gray-100 rounded-md shadow">Заготовка и продажа новогодних сосен и елей любых размеров</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()
onMounted(() => {
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: '#principals',
      // pin: true, // pin the trigger element while active
      start: '40px 70%', // when the top of the trigger hits the top of the viewport
      end: '+=500', // end after scrolling 500px beyond the start
    },
  })
  tl.from('.pin', { scale: 0.3, y: 105, autoAlpha: 0, stagger: 0.2, duration: 2, ease: 'elastic.out(1, 1)' })
  // tl.fromTo('[data-id="2"]', { opacity: 0 }, { opacity: 1 })
})
</script>

<style lang="scss"></style>
