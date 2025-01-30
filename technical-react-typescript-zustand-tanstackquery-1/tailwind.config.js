/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgGradient1': 'linear-gradient(to right top, #1f0537, #3b0d61, #5c128d, #8115bc, #a912eb)',
      },
      fontFamily: {
        congenialR: ['congenialregular', 'sans-serif'], // 'congenialregular' as the primary font
      },
    },
  },
  plugins: [],
}

