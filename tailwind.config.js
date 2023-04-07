/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2196f3',
        secondary: '#607d8b',
        success: '#4caf50',
        info: '#00bcd4',
        warning: '#ffc107',
        danger: '#f44336',
      },},
  },
  plugins: [],
}
