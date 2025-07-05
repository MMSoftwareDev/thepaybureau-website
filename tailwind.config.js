 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bureau-purple': '#401D6C',
        'bureau-pink': '#EC385D',
        'bureau-peach': '#FF8073',
        'bureau-light': '#F8F4FF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'bureau-gradient': 'linear-gradient(135deg, #401D6C 0%, #EC385D 50%, #FF8073 100%)',
      },
    },
  },
  plugins: [],
}