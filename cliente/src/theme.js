import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0086FF',
      light: '#80C3FF',
      dark: '#005EB3',
    },
    secondary: {
      main: '#0006FF',
      light: '#8083FF',
      dark: '#000499',
    },
  },
  logo: {
    margin: 'auto',
    width: '100px',
    height: '100px',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 975,
      lg: 1300,
      xl: 1920,
    },
  },
});

export default theme;
