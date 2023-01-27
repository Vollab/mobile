const colors = require('./src/styles/custom/colors.js')
const spacing = require('./src/styles/custom/spacing.js')
const fontSize = require('./src/styles/custom/fontSize.js')
const fontFamily = require('./src/styles/custom/fontFamily.js')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    spacing,
    fontSize,
    fontFamily,
    plugins: [],
    size: spacing,
    extend: { colors }
  }
}
