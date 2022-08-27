const withMT = require('@material-tailwind/react/utils/withMT');

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {},
    fontFamily: {
      sans: ['NanumSquareRound', 'Arial', 'sans-serif'],
      body: ['NanumSquareRound', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        red: {
          50: '#ea9ca9',
          100: '#e58898',
          200: '#e17487',
          300: '#dd6075',
          400: '#d84c64',
          500: '#d43853',
          600: '#bf324b',
          700: '#aa2d42',
          800: '#94273a',
          900: '#7f2232',
        },
      },
    },
  },
  plugins: [],
});
