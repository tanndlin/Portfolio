/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            height: {
                'minus-header': 'calc(100vh - 4rem)',
            },
            minHeight: {
                'minus-header': 'calc(100vh - 4rem)',
            },
            width: {
                '1/10': '10%',
                '1/20': '5%',
            },
            colors: {
                primary: '#552B5B',
                secondary: '#88D9D0',
                tertiary: '#4d4c88',
            },
        },
    },
    plugins: [],
};
