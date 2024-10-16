import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h3" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          I am a passionate Lead UI Developer with expertise in cloud-native solutions using React, AWS, and Java.
          I specialize in building scalable, impactful applications that drive business growth and customer satisfaction.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
