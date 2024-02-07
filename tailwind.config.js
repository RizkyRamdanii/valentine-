/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '100' : '100vh',
        '27' : '27rem',
      },
      width: {
        '27' : '27rem',
      },
    },
  },
  plugins: [],
}

