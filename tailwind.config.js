module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        scoutne: {
          primary: '#08904F',
          secondary: '#D73D52',
          accent: '#4b7bec',
          neutral: '#4b6584',
          'base-100': '#ffffff',
          info: '#4b7bec',
          success: '#08904F',
          warning: '#FBBD23',
          error: '#D73D52',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
