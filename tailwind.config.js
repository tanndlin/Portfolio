/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
            },
            height: {
                'minus-header': 'calc(100vh - 4rem)',
            },
            minHeight: {
                'minus-header': 'calc(100vh - 4rem)',
            },
            colors: {
                primary: '#0f172a',
                secondary: '#1e293b',
                tertiary: '#334155',
                'text-color': '#f1f5f9',
                muted: '#94a3b8',
                accent: '#2dd4bf',
            },
        },
    },
    plugins: [],
};
