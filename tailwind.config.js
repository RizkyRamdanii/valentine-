/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      height: {
        '100' : '100vh',
        '27' : '27rem',
        '19' : '19rem',
      },
      width: {
        '27' : '27rem',
        '19' : '19rem',
      },
    },
  },
  plugins: [],
}

