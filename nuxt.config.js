export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Datalands',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'An independent creative studio shaping complex ideas.',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@wearedatalands' },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    ],
  },
  css: ['~/assets/scss/style.scss'],
  components: true,
  buildModules: ['@nuxtjs/prismic'],
  build: {
    transpile: ['vue-slicezone'],
  },
  prismic: {
    endpoint: 'https://datalands.cdn.prismic.io/api/v2',
    modern: true,
  },
}
