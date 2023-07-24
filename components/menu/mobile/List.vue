<template>
  <div class="flex flex-grow bg-neutral-300 pt-12 overflow-hidden">
    <nav class="relative w-full transition-[left] will-change-[position] duration-300" :class="[showSub ? '-left-[100%]' : 'left-0']">
      <ul class="absolute p-4 w-full flex flex-col gap-y-4 text-white">
        <template v-for="page in pages">
          <component :is="MenuMobilePageButton" :menuItem="page" :isLink="page.categories ? false : true" @open-catalog="toggleSubState" @on-close="toPage" />
        </template>
      </ul>

      <div class="absolute p-4 left-[100%] w-full">
        <UiButtonBack :backAction="toCategories" class="-top-8 absolute" />
        <AccordeonSubMenu />
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
const { pages } = await useMetadata()
const MenuMobilePageButton = resolveComponent('MenuMobilePageButton')

const showSub = ref(false)
const toggleSubState = () => (showSub.value = !showSub.value)
const toCategories = () => (showSub.value = false)
const toPage = (navigate: () => void) => {
  navigate()
}
</script>

<style lang="scss"></style>
