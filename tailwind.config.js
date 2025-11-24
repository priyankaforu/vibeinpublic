/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cream: '#FDFBF5',
        dark: '#1C1C1E',
        sage: '#71A894',
        'sage-dark': '#568070',
        mustard: '#F2C94C',
        coral: '#EB5757',
        lavender: '#E0E7FF',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'hard': '4px 4px 0px 0px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [],
}
