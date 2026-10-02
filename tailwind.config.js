/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'monospace'],
      },
      colors: {
        editorial: {
          bg: '#F7F8F6',
          card: '#FFFFFF',
          text: '#151817',
          muted: '#66706B',
          border: '#E2E6E3',
          emerald: '#087F5B',
          'emerald-light': '#DDF5EB',
          'emerald-hover': '#066849',
          // Dark Mode Palette
          'dark-bg': '#101412',
          'dark-card': '#171C19',
          'dark-text': '#F1F4F2',
          'dark-muted': '#9AA59F',
          'dark-border': '#29332E',
          'dark-emerald': '#35B982',
          'dark-emerald-light': 'rgba(53, 185, 130, 0.12)',
        }
      },
      boxShadow: {
        'editorial': '0 1px 3px rgba(0, 0, 0, 0.04)',
        'editorial-hover': '0 4px 12px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
