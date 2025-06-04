/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--color-primary), <alpha-value>)',
        secondary: 'rgba(var(--color-secondary), <alpha-value>)',
        accent: 'rgba(var(--color-accent), <alpha-value>)',
        success: 'rgba(var(--color-success), <alpha-value>)',
        warning: 'rgba(var(--color-warning), <alpha-value>)',
        error: 'rgba(var(--color-error), <alpha-value>)',
        text: 'rgba(var(--color-text), <alpha-value>)',
        'text-light': 'rgba(var(--color-text-light), <alpha-value>)',
        background: 'rgba(var(--color-bg), <alpha-value>)',
        'background-light': 'rgba(var(--color-bg-light), <alpha-value>)',
        border: 'rgba(var(--color-border), <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      }
    },
  },
  plugins: [],
};