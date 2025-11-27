/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: '#FF6B6B',
        violet: '#9B59B6',
        teal: '#1ABC9C',
        'off-white': '#FAF9F6',
      },
    },
  },
  plugins: [],
}

