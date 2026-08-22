/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#14120F',
        'ink-soft': '#1C1915',
        parchment: '#F4EFE4',
        gold: '#C89B3C',
        'gold-soft': '#DDBE72',
        sage: '#7C8B6F',
        rust: '#A8562E',
        line: '#332E26',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
    },
  },
  plugins: [],
}
