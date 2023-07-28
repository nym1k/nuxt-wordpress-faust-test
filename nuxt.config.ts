// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    public: {
      wordpressUrl: 'http://faust.local/graphql'
    }
  },
  routeRules: {
    '/**': {
      swr: true
    }
  }
})
