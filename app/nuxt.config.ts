import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  router: {
    base: '/portfolio/'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/project_name/favicon.ico' }
  ]
})
