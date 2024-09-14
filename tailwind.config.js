/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        myfont:['Oswald'],
        titlefont:['Lato']
      }
    },
  },
  plugins: [],
}