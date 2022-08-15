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
      main: '#19A6DC',
    },
    secondary: {
      main: '#A5CE39',
    },
    decor: {
      primary: '#FF9191',
      secondary: '#FFD491',
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
