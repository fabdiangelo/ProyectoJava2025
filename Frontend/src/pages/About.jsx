import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Acerca de
          </Typography>
          <Typography variant="body1" paragraph>
            Esta es una aplicación web moderna construida con:
          </Typography>
          <Typography variant="body1" component="div" sx={{ pl: 2 }}>
            <ul>
              <li>React + Vite para el frontend</li>
              <li>Material-UI para el diseño</li>
              <li>Java Spring Boot para el backend</li>
              <li>API REST para la comunicación</li>
            </ul>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default About; 