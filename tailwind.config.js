const { withTV } = require('tailwind-variants/transformer');

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: '#EFEDE4',
        black: '#000',
      },
      fontSize: {
        xs: '.8125rem',
        lg: '1.0625rem',
        '4xl': '2.1875rem',
      },
      fontFamily: {
        primary: 'var(--font-manrope)',
        secondary: 'var(--font-plexmono)',
      },
      lineHeight: {
        tight: '1.1',
      },
    },
  },
});
