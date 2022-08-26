const withMT = require('@material-tailwind/react/utils/withMT');

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['NanumSquareRound', 'Arial', 'sans-serif'],
      body: ['NanumSquareRound', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
});
