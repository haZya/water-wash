import '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  export interface PaletteOptions {
    decor: {
      primary: string;
      secondary: string;
    };
  }
}
