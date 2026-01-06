/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Mapping our custom variables to utility classes if needed, 
                // though we can just use the arbitrary values or standard colors.
                gold: '#d4af37',
                cyber: '#00f0ff',
            },
            animation: {
                'shine': 'shine 8s linear infinite',
            },
            keyframes: {
                shine: {
                    '0%': { backgroundPosition: '200% center' },
                    '100%': { backgroundPosition: '-100% center' },
                }
            },
            backgroundSize: {
                '300%': '300%',
            }
        },
    },
    plugins: [],
}
