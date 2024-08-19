/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        futuristicBlue: '#00FFFF',
        futuristicDark: '#0A0A0A',
      },
      fontFamily: {
        digital: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
