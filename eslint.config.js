import globals from 'globals'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  files: ['**/*.ts', '**/*.vue'],
  rules: {
    'no-console': 'off',
  },
}).override('nuxt/vue/single-root', {
  rules: {
    'vue/no-multiple-template-root': 'off',
  },
})
