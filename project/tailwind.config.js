/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {

    extend: {
      keyframes:{
        wavey:{
          "0%, 100%":{
            transform: "scale(0.5)"
          },
          "50%":{
            transform: "scale(1.5)"

        }
      }
    },
    animation:{
      wavey:"wavey 1000ms linear infinite",
    },
  },
  },
  plugins: [
    require("./plugins/openVariant"),
   require("./plugins/animationDelay"), 
   require("./plugins/tableCaption")],
}
