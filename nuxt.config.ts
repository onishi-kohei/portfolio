import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  app: {
    baseURL: '/portfolio/'
  },
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/project_name/favicon.ico' }],
  css: ['@/assets/css/reset.css']
})
