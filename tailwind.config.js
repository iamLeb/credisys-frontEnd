/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {

    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'primary': '#3F72AF',
        'secondary': "#112D4E",
        'primary-2': "#F9F7F7",
        'secondary-2':"#F0ECE5",
        'nav-back':"#43766C",
        'text-1':"#76453B",
        "button-1":"#092635",
        "head-cred": "#0174BE",
        "text-2-background":"#F1B4BB",
        "desc-color-1":"#F1B4BB"


      },
      fontSize: {
       xxl:['50px']
      }


    },

  },
  plugins: [
    require('flowbite/plugin')
]
}

