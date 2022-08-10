/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        xl: '12rem',
      },
    },
    maxHeight: (theme) => ({
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
      auto: 'auto',
    }),
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      ...theme('spacing'),
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      ...breakpoints(theme('screens')),
    }),
    minHeight: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    minWidth: (theme) => ({
      ...theme('spacing'),
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      screen: '100vw',
    }),
    extend: {
      colors: {
        primary: { main: '#19A6DC' },
        secondary: { main: '#A5CE39' },
      },
      screens: {
        hsm: { raw: '(min-height: 560px)' },
        hmd: { raw: '(min-height: 720px)' },
        hlg: { raw: '(min-height: 900px)' },
        hxl: { raw: '(min-height: 1024px)' },
      },
      fontFamily: {
        heading: ['Inter', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        body: ['Inter', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
