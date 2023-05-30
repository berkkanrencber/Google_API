/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./frontend/dist/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui:{
    theme: [
      {
        mytheme: {
          "error": "#F87272"
        }
      }
    ]
  }
}