/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        inter: ['Inter','sans-serif'],
      },
      colors:{
        brend:{
          gray:{
            100:"#2E3F63",
          }
        }
      },
      spacing:{
        spacing:{
          brend:{
            100:"630"
          },
        }
      }
    },
  },
  plugins: [],
}

