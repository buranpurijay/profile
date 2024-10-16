import React from 'react';
import { Container, Typography, List, ListItem } from '@mui/material';

const Certifications = () => {
  const certifications = [
    "React - The Complete Guide (incl. React Router & Redux)"
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Certifications
      </Typography>
      <List>
        {certifications.map((cert, index) => (
          <ListItem key={index}>
            <Typography variant="body1">{cert}</Typography>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Certifications;
