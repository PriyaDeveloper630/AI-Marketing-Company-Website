/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        '272F43': '#272F43',
        'A3A3A3':'#A3A3A3',
        '9E9C9C':'#9E9C9C',
        '0075FF':'#0075FF'
      },
      colors: {
        customGray: '#9E9C9C',
        bcolor:'#A3A3A3'
      },
    },
  },
  variants: {},
  plugins: [],
}

