/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            height: {
                screen2: ['100vh /* fallback for Opera, IE and etc. */', '100svh']
            },
            backgroundImage: {
                asia4: "url('src/assets/asia4.jpg')",
                404: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)'
            },
            textShadow: {
                sm: '0 1px 2px var(--tw-shadow-color)',
                DEFAULT: '0 2px 4px var(--tw-shadow-color)',
                lg: '0 8px 16px var(--tw-shadow-color)'
            },
            fontFamily: {
                LCD: ['LCD', 'cursive']
            },
            keyframes: {
                bounceUpAndFade: {
                    '0%': { transform: 'translateY(-10px)', opacity: '1' },
                    '50%': { transform: 'translateY(-20px)', opacity: '0.7' },
                    '100%': { transform: 'translateY(-25px)', opacity: '0' }
                }
            },
            animation: {
                bounceUpAndFade: 'bounceUpAndFade 1s ease-out infinite' // 設置2秒循環
            }
        }
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value
                    })
                },
                { values: theme('textShadow') }
            );
        })
    ]
};
