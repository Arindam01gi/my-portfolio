/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'body-purple': '#CAA6F7',
        'body-green': '#10b981'
      }
    },
  },
  plugins: [],
}

