import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '@/components/Copyright';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <Container maxWidth="lg">
        <Navbar />
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Welcome to Boa - Interactive and fun multiplayer trivia
        </Typography>
        <Copyright />
      </Box>
    </Container>
  );
}
