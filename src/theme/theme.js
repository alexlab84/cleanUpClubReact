// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#6C63FF',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#FF6584',
        contrastText: '#ffffff',
      },
      success: { main: '#4CAF50' },
      warning: { main: '#FFC107' },
      error: { main: '#F44336' },
      background: {
        default: '#f9f9fb',
        paper: '#ffffff',
      },
      text: {
        primary: '#333333',
        secondary: '#666666',
      },
    },
    typography: {
      fontFamily: "'Nunito', 'Roboto', 'Arial', sans-serif",
      h1: { fontSize: '2.4rem', fontWeight: 700 },
      h2: { fontSize: '2rem', fontWeight: 600 },
      body1: { fontSize: '1rem', lineHeight: 1.6 },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiButton: {
        styleOverrides: {
          containedPrimary: {
            backgroundColor: '#6C63FF',
            '&:hover': { backgroundColor: '#5b52e6' },
          },
        },
      },
    },
  });
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#6C63FF',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#FF6584',
        contrastText: '#ffffff',
      },
      success: { main: '#4CAF50' },
      warning: { main: '#FFC107' },
      error: { main: '#F44336' },
      background: {
        default: '#121212',
        paper: '#1E1E1E',
      },
      text: {
        primary: '#ffffff',
        secondary: '#aaaaaa',
      },
    },
    typography: {
      fontFamily: "'Nunito', 'Roboto', 'Arial', sans-serif",
      h1: { fontSize: '2.4rem', fontWeight: 700 },
      h2: { fontSize: '2rem', fontWeight: 600 },
      body1: { fontSize: '1rem', lineHeight: 1.6 },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiButton: {
        styleOverrides: {
          containedPrimary: {
            backgroundColor: '#6C63FF',
            '&:hover': { backgroundColor: '#5b52e6' },
          },
        },
      },
    },
  });
  
  export { lightTheme, darkTheme };
