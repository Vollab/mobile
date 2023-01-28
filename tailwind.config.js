const sizes = require('./src/styles/custom/sizes.js')
const colors = require('./src/styles/custom/colors.js')
const screens = require('./src/styles/custom/screens.js')
const fontSize = require('./src/styles/custom/fontSize.js')
const fontFamily = require('./src/styles/custom/fontFamily.js')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize,
    fontFamily,
    size: sizes,
    plugins: [],
    spacing: sizes,
    extend: {
      colors,
      screens: screens
    }
  }
}
