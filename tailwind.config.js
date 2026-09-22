/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#8DC63F",
          "green-hover": "#7CB325",
          dark: "#14181F",
          muted: "#555555",
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [],
}