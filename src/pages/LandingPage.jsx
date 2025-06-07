import React from 'react';
import GroupList from '../components/GroupList';
import {
  Container,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import { keyframes } from '@mui/system';


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

function LandingPage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 12,
        textAlign: 'center',
        animation: `${fadeIn} 2s ease forwards`,
        transition: 'all 0.5s ease-in-out',
      }}
    >
      

      <Typography variant="h2" component="h1" gutterBottom color="primary">
        Bienvenido a CleanUp Club
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        Organiza tareas, gana recompensas y disfruta con tu familia y amigos.
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" color="primary" sx={{ transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.05)' } }}>
          Iniciar Sesión
        </Button>
        <Button variant="outlined" color="primary" sx={{ transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.05)' } }}>
          Regístrate
        </Button>
      </Stack>
      <GroupList />
    </Container>
  );
}

export default LandingPage;
