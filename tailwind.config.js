/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: 'Nunito Sans'
      },
      colors: {
        darkBg: "hsl(207, 26%, 17%)",
        darkHeader: "hsl(209, 23%, 22%)"
      },
      fontWeight: {
        b: "800"
      }
     },
  },
  plugins: [],
}
