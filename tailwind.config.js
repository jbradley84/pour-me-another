/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
  content: ["./views/**/*.handlebars"]
  },
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'tan': '#968B7d',
        'salmon': '#aa715c',
        'dark-grey': '#4c4f4a',
        'blue': '#738586',
        'light-grey': '#9d9F9b'
      },
      container: {
        center: true
      },
      fontFamily: {
        'sans': 'Helvetica, Arial, sans-serif',
      },
      backgroundImage: (theme) => ({
        bar: "url('/drinks.jpg')"
      }),
    }
    
  },
  plugins: [],
}

