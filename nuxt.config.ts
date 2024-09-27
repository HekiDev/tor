// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', 'primeicons/primeicons.css'],
  modules: ['@primevue/nuxt-module', "@nuxtjs/tailwindcss", 'nuxt-gtag'],
  runtimeConfig: {
    public: {
      gtag: {
        id: 'G-HLV7VQL6HD' // Your GA4 tracking ID
      }
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  primevue: {
    options: {
      unstyled: true,
      theme: {
        options: {
          
        }
      }
    },
    importPT: { as: 'Aura', from: '~/presets/aura' }, //import and apply preset
    components: {
      exclude: ["Editor", "Chart"]
    }
  },
})