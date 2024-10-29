import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  devtools: { enabled: true },
  app: {
    baseURL: '/portfolio/',
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/project_name/favicon.ico' }],
    },
  },
  css: ['@/assets/css/reset.css'],
  compatibilityDate: '2024-10-29',
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
