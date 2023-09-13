import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  typography: {
    fontFamily: [
      'Source Sans Pro',
      'Open Sans',
      'Poppins',
      'Roboto',
      'sans-serif',
    ].join(','),
  },
  overrides: {
  
  },
  
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          lineHeight: 'normal',
        },
      },
    },
    
  },

  palette: {
    primary: {
      main: '#0e2368',
    },
    common: {
      white: '#fff',
      black: '#000',
    },
    smalltext: {
      main: '#444957', 
    },

  },
  spacing: (factor) => `${0.4 * factor}rem`,

  typography: {
    fontSize: 16.4,
    h1: {
      fontSize: '3.7rem',
    },
    h2: {
      fontSize: '2.1rem',
    },
    h3: {
      fontSize: '2.2rem',
    },

  },
});

export default theme;
