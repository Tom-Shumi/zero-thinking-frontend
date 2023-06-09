export default defineNuxtConfig({
  postcss: {
    plugins: { tailwindcss: {} }
  },
  css: ['~/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/devtools'],
  devtools: {
    enabled: true
  },
  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || '',
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || '',
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || '',
      API_BASE_URL: process.env.API_BASE_URL || ''
    }
  }
})
