module.exports = {
  content: [
    './app/app.vue',
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      zIndex: {
        max: 10000,
        doubleMax: 10001,
      },
    },
  },
  plugins: [],
}
