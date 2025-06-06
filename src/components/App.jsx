// src/components/App.jsx
import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '../theme/theme';
import LandingPage from '../pages/LandingPage';
import Header from '../layouts/Header';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      
      <Box
        sx={{
          bgcolor: 'background.default',
          color: 'text.primary',
          minHeight: '100vh',  
          transition: 'all 0.5s ease-in-out',
        }}
      >
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <LandingPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
