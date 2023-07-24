<template>
  <div class="trig flex flex-col items-center rounded-2xl lg:p-16 overflow-hidden pb-4 mb-4">
    <SectionsTitle class="pin-text relative -top-36 mt-10 lg:mt-4">Основные продукты</SectionsTitle>
    <div class="md:flex md:justify-center max-w-6xl gap-x-4 lg:gap-x-8 xl:gap-x-7 w-full max-md:space-y-4 items-center">
      <div
        ref="cards"
        class="card card-default md:even:w-3/6 md:odd:w-2/5 opacity-0 shadow-md flex-col overflow-hidden sm:max-md:flex sm:max-md:flex-row h-auto"
        :data-id="product.id"
        v-for="product in products"
      >
        <div class="sm:max-md:w-1/3 flex flex-col items-center sm:max-md:justify-center py-6 sm:max-md:px-6 space-y-5">
          <img :src="product.image" alt="" class="block h-24 w-24 rounded-full outline outline-4 outline-offset-4 dark:outline-slate-200/30 outline-slate-400" />
          <h4 class="text-center">{{ product.title }}</h4>
        </div>
        <div class="card-body relative md:p-4 xl:p-8 sm:max-md:pl-1">
          <div class="absolute left-0 -top-1 h-1 w-full bg-green-600 sm:max-md:hidden"></div>
          <div v-for="content in product.data" class="mb-2 md:mb-3 last:mb-0">
            <div class="flex text-sm lg:text-md xl:text-lg">
              <div class="text-left grow overflow-hidden" uk-lead>
                <span>{{ content.size }}</span>
              </div>
              <div class="pl-3 font-medium">{{ content.price }}р</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()
const cards: Ref<null | HTMLElement[]> = ref(null)

onMounted(() => {
  if (cards.value == null) return console.error('Нет элементов для анимации')

  cards.value.forEach(el => {
    el.classList.remove('opacity-0')
  })
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: '[data-id="2"]',
      // pin: true, // pin the trigger element while active
      start: 'top bottom', // when the top of the trigger hits the top of the viewport
      end: '+=500', // end after scrolling 500px beyond the start
      scrub: 0.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    },
  })
  tl.from('[data-id="2"]', { scale: 0.3, y: 105, autoAlpha: 0 })
    .from('[data-id="1"]', { x: -200, autoAlpha: 0 }, '-=0.3')
    .from('[data-id="3"]', { x: 200, autoAlpha: 0 }, '-=0.5')
    .to('.pin-text', {
      scrollTrigger: {
        trigger: '.pin-text',
        // pin: true, // pin the trigger element while active
        start: '40px 80%', // when the top of the trigger hits the top of the viewport
        end: '+=500', // end after scrolling 500px beyond the start
        scrub: true,
      },
      top: 0,
    })
})
const products = [
  {
    id: 1,
    title: 'Ель',
    data: [
      { size: '1.5 - 1.75 м', price: 1000 },
      { size: '1.75 - 2 м', price: 1300 },
      { size: '2 - 2.25 м', price: 1600 },
    ],
    image: '/images/main/el.webp',
  },
  {
    id: 2,
    title: 'Пихта Нордман',
    data: [
      { size: '1.25 - 1.5 м', price: 5500 },
      { size: '1.5 - 1.75 м', price: 8500 },
      { size: '1.75 - 2 м', price: 10500 },
      { size: '2 - 2.25 м', price: 14500 },
      { size: '2.25 - 2.5 м', price: 16500 },
      { size: '2.5 - 3 м', price: 25000 },
    ],
    image: '/images/main/pihta.webp',
  },
  {
    id: 3,
    title: 'Сосна',
    data: [
      { size: '1.5 - 1.75 м', price: 1000 },
      { size: '1.75 - 2 м', price: 1300 },
      { size: '2 - 2.25 м', price: 1600 },
    ],
    image: '/images/main/sosna.webp',
  },
]
</script>

<style>
[uk-lead] span::after {
  display: inline-block;
  margin-left: 15px;
  width: 0;
  content: '.......................................................................................';
  letter-spacing: 2px;
  white-space: nowrap;
  opacity: 0.5;
}
</style>
