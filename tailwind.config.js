/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind scans these files for class names. script.js is included because
  // it builds the gallery cards, so its classes must be found too.
  content: ['./index.html', './script.js'],
  theme: {
    extend: {
      colors: {
        ink: '#12161a',
        panel: '#1a2025',
        line: '#2a3238',
        shell: '#ece6da',
        dust: '#98a4a8',
        glow: '#9bc4b8',
        redart: '#8e1b2b'
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif']
      }
    }
  }
};
