/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        RleyI: ["Radley-Italic", "sans-serif"],
        RleyR: ["Radley-Regular", "sans-serif"],
        SOR: ["SnowburstOne-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
}

