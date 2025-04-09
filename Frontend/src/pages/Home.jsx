import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Bienvenido a Mi Aplicación
          </Typography>
          <Typography variant="body1" paragraph>
            Esta es la página principal de la aplicación. Aquí puedes agregar el contenido principal.
          </Typography>
          <Typography variant="body1">
            La aplicación está conectada con un backend Java y utiliza Material-UI para el diseño.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Home; 