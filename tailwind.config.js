/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    fontFamily: {
      "kanit": "'Kanit', sans-serif"
    },
    colors: {
      "main-dark":"#0D0D0D",
      "main-gray":"#30353F",
      "main-light":"#FFFFFF",
      "secondary-light":"#E4EDFF",
      "main-blue":"#0554F1",
      "secondary-blue":"#0540F2",
    },
    extend: {},
  },
  plugins: [],
}