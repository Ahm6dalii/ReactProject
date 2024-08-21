/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
import { color } from "framer-motion"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        Main:"#967dff"

      }
    },
  },

  plugins: [
   daisyui
  ],
  darkMode:'class',
  
}

