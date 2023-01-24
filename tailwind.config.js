const customColors = require('./src/styles/colors')

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
      size: {
        18: '72px',
        108: '432px',
        110: '440px',
        112: '448px',
        116: '464px',
        125: '500px',
        129: '516px',
        150: '600px'
      },

      spacing: {
        18: '72px',
        108: '432px',
        110: '440px',
        112: '448px',
        116: '464px',
        125: '500px',
        129: '516px',
        150: '600px'
      },

      colors: { ...customColors }
    }
  }
}
