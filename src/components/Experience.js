import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

const Experience = () => {
  const experienceData = [
    {
      title: "Lead UI Developer, Cloudnova Technologies",
      duration: "Dec 2022 - Present",
      description: "Led a team to integrate cloud-native security modules, reducing infrastructure costs by 90%.",
    },
    {
      title: "Senior Software Engineer, Veracity Solutions",
      duration: "Jun 2022 - Dec 2022",
      description: "Developed a healthcare app, improving patient engagement by 30%.",
    },
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Experience
      </Typography>
      {experienceData.map((item, index) => (
        <Box key={index} mb={4}>
          <Typography variant="h6">{item.title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {item.duration}
          </Typography>
          <Typography variant="body1" paragraph>
            {item.description}
          </Typography>
          {index !== experienceData.length - 1 && <Divider sx={{ my: 3 }} />} {/* Divider between experiences */}
        </Box>
      ))}
    </Container>
  );
};

export default Experience;
