/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'gradient-black': 'linear-gradient(180deg, #222933, #161e29)',
    },
    colors:{
      'background-start': 'hsla(217deg, 12%, 63%, 0.075)',
      'black-background':'#121417',
      'card-bkg':'#ffffff',
      'small-button-bkg':'#959eac1c',
      'text-color':'#ffffff',
      'description-color':'#959eac',
      'button-bgk':'#fb7413',
      'button-active':'#959eac',
      'text-bgk':'#222f3f',
      'text-rating-desc':'#959eac',
    },
    extend: {},
  },
  plugins: [],
}

