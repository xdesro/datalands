export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'datalands',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['~/assets/scss/style.scss'],
  plugins: ['~/plugins/vue-loop-scroll.js'],
  components: true,
  buildModules: [
    // '@nuxtjs/eslint-module',
    // '@nuxtjs/stylelint-module',
    '@nuxtjs/prismic',
  ],
  build: {
    transpile: ['vue-slicezone'],
  },
  prismic: {
    endpoint: 'https://datalands.cdn.prismic.io/api/v2',
    modern: true,
  },
}
