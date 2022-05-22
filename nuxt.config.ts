import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  router: {
    base: '/portfolio/'
  },
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/project_name/favicon.ico' }],
  css: ['@/assets/css/reset.css']
})
