/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pink: {
          100: '#f7ede2',//dia
          200: "#f5cac3",//dia
          300: "#f28482",//dia
          400: '#a8a8a8',//dark
          500: "#8a4847",//dark
          600: "#693939",//dark
        },
        blueGreen: {
          100: "#55b1a5",//dia
          200: "#2a9d8f",//dia
          300: "#227e72",//dark
          400: "#174e47",//dark
        },
      },
      borderWidth:{
        10: '100vh',
        100: '60rem',
        20: '5vh',
        200:'84rem',
      },
      transitionDuration: {
        '5': '5s',
      },
      fontFamily: {
        'londrina': ['Londrina Solid'],
        'londrinaS': ['Londrina Shadow'],
      },
      screens: {
        'mobile': '320px',
        'desktop': '950px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
