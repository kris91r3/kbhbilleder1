/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#C2410C",
      secondary: "#FECC16",
      linkfarve: "#137586",
      darkgrey: "#121212",
      lightgrey: "#3a3a3a",
      light: "#dfdfdf",
      white: "#ffffff",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        speciel_elite: "'Special Elite', sans-serif",
        merriweather: "'Merriweather', serif",
        allison: "'Allison', serif",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
