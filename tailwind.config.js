/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
  content: ["./views/**/*.handlebars"]
  },
  theme: {
    extend: {},
    colors: {
      'tahiti': '#3ab7bf',
      'bermuda': '#78dcca',
      'emerald': '#059669'
    }
  },
  plugins: [],
}

