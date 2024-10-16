import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h2">Jay Buranpuri</Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Lead UI Developer | React | AWS | Java
        </Typography>
        <Box display="flex" justifyContent="center" mt={3}>
          <Button component={Link} to="/about" variant="contained" color="primary" sx={{ mr: 2 }}>
            About Me
          </Button>
          <Button component={Link} to="/experience" variant="outlined" color="primary">
            Experience
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Landing;
