/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'c-10': '10%',
        'c-20': '20%',
        'c-30': '30%',
        'c-40': '40%',
        'c-50': '50%',
        'c-60': '60%',
        'c-70': '70%',
        'c-80': '80%',
        'c-90': '90%',
        'c-100': '100%',
      }
    },
  },
  plugins: [],
}
