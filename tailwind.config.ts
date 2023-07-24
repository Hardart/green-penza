import type { Config } from 'tailwindcss'
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'
module.exports = {
  content: ['./pages/**/*.vue', './components/**/*.vue', './app.vue'],
  theme: {
    extend: {
      fontFamily: {
        hero: ['Caveat', 'sans-serif'],
      },
      screens: {
        xs: '500px',
      },
      height: {
        dvh: '100dvh',
      },
      colors: {
        slate: {
          900: '#0e1423',
        },
      },
    },
  },

  plugins: [require('@tailwindcss/aspect-ratio'), iconsPlugin({ collections: getIconCollections(['mdi', 'game-icons']) })],
} satisfies Config
