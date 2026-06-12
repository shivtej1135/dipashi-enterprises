/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0D1B2A",
        blue: "#1A6FAD",
        teal: "#00AACC",
        muted: "#6B7A90",
        surface: "#F4F7FB",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}