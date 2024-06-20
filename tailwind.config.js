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
        'principal' : ['Sarabun', 'sans-serif']
      },
      colors: {
        'color-primary' : "#F5F0DC",
        'color-primary-orange' : "#F2C070",
        'color-secondary' : "#314F2F",
        'color-show-news' : "#CC5F42" ,
        'color-orange-focus' : "#F58327",
        'color-secondary-light' : '#5E8F5B'
      },
    }
  },
  plugins: []
};