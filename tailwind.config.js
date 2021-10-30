module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#d2d3d3',
          200: '#a6a7a8',
          300: '#797a7c',
          400: '#4d4e51',
          500: '#202225',
          600: '#1a1b1e',
          700: '#131416',
          800: '#0d0e0f',
          900: '#060707',
        },
        iconGray: '#36393f',
        iconGreen: '#3ba55d',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
