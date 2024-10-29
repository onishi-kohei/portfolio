import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    baseURL: '/portfolio/',
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/project_name/favicon.ico' }]
    }
  },
  css: ['@/assets/css/reset.css'],
  compatibilityDate: '2024-10-29'
})
