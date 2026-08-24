/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure these paths are correct
    "./public/index.html",        // Include this if you have static HTML in public
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#000000',
        'accent': '#ff6b6b',
      },
      fontFamily: {
        'mono': ['"Roboto Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
