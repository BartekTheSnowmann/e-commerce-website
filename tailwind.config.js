/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#FF6B1A',
        secondary:'#006663',
        tertiary: '#00B3AD',
        primaryHover: '#a6440f'
      }
    },
  },
  plugins: [],
}