import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Science, Computer Science",
      institution: "University of Maryland, Baltimore County",
      duration: "Jan 2021 - Dec 2022",
    },
    {
      degree: "Bachelor of Engineering, Information Technology",
      institution: "Charusat University, India",
      duration: "Apr 2016 - Jun 2020",
    },
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Education
      </Typography>
      {educationData.map((item, index) => (
        <Box key={index} mb={4}>
          <Typography variant="h6">{item.degree}</Typography>
          <Typography variant="body2" color="textSecondary">{item.institution}</Typography>
          <Typography variant="body2" color="textSecondary">{item.duration}</Typography>
          {index !== educationData.length - 1 && <Divider sx={{ my: 3 }} />} {/* Adds a divider between items */}
        </Box>
      ))}
    </Container>
  );
};

export default Education;
