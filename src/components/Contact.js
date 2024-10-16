import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h3" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" paragraph>
          You can reach me via the following platforms:
        </Typography>
        <Link href="https://linkedin.com/in/jay140299" target="_blank" variant="h6">
          LinkedIn
        </Link>
        <br />
        <Link href="https://github.com/buranpurijay" target="_blank" variant="h6">
          GitHub
        </Link>
        <br />
        <Link href="mailto:buranpurijay@gmail.com" variant="h6">
          Email Me
        </Link>
      </Box>
    </Container>
  );
};

export default Contact;
