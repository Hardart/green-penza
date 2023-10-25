<template>
  <div class="adventage-trigger overflow-hidden flex flex-col items-center dark:text-teal-100 bg-gray-200/80 dark:bg-neutral-700 rounded-2xl p-4 lg:p-24 shadow-md z-10">
    <h3 class="adventage opacity-0 top-48 relative font-bold mt-10 lg:mt-4 text-center">Достоинства нашей компании</h3>
    <div class="grid md:grid-cols-3 max-w-7xl lg:gap-x-2 xl:gap-x-10">
      <div class="adventage relative opacity-0 top-48 text-center sm:max-md:text-left sm:max-md:flex" v-for="card in adventages">
        <div class="flex justify-center sm:max-md:items-center pt-10 sm:max-md:pt-0 sm:max-md:pr-6">
          <!-- <component :is="card.icon" class="block h-24 w-24" aria-hidden="true" /> -->
          <span :class="card.icon" class="block h-24 w-24 bg-stone-500" aria-hidden="true"></span>
        </div>
        <div class="card-body px-0 md:p-4">
          <h4 class="mb-5 sm:max-md:mb-2 font-medium text-lg lg:text-2xl">{{ card.title }}</h4>
          <p class="leading-normal text-sm">{{ card.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()
onMounted(() => {
  $gsap.to('.adventage', {
    scrollTrigger: {
      trigger: '.adventage-trigger',
      // pin: true, // pin the trigger element while active
      start: 'top 70%', // when the top of the trigger hits the top of the viewport
      end: '+=600', // end after scrolling 500px beyond the start
      // toggleActions: 'play restart play none',
    },
    top: 0,
    opacity: 1,
    stagger: 0.1,
    duration: 1,
    ease: 'power2.out',
  })
})
const adventages = [
  {
    id: 1,
    title: 'Высокое качество',
    text: 'Выращиваем и поставляем только качественный районированный посадочный материал с высокой приживаемостью. Перед поставкой товар проходит тщательную проверку',
    icon: 'i-game-icons-three-leaves',
  },
  {
    id: 2,
    title: 'Ответственность',
    text: 'Мы дорожим каждым клиентом, поэтому в наших интересах, чтобы товар был надежно упакован и вовремя доставлен до места назначения, в независимости от величины партии товара',
    icon: 'i-game-icons-hand-truck',
  },
  {
    id: 3,
    title: 'Разумные цены',
    text: 'Наши цены и система скидок вас приятно удивят. Для постоянных клиентов и крупных оптовых покупателей существуют дополнительные условия и система скидок.',
    icon: 'i-game-icons-money-stack',
  },
]
</script>

<style lang="scss"></style>
