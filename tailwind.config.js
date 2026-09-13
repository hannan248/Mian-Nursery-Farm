/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#15803D',
          dark: '#166534',
          light: '#22C55E'
        },
        moss: {
          DEFAULT: '#059669',
          light: '#10B981'
        },
        gold: {
          DEFAULT: '#166534',
          light: '#22C55E',
          dark: '#14532D'
        },
        cream: {
          DEFAULT: '#FFFFFF',
          dark: '#F8FAFC'
        },
        sand: '#F0FDF4',
        earth: '#334155'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px rgba(22, 128, 61, 0.25)',
        'glow-emerald': '0 0 25px rgba(22, 128, 61, 0.25)',
        'glass': '0 8px 32px 0 rgba(15, 23, 42, 0.06)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
