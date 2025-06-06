import React from 'react';
import { AppBar, Toolbar, IconButton, Switch, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { keyframes } from '@mui/system';

const fadeSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-7px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


function Header({ darkMode, toggleDarkMode }) {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'flex-end', animation: `${fadeSlideIn} 2s ease-in-out` }}>
        <Box sx={{ display: 'flex', alignItems: 'center', transition: 'all 0.5s ease-in-out', }}>
        <IconButton
            sx={{
              mr: 1,
              color: 'inherit',
              transition: 'all 0.5s ease-in-out', // Transición para el icono
              transform: darkMode ? 'rotate(360deg)' : 'rotate(0deg)', // Opcional para animación de rotación
            }}
            disableRipple
            disableFocusRipple
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            color="primary"
            sx={{
              transition: 'all 0.5s ease-in-out', // Transición para el cambio del switch
              '& .MuiSwitch-thumb': {
                transition: 'all 0.4s ease-in-out',
              },
              '& .MuiSwitch-track': {
                transition: 'all 0.4s ease-in-out',
              },
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
