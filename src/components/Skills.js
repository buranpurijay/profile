import React from 'react';
import { Container, Typography, Box, LinearProgress } from '@mui/material';

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 95 },
  { name: "AWS", level: 85 },
];

const Skills = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Skills
      </Typography>
      {skills.map((skill, index) => (
        <Box key={index} mb={3}>
          <Typography variant="h6">{skill.name}</Typography>
          <LinearProgress variant="determinate" value={skill.level} />
        </Box>
      ))}
    </Container>
  );
};

export default Skills;
