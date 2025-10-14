/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const rotateX = plugin(function ({ addUtilities }) {
    addUtilities({
        '.rotate-y-180': {
            transform: 'rotateY(180deg)',
        },
    });
});
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1142px',
        },
        fontFamily: {
            mulish: ['Mulish', 'sans-serif'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            black: '#08111F',
            primary: '#79D8FE',
            secondary: '#79D8FE',
            cyan: '#79D8FE',
            lightgray: '#D3D3D3',
            red: '#FF0000',
            gray: {
                DEFAULT: '#7780A1',
                dark: '#1C2331',
            },
        },
        extend: {
            backgroundImage: {
                background: "url('/background.png')",
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray'),
                        fontSize: '1.125rem',
                    },
                },
            }),
            animation: {
                'zoom-image': 'zoom 15s linear infinite',
                'zoom-bg': 'zoomBg 0.5s linear forwards ',
                'zoom-image-slow': 'zoomSlow 30s linear infinite',
                'fade-in': 'fade 0.2s ease-in-out',
                'move-up': 'moveup 2s ease-out',
                'hex-up': 'hexup 0.5s ease',
                'show-left': 'moveleft .5s linear',
                blink: 'blink 2s linear infinite',
                'small-bounce': 'smallBounce 1s ease-in-out infinite',
            },
            keyframes: {
                zoom: {
                    '0%': { backgroundSize: '110%' },
                    '50%': { backgroundSize: '130%' },
                    '100%': { backgroundSize: '110%' },
                },
                zoomSlow: {
                    '0%': { backgroundSize: '100%', opacity: 0.9 },
                    '50%': { backgroundSize: '110%', opacity: 1 },
                    '100%': { backgroundSize: '100%', opacity: 0.9 },
                },
                fade: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                // text move up
                moveup: {
                    '0%': { transform: 'translateY(100px)' },
                    '100%': { transform: 'translateY(0)' },
                },
                // hex move up
                hexup: {
                    '0%': { transform: 'translateY(50px)', opacity: 0 },
                    '100%': { transform: 'translateY(0)', opacity: 1 },
                },
                moveleft: {
                    '0%': { transform: 'translateX(-100px)' },
                    '100%': { transform: 'translateX(100px)' },
                },
                zoomBg: {
                    '0%': { backgroundSize: '100%' },
                    '100%': { backgroundSize: '120%' },
                },
                blink: {
                    '0%': { opacity: 0 },
                    '50%': { opacity: 1 },
                    '100%': { opacity: 0 },
                },
                smallBounce: {
                    '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
                    '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp'), rotateX, require('@tailwindcss/typography')],
};
