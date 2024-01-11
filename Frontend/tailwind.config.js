/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'afno': {
        100: '#F9F5F6',
        200: '##E3F4F4',
        300: '#D2E9E9',
        400: '#C4DFDF',
        }
      },
    fontFamily:{
      'jet-mono': ['JetBrains Mono', 'monospace'],
      'epic': ['Epilogue', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}