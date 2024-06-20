/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          md: "50px"
        }
      },
      fontFamily: {
        'principal' : ['Sarabun', 'sans-serif'],
        'secondary' : ['Lato', 'sans-serif']
      },
      colors: {
        'color-blue-light' : "#ECFDFC",
        'color-blue-highlight' : "#0EA89B",
        'color-secondary-highlight' : "#FF832B",
        'color-secondary' : "#FFF6F0" ,
        'color-purple-light' : "#F6F0FD",
        'color-purple-dark' : '#863BE9'
      },
    }
  },
  plugins: []
};