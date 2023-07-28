// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    public: {
      wordpressUrl: 'https://acfheadlessprd.wpengine.com'
    }
  },
  routeRules: {
    '/**': {
      swr: true
    }
  }
})
