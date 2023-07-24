export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('appear', {
    mounted(el: HTMLElement) {
      const str = el.dataset.replace?.replace(/'/g, '"')
      if (!str) return console.warn('No params on appear')
      console.log(str)
      const replaceClasses = JSON.parse(str)
      el.classList.add('transition-all', 'duration-500', 'ease-out')
      Object.keys(replaceClasses).forEach(key => {
        el.classList.add(key)
        setTimeout(() => {
          if (key !== 'delay') el.classList.remove(key)
          if (replaceClasses[key]) el.classList.add(replaceClasses[key])
        }, 100)
      })
    },
  })
})
