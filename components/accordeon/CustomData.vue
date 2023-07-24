<template>
  <ul class="max-w-4xl w-full rounded-2xl overflow-hidden space-y-1 shadow" uk-accordion>
    <li class="w-full open:bg-slate-300" v-for="(item, i) in items">
      <div class="uk-accordion-title flex bg-emerald-500">
        <a class="py-3 px-5 sm:text-lg font-bold flex-1 flex items-center justify-between" href="#">
          {{ item.title }}
          <ChevronRightIcon class="h-5 w-5 transition-transform duration-150" />
        </a>
      </div>
      <div class="py-3 px-5 uk-accordion-content bg-white/50 space-y-4" v-if="item.htmlBody" v-html="item.htmlBody"></div>
      <div class="py-3 px-5 uk-accordion-content bg-white/50 space-y-4" v-else>
        <p class="max-sm:text-sm">{{ item.body }}</p>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/outline'

defineProps<{
  items: AccordeonItem[]
}>()
</script>
