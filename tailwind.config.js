/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      container: { center: true, padding: '1rem' },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      },
      backdropBlur: { xs: '2px' },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, rgba(79,70,229,1) 0%, rgba(236,72,153,1) 100%)',
      }
    }
  },
  plugins: [],
};
