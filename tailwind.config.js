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
                secondary: '#f9f871',
                tertiary: '#3A1B42',
            },
        },
    },
    plugins: [],
};
