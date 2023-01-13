const customTheme = require('./src/styles/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    plugins: [],
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '16px'],
      base: ['16px', '24px'],
      lg: ['18px', '24px'],
      xl: ['22px', '32px'],
      '2xl': ['24px', '32px']
    },
    fontFamily: {
      body: ['OpenSans_400Regular'],
      body_italic: ['OpenSans_400Regular_Italic'],
      title: ['OpenSans_600SemiBold'],
      title_italic: ['OpenSans_600SemiBold_Italic']
    },
    extend: {
      size: { 18: '72px' },
      spacing: { 18: '72px' },
      colors: { ...customTheme }
    }
  }
}
