/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'cyberpunk': ['CyberpunkFont', 'sans-serif'],
        'neuropol': ['neuropolx', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

