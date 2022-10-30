/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'minus-header': 'calc(100vh - 4rem)'
      },
      width: {
        '1/20': '5%'

      },
    },
  },
  plugins: [],
}
