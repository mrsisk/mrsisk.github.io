/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      sans: ["Comic Neue", ...defaultTheme.fontFamily.sans],
      turret: ["Turret road", ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [],
}
