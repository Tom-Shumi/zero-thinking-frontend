export default defineNuxtConfig({
  postcss: {
    plugins: { tailwindcss: {} }
  },
  css: ['~/assets/css/tailwind.css', 'easymde/dist/easymde.min.css'],
  modules: ['@nuxtjs/tailwindcss']
})
