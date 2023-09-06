/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],

  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        background: '#0C0C0C',
        'focus-background': '#1C1C1C',
        primary: '#14324D',
        accent: '#F07814',
        highlight: '#487B78',
        'error-dark': '#8e0808',
        error: '#bb0000',
        'error-light': '#f2b6d6',
        'success-dark': '#078414',
        success: '#22bf33',
        'success-light': '#cafbd2',
        black: '#000',
        'grey-dark': '#222',
        grey: '#a2a7af',
        'grey-light': '#ddd',
        white: '#F2F1ED'
      },

      margin: {
        '5%': '5%'
      },

      width: {
        350: '350px'
      },

      height: {
        350: '350px'
      },

      maxWidth: {
        180: '180px',
        '4xs': '2.2rem'
      }
    }
  },

  plugins: []
};
