module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#FAF5F0',
          100: '#F0E6D9',
          200: '#E6D2B3',
          300: '#D9BD8C',
          400: '#CCA366',
          500: '#BF8A40',
          600: '#996F33',
          700: '#735226',
          800: '#4D361A',
          900: '#261B0D',
        },
        green: {
          50: '#F0F5F1',
          100: '#D8E6DB',
          200: '#B0CDB6',
          300: '#88B491',
          400: '#619A6D',
          500: '#3A8148',
          600: '#2E6539',
          700: '#2E5C3E',
          800: '#1E3B27',
          900: '#152D1C',
        },
      },
      height: {
        'hero': '90vh',
      }
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'serif': ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}