/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#d47108",
        white: {
          Default: '#ffffff',
          100: '#f5f5f5',
          200: '#e0e0e0',
          300: '#bdbdbd',
          400: '#9e9e9e',
          500: '#757575',
          600: '#616161',
          700: '#424242',
          800: '#303030',
          900: '#212121',
        },
        gray: {
          Default: '#f5f5f5',
          100: '#e0e0e0',
          200: '#bdbdbd',
          300: '#9e9e9e',
          400: '#757575',
          500: '#616161',
          600: '#424242',
          700: '#303030',
          800: '#212121',
        },  
        black: {
          Default: '#000000',
          100: '#121212',
          200: '#242424',
          300: '#363636',
          400: '#484848',
          500: '#5a5a5a',
          600: '#6c6c6c',
          700: '#7e7e7e',
          800: '#909090',
          900: '#a2a2a2',
        },
        error: '#F14141' ,
        sucess: '#2f9B65',
        warning: '#F19B41',
      },
      fontFamily: {
        "quicksand": ["Quicksand-Regular", "sans-serif"],
        "quicksand-bold": ["Quicksand-Bold", "sans-serif"],
        "quicksand-light": ["Quicksand-Light", "sans-serif"],
        "quicksand-medium": ["Quicksand-Medium", "sans-serif"],
        "quicksand-semiBold": ["Quicksand-SemiBold", "sans-serif"],
      }
    },
  },
  plugins: [],
}