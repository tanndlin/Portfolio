/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'minus-header': 'calc(100vh - 4rem)',
      },
      'minHeight': {
        'minus-header': 'calc(100vh - 4rem)',
      },
      width: {
        '1/10': '10%',
        '1/20': '5%',

      },
      colors: {
        primary: 'rgb(14 165 233)',
        secondary: '#5e57e0',
        tertiary: 'rgb(79 70 229)',
      },
    },
  },
  plugins: [],
}
