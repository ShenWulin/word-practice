/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'success-popup': {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '50%': { transform: 'scale(1.2)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'success-check': {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' }
        },
        'success-text': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'success-details': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      animation: {
        'success-popup': 'success-popup 0.5s ease-out forwards',
        'success-check': 'success-check 0.5s ease-out forwards 0.2s',
        'success-text': 'success-text 0.5s ease-out forwards 0.4s',
        'success-details': 'success-details 0.5s ease-out forwards 0.6s'
      }
    },
  },
  plugins: [],
};