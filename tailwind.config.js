/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryFont: ["Montserrat", "serif"],
        secondaryFont: ["Poppins", "serif"],
        logoFont: ["Barriecito", "serif"],
        russoOne: ["Russo One, sans-serif"],
      },
      colors: {
        primaryColor: "#212428",
        primaryRed: "#FF013F",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

