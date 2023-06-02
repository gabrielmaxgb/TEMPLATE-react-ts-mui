import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  export interface Theme {
    extraColors: {
      white: string;
      black: string;
    };
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  export interface ThemeOptions {
    extraColors?: {
      white?: string;
      black?: string;
    };
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  extraColors: {
    white: '#ffffff',
    black: '#000000',
  },
  palette: {
    primary: {
      main: '#ff7300',
    },
    secondary: {
      main: '#000000',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
