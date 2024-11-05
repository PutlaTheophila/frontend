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
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse-slow': 'spin-reverse 25s linear infinite',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: {
            transform: 'rotate(360deg)',
          },
          to: {
            transform: 'rotate(0deg)',
          },
        },
      },
    },
    variants: {
      extend: {
        animation: ['responsive', 'motion-safe', 'motion-reduce'],
      },
    },
  },
  plugins: [],
}

