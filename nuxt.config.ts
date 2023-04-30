export default defineNuxtConfig({
  postcss: {
    plugins: { tailwindcss: {} }
  },
  css: ['~/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/devtools'],
  devtools: {
    enabled: true
  }
})
