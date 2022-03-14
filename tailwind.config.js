module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans serif']
      },
      zIndex: {
        'max': 10000,
        'doubleMax': 10001
      }
    },
  },
  variants: {
    extends: {}
  },

  plugins: [
    require("daisyui"),
  ],
}
