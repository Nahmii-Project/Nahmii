/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        new: '2px',
      },
      dropShadow: {
        'new': [
            '0px 4px 4px rgba(0, 0, 0, 0.25)',
            '0px 4px 4px rgba(0, 0, 0, 0.25)'
        ]
      }
    },
  },
  plugins: [],
}