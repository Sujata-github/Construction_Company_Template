/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFC03D',
        secondary: '#212D45'
      },
      fontFamily: {
        // montserrat: ['Montserrat', 'sans-serif']
        montserrat: ['Montserrat', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
