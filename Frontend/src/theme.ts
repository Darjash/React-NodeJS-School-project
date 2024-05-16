import { createTheme } from '@mui/material';

export const theme = createTheme({
    typography: {
      fontFamily: [
       'Inter',
       'sans-serif'].join(','),
       fontSize: 14
    },
    breakpoints: {
      values: {
      xs: 480,
      sm: 768,
      md: 960,
      lg: 1280,
      xl: 1818
    }

    },
  });
