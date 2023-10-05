/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Space Grotesk", "sans-serif"],
        secondary: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        primary: "#3f83f8",
        primarydark: "#3267c4",
        secondary: "green",
        background: "#bdbdbd",
      },
      spacing: {
        md: "12px"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
