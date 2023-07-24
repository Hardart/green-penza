// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      script: [{ src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.16.22/js/uikit-core.min.js' }],
    },
  },
  nitro: {
    prerender: {
      routes: ['/faq', '/about', '/delivery'],
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@pinia/nuxt', '@nuxtjs/i18n'],
  build: {
    transpile: ['gsap'],
  },
  pinia: {
    autoImports: ['defineStore'],
  },
})
