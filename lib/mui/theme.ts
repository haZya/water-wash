import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 640,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      100: '#b3e3f3',
      200: '#82d1ec',
      300: '#55bfe4',
      400: '#36b2e0',
      500: '#19a5dc',
      600: '#1197ce',
      700: '#0585bb',
      800: '#0574a8',
      900: '#005586',
    },
    secondary: {
      main: '#a4ce39',
      100: '#e5f0c6',
      200: '#d3e7a1',
      300: '#c1dd7a',
      400: '#b2d65a',
      500: '#a4ce39',
      600: '#93be31',
      700: '#7daa26',
      800: '#68961c',
      900: '#427405',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ['Inter', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'].join(','),
  },
});

export default theme;
