/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
  content: ["./views/**/*.handlebars"]
  },
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'red': '#e3342f',
        'blue': '#3182ce',
        'dark-blue': '#1e3a8a'
      },
      container: {
        center: true
      },
      fontFamily: {
        'sans': 'Helvetica, Arial, sans-serif',
      }
    }
    
  },
  plugins: [],
}

