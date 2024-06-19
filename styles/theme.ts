import { createTheme } from '@mui/material/styles';
import colors from './colors';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: colors.blue_900,
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Fira Sans, sans-serif',
    //headline-small
    h1:{
      fontFamily: 'Fira Sans, sans-serif',
      textAlign: 'center',
      fontSize: '1.5rem',
      fontWeight: '400',
      lineHeight: '2rem',
      color:  colors.blue_900,
      marginTop: '1rem',
      marginBotton: '1rem',
    },
    //body-medium
    h2: {
      fontFamily: 'Fira Sans, sans-serif',
      textAlign: 'center',
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      fontWeight: 'normal',
      color:  colors.blue_900,
      marginTop: '0.75rem',
      marginBottom: '0.75rem',
    },
    //label-large
    body1: {
      fontFamily: 'Fira Sans, sans-serif',
      textAlign: 'center',
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      fontWeight: '500',
      color:  colors.white,
    },
  },
  status: {
    danger: 'orange',
  },
  components: {
    MuiCssBaseline: {

    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '1rem',
          padding: '0.625rem 1.25rem',
        },
        contained: {
          backgroundColor: colors.blue_900,
          color: colors.white,
          borderRadius: '1.5rem',
          height: '3rem',
          maxWidth: '20.5rem',
          width: '100%',
          '&:hover': {
            backgroundColor: colors.blue_700,
          },
        },
        outlined: {
          backgroundColor: colors.red_500,
          '&:hover': {
            backgroundColor: colors.red_700,
          },
        },
      },
    },
  },
});

export default theme;