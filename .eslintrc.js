module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/base',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
    './.nuxt/.eslintrc.js'
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/no-v-model-argument': 0,
    'vue/multi-word-component-names': 'off'
  }
}
