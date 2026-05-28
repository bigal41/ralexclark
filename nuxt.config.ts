export default defineNuxtConfig({
  compatibilityDate: '2026-05-26',
  devtools: { enabled: true },
  ssr: true,

  app: {
    head: {
      title: 'ralexclark',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Alex Clark personal website' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap',
        },
      ],
      bodyAttrs: {
        class: 'bg-gray-100 dark:bg-zinc-800',
      },
    },
  },

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    'v-slick-carousel/style.css',
  ],

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@vite-pwa/nuxt',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    viewer: false,
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
  },

  image: {
    cloudinary: {
      baseURL:
        'https://res.cloudinary.com/baclark2019/image/upload/v1647294915/ralexclark',
    },
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'ralexclark',
      short_name: 'ralexclark',
      description: 'Alex Clark personal website',
      lang: 'en',
      icons: [
        {
          src: '/icon.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },

  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
})
