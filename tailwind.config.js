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
          DEFAULT: '#0B2B1D',
          dark: '#061A11',
          light: '#14412C'
        },
        moss: {
          DEFAULT: '#1A4331',
          light: '#285E46'
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4E090',
          dark: '#AA8821'
        },
        cream: {
          DEFAULT: '#FBF9F4',
          dark: '#F0ECE1'
        },
        sand: '#F3EFE6',
        earth: '#4A3B32'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px rgba(212, 175, 55, 0.25)',
        'glow-emerald': '0 0 25px rgba(16, 91, 56, 0.25)',
        'glass': '0 8px 32px 0 rgba(11, 43, 29, 0.12)',
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
