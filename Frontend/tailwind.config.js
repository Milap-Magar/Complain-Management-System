/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'jet-mono': ['JetBrains Mono', 'monospace'],
      'epic': ['Epilogue', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}